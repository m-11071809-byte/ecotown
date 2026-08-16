
const B={
road:{e:"🛣️",name:"Road",cost:5,transport:5},
plaza:{e:"🧱",name:"Public Plaza",cost:20,h:10,fun:12},

house:{e:"🏠",name:"Eco House",cost:35,cap:4,inc:2,h:5},
shop:{e:"🏪",name:"Green Shop",cost:55,jobs:3,inc:8,h:5},
tree:{e:"🌳",name:"Tree",cost:10,nature:8,air:4},
park:{e:"🌲",name:"Eco Park",cost:35,nature:12,air:3,h:8},
solar:{e:"☀️",name:"Solar",cost:25,energy:10,air:3},
recycle:{e:"♻️",name:"Recycle Center",cost:30,recycle:12,nature:4,jobs:2,inc:4},
bike:{e:"🚲",name:"Bike Hub",cost:20,air:7,h:6},
bus:{e:"🚌",name:"E-Bus",cost:25,air:5,h:6,jobs:1},
school:{e:"🏫",name:"Eco School",cost:65,nature:6,h:10,jobs:4,inc:3},
lab:{e:"🔬",name:"Eco Lab",cost:50,energy:3,nature:3,jobs:3,inc:5}
};
const NPC=[
{name:"Mia",e:"👩",x:25,y:56,lines:["Could we build another park?","The town feels greener today!","I want a bike lane near my home.","I heard the new shop is hiring."]},
{name:"Leo",e:"🧒",x:42,y:43,lines:["Why do solar panels work?","I saw a bird near the river!","Can we build a school?","I want to plant a tree."]},
{name:"Daniel",e:"👨",x:57,y:67,lines:["We need more jobs.","The electric bus is so quiet.","Recycling is getting easier.","I like this neighborhood."]},
{name:"Kim",e:"👩‍🔬",x:70,y:42,lines:["Our Eco Score is changing.","Trees can cool the city.","The river looks healthier.","Research could improve our energy."]},
{name:"Noah",e:"👨‍🌾",x:33,y:78,lines:["The park attracts butterflies.","Let's protect the soil.","Rain is good for our trees.","Could we grow a community garden?"]},
{name:"Ava",e:"👩‍🎨",x:78,y:75,lines:["The town needs a public square.","I love seeing people outside.","A green festival would be fun!","Our city is starting to feel alive."]}
];
const EVENTS=[
["🌳 Tree Planting","Residents want a greener street.",["Plant trees","Spend 25 coins and gain Nature +12, Happiness +7.",()=>{cost(25);G.nature+=12;G.happy+=7;gain(45);log("🌳 Community planting succeeded.")}],["Skip","Save money.",()=>{G.happy-=4;gain(5);log("The planting project was postponed.")}]],
["🚲 Bike Day","A local group wants a car-free afternoon.",["Approve","Air +8, Happiness +10, +70 coins.",()=>{G.air+=8;G.happy+=10;G.coins+=70;gain(50);log("🚲 Bike Day brought the town together.")}],["Decline","Keep normal traffic.",()=>{gain(5)}]],
["🐝 Bee Garden","Pollinators need a safe habitat.",["Create habitat","Nature +14, Happiness +6.",()=>{cost(20);G.nature+=14;G.happy+=6;gain(45);log("🐝 A new bee habitat was created.")}],["Ignore","Do nothing.",()=>{G.nature-=6;gain(5)}]],
["⚡ Power Peak","Demand is higher than expected.",["Use clean power","Energy +10, +45 coins.",()=>{G.energy+=10;G.coins+=45;gain(40);log("⚡ Clean energy handled the peak.")}],["Emergency power","Spend 20 coins.",()=>{cost(20);G.energy+=4;gain(20)}]],
["🗑️ Illegal Dumping","Waste was found beside a road.",["Clean it","Recycling +10, Nature +6.",()=>{cost(20);G.recycle+=10;G.nature+=6;gain(40);log("🧹 The dumping site was cleaned.")}],["Ignore","Let it remain.",()=>{G.recycle-=7;G.nature-=5;gain(5)}]],
["🎪 Green Festival","Tourists could visit the town.",["Host festival","Spend 35, gain 150 coins and Happiness +15.",()=>{cost(35);G.coins+=150;G.happy+=15;gain(70);log("🎪 The Green Festival was a huge success!")}],["Skip","Keep the town quiet.",()=>{G.coins+=10;gain(5)}]]
];
const Q=[
{id:1,t:"🏠 New Neighborhood",d:"Build 3 houses.",type:"houses",n:3,r:80,x:50},
{id:2,t:"💼 Local Economy",d:"Create 8 jobs.",type:"jobs",n:8,r:100,x:65},
{id:3,t:"👥 Growing Community",d:"Reach 16 residents.",type:"pop",n:16,r:100,x:70},
{id:4,t:"🌱 Green City",d:"Reach Eco Score 50.",type:"eco",n:50,r:120,x:80},
{id:5,t:"♻️ Circular Town",d:"Build 2 recycling centers.",type:"recycle",n:2,r:100,x:70},
{id:6,t:"🏫 Education First",d:"Build an Eco School.",type:"school",n:1,r:130,x:90}
];
let G={coins:300,xp:0,level:1,air:20,nature:20,recycle:20,energy:20,water:60,happy:20,weather:"sunny",day:1,minutes:480,objects:[],quests:[],selected:null,build:false,buildType:null};
let npcs=[];
function clamp(v){return Math.max(0,Math.min(100,v))}
function count(t){return G.objects.filter(o=>o.type===t).length}
function pop(){return 4+count("house")*4}
function jobs(){return count("shop")*3+count("recycle")*2+count("school")*4+count("lab")*3+count("bus")}
function income(){return count("house")*2+count("shop")*8+count("recycle")*4+count("school")*3+count("lab")*5}
function score(){return Math.round((G.air+G.nature+G.recycle+G.energy+G.water+G.happy)/6)}
function gain(n){G.xp+=n;while(G.xp>=G.level*100){G.xp-=G.level*100;G.level++;G.coins+=60;toast("⭐ LEVEL UP! Level "+G.level);log("⭐ Mayor reached Level "+G.level+" · +60 coins")}}
function cost(n){if(G.coins<n){toast("❌ Not enough coins");throw new Error("cost")}G.coins-=n}
function apply(t){let b=B[t];G.air+=b.air||0;G.nature+=b.nature||0;G.recycle+=b.recycle||0;G.energy+=b.energy||0;G.happy+=b.h||0}
function render(){
coins.textContent=Math.floor(G.coins);level.textContent=G.level;lv.textContent=G.level;xp.textContent=Math.floor(G.xp);need.textContent=G.level*100;xpbar.style.width=(G.xp/(G.level*100)*100)+"%";popEl.textContent=pop();scoreEl.textContent=score();happy.textContent=Math.round(G.happy);
air.textContent=Math.round(G.air);nature.textContent=Math.round(G.nature);recycle.textContent=Math.round(G.recycle);energy.textContent=Math.round(G.energy);water.textContent=Math.round(G.water);incomeEl.textContent=income();
let hh=Math.floor(G.minutes/60)%24,mm=G.minutes%60;clock.textContent=(hh>=19||hh<6?"🌙":"☀️")+" Day "+G.day+" · "+String(hh).padStart(2,"0")+":"+String(mm).padStart(2,"0");
let sun=hh>=6&&hh<18?"☀️":"🌙";document.getElementById("sun").textContent=sun;
}
const popEl=document.getElementById("pop"),scoreEl=document.getElementById("score"),incomeEl=document.getElementById("income");
function renderObjects(){
document.querySelectorAll(".place").forEach(e=>e.remove());
G.objects.forEach(o=>{let b=B[o.type],el=document.createElement("div");el.className="place"+(G.selected===o.id?" selected":"");el.style.left=o.x+"%";el.style.top=o.y+"%";el.innerHTML=`<span class="icon">${b.e}</span><span class="tag">${b.name}</span>`;el.onclick=e=>{e.stopPropagation();G.selected=o.id;if(!G.build)showModal(b.e+" "+b.name,"This building changes the town economy and environment.",`<div style="font-size:10px">Income: +${b.inc||0}/min<br>Residents: +${b.cap||0}<br>Jobs: +${b.jobs||0}</div>`);renderObjects()};el.onpointerdown=e=>{if(!G.build)return;e.preventDefault();let move=ev=>{let r=map.getBoundingClientRect();o.x=Math.max(4,Math.min(92,(ev.clientX-r.left)/r.width*100));o.y=Math.max(28,Math.min(94,(ev.clientY-r.top)/r.height*100));el.style.left=o.x+"%";el.style.top=o.y+"%"};let up=()=>{document.removeEventListener("pointermove",move);document.removeEventListener("pointerup",up);save()};document.addEventListener("pointermove",move);document.addEventListener("pointerup",up)};map.appendChild(el)});
}
function toggleBuild(){G.build=!G.build;map.classList.toggle("buildmode",G.build);buildBtn.textContent=G.build?"🛠️ BUILD MODE ON":"🛠️ Enter Build Mode";buildBtn.classList.toggle("on",G.build)}
function selectBuild(t){if(!G.build)toggleBuild();G.buildType=t;toast("Selected "+B[t].name+" · click the map")}
map.addEventListener("click",e=>{if(e.target.closest("#npcLayer"))return;if(!G.build||!G.buildType||e.target.closest(".place")||e.target.closest(".npc"))return;let r=map.getBoundingClientRect();let x=Math.max(4,Math.min(92,(e.clientX-r.left)/r.width*100)),y=Math.max(28,Math.min(94,(e.clientY-r.top)/r.height*100));build(BuildType=G.buildType,x,y)});
function build(t,x,y){let b=B[t];if(G.coins<b.cost){toast("❌ Not enough coins");return}G.coins-=b.cost;G.objects.push({id:Date.now()+Math.random(),type:t,x,y});apply(t);gain(12);log("🏗️ Built "+b.name+" · -"+b.cost+" coins");updateQuests();renderObjects();render();save()}
function removeSelected(){if(G.selected==null){toast("Select a building first");return}let i=G.objects.findIndex(o=>o.id===G.selected);if(i<0)return;G.coins+=Math.floor(B[G.objects[i].type].cost*.4);log("🗑️ Removed "+B[G.objects[i].type].name+" · partial refund");G.objects.splice(i,1);G.selected=null;renderObjects();render();updateQuests();save()}
function initNPCs(){
  npcs=[];
  const layer=document.getElementById("npcLayer");
  layer.innerHTML="";
  NPC.forEach((d,i)=>{
    const n={...d,id:i,tx:d.x,ty:d.y};
    const el=document.createElement("div");
    el.className="npc";
    el.style.left=n.x+"%";
    el.style.top=n.y+"%";
    el.innerHTML=`<div class="speech" id="sp${i}"></div><div class="avatar">${n.e}</div><span class="npcname">💬 ${n.name}</span>`;
    el.addEventListener("click",e=>{e.stopPropagation();talk(n)});
    n.el=el;
    npcs.push(n);
    layer.appendChild(el);
  });
}
function npcDestination(n){
  const hour=Math.floor(G.minutes/60)%24;
  let targets=G.objects.filter(o=>["house","shop","school","park","plaza","bike","recycle"].includes(o.type));
  if(!targets.length)return {x:n.x,y:n.y};
  let preferred=hour<9||hour>=19?G.objects.filter(o=>o.type==="house"):hour<17?G.objects.filter(o=>["shop","school","lab","recycle"].includes(o.type)):G.objects.filter(o=>["park","plaza","shop","bike"].includes(o.type));
  if(!preferred.length)preferred=targets;
  return preferred[Math.floor(Math.random()*preferred.length)];
}
function moveNPC(){
  npcs.forEach(n=>{
    if(!n.moveTimer)n.moveTimer=0;
    n.moveTimer--;
    let dx=n.tx-n.x,dy=n.ty-n.y,d=Math.hypot(dx,dy)||1;
    if(d<0.8 || n.moveTimer<=0){
      let dest=npcDestination(n);
      n.tx=Math.max(8,Math.min(90,(dest&&dest.x!=null?dest.x:10+Math.random()*78)+(Math.random()*8-4)));
      n.ty=Math.max(32,Math.min(94,(dest&&dest.y!=null?dest.y:34+Math.random()*58)+(Math.random()*8-4)));
      n.moveTimer=80+Math.floor(Math.random()*100);
    }
    dx=n.tx-n.x;dy=n.ty-n.y;d=Math.hypot(dx,dy)||1;
    n.x+=dx/d*0.075;n.y+=dy/d*0.075;
    n.el.style.left=n.x+"%";n.el.style.top=n.y+"%";
    n.el.style.transform="translate(-50%,-50%)";
    const avatar=n.el.querySelector(".avatar");
    if(avatar){
      // No side-to-side body wobble. Only face the direction of travel.
      avatar.style.transform = dx < -0.01 ? "scaleX(-1)" : "scaleX(1)";
    }
  });
}
function talk(n){let text=n.lines[Math.floor(Math.random()*n.lines.length)];if(G.weather==="rain")text="The rain is helping our trees today!";if(G.weather==="storm")text="I hope the storm passes soon.";if(score()>=60)text="Our town is becoming a real green city!";
let cn=cityNeeds();
if(cn.housing<45)text="We really need more homes around here.";
else if(cn.transport<40)text="Getting around town is still difficult.";
else if(cn.education<40)text="The kids need better access to education.";
else if(cn.fun<40)text="Could we build somewhere to relax?";
else if(cn.commerce<40)text="I wish there were more local shops.";
else if(cn.nature>=70)text="The town feels wonderfully green today.";let el=document.getElementById("sp"+n.id);el.textContent=text;el.classList.add("show");clearTimeout(n.timer);n.timer=setTimeout(()=>el.classList.remove("show"),5000)}
function log(t){document.getElementById("log").innerHTML=t+"<br>"+document.getElementById("log").innerHTML}
function toast(t){let e=document.getElementById("toast");e.textContent=t;e.classList.add("show");clearTimeout(e.t);e.t=setTimeout(()=>e.classList.remove("show"),1800)}
function showModal(t,p,html){mtitle.textContent=t;mtext.textContent=p;mchoices.innerHTML=html||"";modal.style.display="flex"}function closeModal(){modal.style.display="none"}
function eventRandom(){let e=EVENTS[Math.floor(Math.random()*EVENTS.length)];let html=e.slice(2).map(a=>`<button class="choice" onclick="chooseEvent(${EVENTS.indexOf(e)},${e.indexOf(a)===2?0:1})">${a[0]}<br><span style="font-weight:500">${a[1]}</span></button>`).join("");showModal(e[0],e[1],html)}
function chooseEvent(i,j){try{EVENTS[i][2+j][2]();}catch(e){}EVENTS[i];closeModal();clampAll();render();updateQuests();save()}
function clampAll(){["air","nature","recycle","energy","water","happy"].forEach(k=>G[k]=clamp(G[k]))}
function story(){let s=G.level<2?"The land is quiet. Your first residents are waiting for homes.":G.level<4?"Your town is growing. Residents want jobs, schools and green spaces.":G.level<7?"The city is attracting visitors. Now you must balance economy and ecology.":"EcoTown is becoming a model city. Can you reach a truly sustainable future?";showModal("📖 Town Story",s,`<div style="font-size:10px">Population ${pop()} · Jobs ${jobs()} · Eco Score ${score()}</div>`)}
function quiz(){showModal("🧠 Eco Quiz","Which choice is best for a sustainable town?",`<button class="choice" onclick="quizAnswer(true)">🌳 Plant more trees and protect parks</button><button class="choice" onclick="quizAnswer(false)">🗑️ Produce more waste</button>`)}
function quizAnswer(ok){G.coins+=ok?25:5;gain(ok?25:5);log(ok?"🧠 Correct answer · +25 coins":"🧠 Better luck next time");closeModal();render()}
function recycleGame(){let item=["🥤 Plastic bottle","📰 Newspaper","🥫 Metal can","🍌 Banana peel"][Math.floor(Math.random()*4)];showModal("♻️ Sort Waste",item+" — where should it go?",`<button class="choice" onclick="sortAnswer()">♻️ Recycling / Compost</button><button class="choice" onclick="sortAnswer()">🗑️ General waste</button>`)}
function sortAnswer(){G.coins+=15;G.recycle+=4;gain(15);log("♻️ Recycling mini-game complete · +15 coins");closeModal();clampAll();render()}
function updateQuests(){if(!G.quests.length)G.quests=Q.map(q=>({...q,p:0,done:false}));G.quests.forEach(q=>{if(q.done)return;q.p=q.type==="houses"?count("house"):q.type==="jobs"?jobs():q.type==="pop"?pop():q.type==="eco"?score():q.type==="recycle"?count("recycle"):count("school");if(q.p>=q.n){q.done=true;G.coins+=q.r;gain(q.x);log("🎯 Quest complete: "+q.t+" · +"+q.r+" coins");toast("🎯 QUEST COMPLETE!")}});document.getElementById("quests").innerHTML=G.quests.map(q=>`<div class="quest"><div class="qtop"><span>${q.t}</span><span>🪙 ${q.r}</span></div>${q.d}<div class="qbar"><i style="width:${Math.min(100,(q.p/q.n)*100)}%"></i></div>${Math.min(q.p,q.n)}/${q.n} ${q.done?"· ✅ DONE":""}</div>`).join("")}
function weather(){let w=["sunny","sunny","cloudy","rain","rain","storm","drought"][Math.floor(Math.random()*7)];G.weather=w;let m=document.body;m.classList.remove("rainy");if(w==="rain"||w==="storm"){for(let i=0;i<20;i++)setTimeout(makeRain,i*80)}let names={sunny:"☀️ Sunny",cloudy:"⛅ Cloudy",rain:"🌧️ Rain",storm:"⛈️ Storm",drought:"🥵 Heatwave"};log("🌦️ Weather changed: "+names[w]);if(w==="rain"){G.water+=3;G.nature+=2}if(w==="drought"){G.water-=4;G.nature-=2}clampAll()}
function makeRain(){let d=document.createElement("div");d.className="rain";d.textContent="💧";d.style.left=Math.random()*100+"%";map.appendChild(d);setTimeout(()=>d.remove(),1200)}
function cityLifeEvent(){
  const n=cityNeeds();
  if(n.housing<35) { showModal("🏠 Housing Shortage","Residents are struggling to find homes.",`<button class="choice" onclick="closeModal();selectBuild('house')">Build an Eco House</button>`); return; }
  if(n.transport<30) { showModal("🚌 Mobility Problem","Residents are asking for better transport.",`<button class="choice" onclick="closeModal();selectBuild('road')">Build a Road</button><button class="choice" onclick="closeModal();selectBuild('bike')">Build a Bike Hub</button>`); return; }
  if(n.fun<30) { showModal("🎡 Residents Need Fun","People want somewhere to meet.",`<button class="choice" onclick="closeModal();selectBuild('park')">Build an Eco Park</button>`); return; }
  if(n.education<30) { showModal("🎓 Education Request","Parents want more learning spaces.",`<button class="choice" onclick="closeModal();selectBuild('school')">Build an Eco School</button>`); }
}
function tick(){G.minutes+=10;if(G.minutes>=1440){G.minutes=0;G.day++}if(G.minutes%60===0){G.coins+=income();if(pop()>jobs()+6)G.happy-=1;else G.happy+=.3;if(G.weather==="drought")G.nature-=.5;updateQuests();clampAll();render();save()}if(Math.random()<.006)eventRandom();if(Math.random()<.004)cityLifeEvent();render()}
function save(){localStorage.setItem("ecotown-final",JSON.stringify({...G,selected:null,build:false,buildType:null}))}
function load(){try{let d=JSON.parse(localStorage.getItem("ecotown-final"));if(d)Object.assign(G,d)}catch(e){}if(!G.objects.length)G.objects=[{id:1,type:"house",x:20,y:42},{id:2,type:"tree",x:12,y:62},{id:3,type:"tree",x:47,y:77},{id:4,type:"park",x:62,y:70}] ;updateQuests()}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
load();render();renderObjects();initNPCs();setInterval(moveNPC,120);setInterval(()=>{let n=npcs[Math.floor(Math.random()*npcs.length)];if(n)talk(n)},12000);setInterval(tick,1000);setInterval(weather,45000);
