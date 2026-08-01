let message =
"Happy Friendship Day! ❤️ I may not know the exact date of Friendship Day, but for me, today is our Friendship Day. I hope our friendship stays the same forever, filled with laughter, support, and wonderful memories. Once again, Happy Friendship Day! 💕";

function unlock(){

let pass=document.getElementById("password").value;

if(pass=="friends2026"){

document.getElementById("lockScreen").style.display="none";

let c=document.getElementById("countdown");

c.style.display="block";

let n=3;

let timer=setInterval(()=>{

c.innerHTML=n;

n--;

if(n<0){

clearInterval(timer);

c.style.display="none";

document.getElementById("main").style.display="flex";

type();

document.getElementById("photo").style.display="block";

}

},1000);

}
else{

document.getElementById("error").innerHTML="Wrong Password ❤️";

}

}

function type(){

let i=0;

let interval=setInterval(()=>{

document.getElementById("typing").innerHTML+=message.charAt(i);

i++;

if(i==message.length)
clearInterval(interval);

},45);

}

for(let i=0;i<40;i++){

let h=document.createElement("div");

h.className="heart";

h.innerHTML="💖";

h.style.left=Math.random()*100+"%";

h.style.fontSize=(20+Math.random()*30)+"px";

h.style.animationDuration=(5+Math.random()*6)+"s";

document.body.appendChild(h);

}
