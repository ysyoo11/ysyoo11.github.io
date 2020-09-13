"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarMenu = document.querySelector(".navbar__menu");

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Navbar toggle button for small screen

const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Make Home transparent when scrolling down

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Handle scrolling when clicking on the navbar menu

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Handle "Contact Me" button

const contactMe = document.querySelector(".home__contact");

contactMe.addEventListener("click", (event) => {
  scrollIntoView("#contact");
});

// Toggle Arrow-up button

const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Scroll down to Skills when clicking stack icons

const major = document.querySelectorAll(".major");
const majorIcon = document.querySelector(".major__icon");

major.forEach((majorIcon) => {
  majorIcon.addEventListener("click", () => {
    scrollIntoView("#skills");
  });
});

// Handle work categories

const workBtnContainer = document.querySelector(".work__categories");
const projectsContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;

  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one

  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
  target.classList.add("selected");

  projectsContainer.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectsContainer.classList.remove("anim-out");
  }, 300);
});

// Functions

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: "smooth",
  });
}
