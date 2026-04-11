/* ============================
   NAVBAR MENU TOGGLE
============================ */
const navMenuBtn = document.querySelector(".nav-menu-btn i");
const navMenu = document.getElementById("myNavMenu");
const header = document.getElementById("header");

function myMenuFunction() {
  navMenu?.classList.toggle("open");
}

if (navMenuBtn && navMenu) {
  navMenuBtn.addEventListener("click", myMenuFunction);
}

/* ============================
   ACTIVE LINK ON SCROLL
============================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  if (header) {
    header.classList.toggle("scrolled", scrollY > 20);
  }

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

if (header) {
  header.classList.toggle("scrolled", window.pageYOffset > 20);
}

/* ============================
   SMOOTH SCROLL FOR LINKS
============================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth"
    });
    navMenu?.classList.remove("open");
  });
});

/* ============================
   TYPING EFFECT (HOME)
============================ */
const typedText = document.querySelector(".typedText");
const words = ["Cybersecurityy", "Telegram Botss", "Web33"];
let i = 0, j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  if (!typedText) return;
  if(i >= words.length) i = 0;
  currentWord = words[i];

  if(isDeleting){
    typedText.textContent = currentWord.substring(0, j--);
  } else {
    typedText.textContent = currentWord.substring(0, j++);
  }

  if(!isDeleting && j === currentWord.length){
    isDeleting = true;
    setTimeout(type, 1900);
  } else if(isDeleting && j === 0){
    isDeleting = false;
    i++;
    setTimeout(type, 620);
  } else {
    setTimeout(type, isDeleting ? 70 : 165);
  }
}
type();

/* ============================
   FADE-IN REVEAL
============================ */
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach(item => revealObserver.observe(item));

/* ============================
   HERO MATRIX RAIN
============================ */
const matrixCanvas = document.querySelector(".matrix-canvas");

if (matrixCanvas) {
  const matrixChars = "01<>/{}#";
  const matrixCtx = matrixCanvas.getContext("2d");
  let matrixColumns = [];
  let matrixFontSize = 14;
  let matrixAnimationId = null;
  let lastMatrixFrame = 0;

  function resizeMatrixCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const rect = matrixCanvas.getBoundingClientRect();
    matrixCanvas.width = Math.floor(rect.width * dpr);
    matrixCanvas.height = Math.floor(rect.height * dpr);
    matrixCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const columnCount = Math.max(1, Math.floor(rect.width / matrixFontSize));
    matrixColumns = Array.from({ length: columnCount }, () => Math.random() * rect.height / matrixFontSize);
  }

  function drawMatrixRain(timestamp) {
    if (timestamp - lastMatrixFrame < 70) {
      matrixAnimationId = window.requestAnimationFrame(drawMatrixRain);
      return;
    }
    lastMatrixFrame = timestamp;

    const width = matrixCanvas.clientWidth;
    const height = matrixCanvas.clientHeight;
    matrixCtx.fillStyle = "rgba(6, 16, 11, 0.08)";
    matrixCtx.fillRect(0, 0, width, height);

    matrixCtx.fillStyle = "rgba(111, 232, 191, 0.55)";
    matrixCtx.font = `${matrixFontSize}px Consolas, monospace`;

    matrixColumns.forEach((columnY, index) => {
      const x = index * matrixFontSize;
      const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      const y = columnY * matrixFontSize;
      matrixCtx.fillText(char, x, y);

      if (y > height && Math.random() > 0.975) {
        matrixColumns[index] = 0;
      } else {
        matrixColumns[index] += 0.55;
      }
    });

    matrixAnimationId = window.requestAnimationFrame(drawMatrixRain);
  }

  resizeMatrixCanvas();
  matrixAnimationId = window.requestAnimationFrame(drawMatrixRain);
  window.addEventListener("resize", resizeMatrixCanvas);
}


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
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-toggle");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    btn.textContent = "🔊";
  } else {
    music.pause();
    btn.textContent = "🔇";
  }
  isPlaying = !isPlaying;
});