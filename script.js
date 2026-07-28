// ==========================
// SERVICE DATA
// ==========================

const serviceInfo = {

    "Web Development": {

        title: "Web Development",

        text: "We build modern, fast, secure and fully responsive websites using the latest web technologies. Our websites are optimized for performance and work perfectly on mobile, tablet and desktop."

    },

    "UI/UX Design": {

        title: "UI / UX Design",

        text: "We create beautiful, user-friendly and interactive interfaces that improve user experience and increase customer engagement through clean and modern design."

    },

    "SEO Optimization": {

        title: "SEO Optimization",

        text: "We optimize your website for search engines, improve Google rankings, increase organic traffic and help grow your business online."

    }

};

// ==========================
// OPEN MODAL
// ==========================

function openModal(service){

    document.getElementById("modal").style.display="flex";

    document.getElementById("modalTitle").innerHTML=
    serviceInfo[service].title;

    document.getElementById("modalText").innerHTML=
    serviceInfo[service].text;

}
// ==========================
// CLOSE MODAL
// ==========================

function closeModal(){

    document.getElementById("modal").style.display="none";

}

// ==========================
// CLOSE WHEN CLICKING OUTSIDE
// ==========================

window.onclick=function(event){

    const modal=document.getElementById("modal");

    if(event.target===modal){

        closeModal();

    }

};

// ==========================
// CLOSE ON ESC KEY
// ==========================

document.addEventListener("keydown",function(event){

    if(event.key==="Escape"){

        closeModal();

    }

});

// ==========================
// ACTIVE NAVIGATION LINK
// ==========================

const navLinks=document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

    link.addEventListener("click",function(){

        navLinks.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

});

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log("✅ TechNova Landing Page Loaded Successfully");