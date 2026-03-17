particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3},
color:{value:"#00d4ff"},
line_linked:{enable:true,color:"#00d4ff"}
}

});

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");
const c=+counter.innerText;
const inc=target/100;

if(c<target){
counter.innerText=Math.ceil(c+inc);
setTimeout(update,20);
}

};

update();

});

function toggleTheme(){
document.body.classList.toggle("light");
}

let btn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

btn.style.display="block";

}else{

btn.style.display="none";

}

};

function topFunction(){

document.body.scrollTop=0;
document.documentElement.scrollTop=0;

}
