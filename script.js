let btn = document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

btn.style.display="block";

}else{

btn.style.display="none";

}

};

function topFunction(){

document.body.scrollTop=0;
document.documentElement.scrollTop=0;

}
