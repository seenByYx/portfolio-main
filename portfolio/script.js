/* ============================
   NAVBAR MENU TOGGLE
============================ */
const navMenuBtn = document.querySelector(".nav-menu-btn i");
const navMenu = document.getElementById("myNavMenu");

navMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

/* ============================
   ACTIVE LINK ON SCROLL
============================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove("active-link"));
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (activeLink) activeLink.classList.add("active-link");
    }
  });
});

/* ============================
   SMOOTH SCROLL FOR LINKS
============================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* ============================
   TYPING EFFECT (HOME)
============================ */
const typedText = document.querySelector(".typedText");
const words = ["Frontend Developerr", "UI/UX Designerr", "Cybersecurity Enthusiastt"];
let i = 0, j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  if(i >= words.length) i = 0;
  currentWord = words[i];
  
  if(isDeleting){
    typedText.textContent = currentWord.substring(0, j--);
  } else {
    typedText.textContent = currentWord.substring(0, j++);
  }

  if(!isDeleting && j === currentWord.length){
    isDeleting = true;
    setTimeout(type, 1600);
  } else if(isDeleting && j === 0){
    isDeleting = false;
    i++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 150);
  }
}
type();


/* ============================
   PROJECT HOVER EFFECT
============================ */
const projectBoxes = document.querySelectorAll(".project-box");
projectBoxes.forEach(box => {
  box.addEventListener("mouseenter", () => box.classList.add("hover"));
  box.addEventListener("mouseleave", () => box.classList.remove("hover"));
});


/* ============================
   FOOTER DYNAMIC YEAR
============================ */
const footerYear = document.querySelector(".footer-bottom p");
if(footerYear){
  footerYear.innerHTML = `&copy; ${new Date().getFullYear()} <a href="#home">Yxseen</a> - All rights reserved`;
}
function goToProject(url) {
  window.location.href = url;
}
