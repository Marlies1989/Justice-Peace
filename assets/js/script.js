// mobile menu js

const mobileMenuButton = document.getElementById("mobile-menu");
mobileMenuButton.addEventListener("click", () => show("mobile-open"));

const ctaMenuButton = document.getElementById("cta-menu");
ctaMenuButton.addEventListener("click", () => show("cta-menu-open"));

const ctaMenuClose = document.getElementById("mobile-close");
ctaMenuClose.addEventListener("click", () => show("mobile-open"));

const dropdownMobile = document.getElementById("dropdown-menu-mobile");
dropdownMobile.addEventListener("click", (event) => {
    event.preventDefault(); 
    flex("dropdown-mobile-open");
})

function show(menuId) {
    let menu = document.getElementById(menuId);
    menu.classList.toggle("show");
}

function flex(menuId) {
    let menu = document.getElementById(menuId);
    menu.classList.toggle("flex");
}

// desktop menu js

// js for cta dropdown menu 

const ctaDesktop = document.getElementById("cta-dropdown");
ctaDesktop.addEventListener("mouseover", () => {
    addCtaBackground();
    checkScreenWidth()
})

ctaDesktop.addEventListener("mouseout", () => {
    removeBackground();
})

// js for menu dropdown 

const fullscreenBackground = document.getElementById("background-menu");
const ctaButton = document.getElementById("cta-box");
const ctaArrow = document.getElementById("cta-arrow");
const ctaIcon = document.getElementById("cta-icon");
const menu = document.getElementById("hide-menu-cta-click");
const language = document.getElementById("active-language");

let ctaSubmenu = document.getElementById("cta-content-dropdown");
let submenuCtaBottom = ctaSubmenu.getBoundingClientRect().bottom;

const dropdownMenus = document.querySelectorAll(".dropdown");

dropdownMenus.forEach((dropdown) => {
    dropdown.addEventListener("mouseout", removeBackground);
})

dropdownMenus.forEach((dropdown) => {
    dropdown.addEventListener("mouseover", () => {
        const submenu = dropdown.querySelector(".dropdown-content");
        const submenuBottom = submenu.getBoundingClientRect().bottom;
        fullscreenBackground.style.visibility = "visible";
        ctaButton.style.background = "var(--white)";
        ctaButton.style.color = "var(--blue)";
        ctaArrow.style.background = "var(--white)";
        ctaIcon.style.fill = "var(--blue)";
        fullscreenBackground.style.height = submenuBottom + 20 + 'px';
        language.style.textDecoration = "none";
        language.style.borderBottom = "3px solid var(--white)";
        language.style.background = "white";
        language.style['-webkit-background-clip'] = 'text';
    });
});

function addCtaBackground() {
    fullscreenBackground.style.visibility = "visible";
    fullscreenBackground.style.transitionDuration = "5s";
    fullscreenBackground.style.transition = "ease-in-out";
    ctaButton.style.background = "var(--white)";
    ctaButton.style.color = "var(--blue)";
    ctaArrow.style.background = "var(--white)";
    ctaIcon.style.fill = "var(--blue)";
    fullscreenBackground.style.height = submenuCtaBottom + 20 + 'px';
    language.style.textDecoration = "none";
    language.style.borderBottom = "3px solid var(--white)";
    language.style.background = "white";
    language.style['-webkit-background-clip'] = 'text';
}

function removeBackground() {
        fullscreenBackground.style.visibility = "hidden";
        ctaButton.style.background = "var(--color-blue-gradient)";
        ctaButton.style.color = "var(--white)";
        ctaArrow.style.background = "var(--color-blue-gradient)";
        ctaIcon.style.fill = "var(--white)";
        menu.style.visibility = "visible";
        language.style.textDecoration = "underline solid 3px var(--blue)";
        language.style.borderBottom = "none";
        language.style.background = "var(--color-blue-gradient)";
        language.style['-webkit-background-clip'] = 'text';
  }

function checkScreenWidth() {
    let maxWidth = 1280; 
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth <= maxWidth) {
        menu.style.visibility = "hidden";
    } else {
        menu.style.visibility = "visible";
    }
}

// newsletter dialog 

const newsletter = document.getElementById("newsletter");
const closeNewsletter = document.querySelector(".close-newsletter");
let newsletterCount = 0;

document.addEventListener("mouseleave", (event) => {
    if (event.clientY <= 0 && newsletterCount <= 2 ) {
      newsletter.showModal();
      newsletterCount++;
    }
  });

  closeNewsletter.addEventListener("click", () => {
    newsletter.close();
  });