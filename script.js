// ==============================
// Sticky Header
// ==============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});

// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Scroll Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ==============================
// Footer Year
// ==============================

const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML=

`© ${new Date().getFullYear()} Abdelrahman Zaher | Software Developer`;

}

// ==============================
// Hover Animation
// ==============================

document.querySelectorAll(".card,.project,.item").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

});

});

// ==============================
// Image Hover Effect
// ==============================

document.querySelectorAll(".project img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

img.style.transition=".4s";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

// ==============================
// Console Message
// ==============================

console.log("Portfolio Loaded Successfully 🚀");
