const cards=document.querySelectorAll(".card");

const modal=document.getElementById("serviceModal");
const title=document.getElementById("modalTitle");
const text=document.getElementById("modalText");

const close=document.querySelector(".close");

const data=[
{
title:"Web Development",
text:"We create responsive, fast and secure websites using modern technologies. Our websites work perfectly on mobile, tablet and desktop."
},
{
title:"UI / UX Design",
text:"We design beautiful and user-friendly interfaces that provide the best experience for visitors and increase customer engagement."
},
{
title:"SEO Optimization",
text:"We optimize websites for search engines to improve rankings, increase traffic and grow your online business."
}
];

cards.forEach((card,index)=>{

card.onclick=function(){

title.innerHTML=data[index].title;

text.innerHTML=data[index].text;

modal.style.display="flex";

};

});

close.onclick=function(){

modal.style.display="none";

};

window.onclick=function(e){

if(e.target==modal){

modal.style.display="none";

}

};
