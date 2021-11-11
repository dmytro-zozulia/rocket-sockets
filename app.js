// JavaScript Document
/*eslint-env es6*/

//Link animations vars
const links = document.querySelectorAll(".menu a");
const list = document.querySelector(".menu");
const upbtn = document.querySelector("#scroll-up-btn");
const home = document.querySelector("#home-link");

links.forEach((link) => {
  link.addEventListener("click", function () {
    list.querySelector(".cool-link").classList.remove("cool-link");
    this.classList.add("cool-link");
  });
});

upbtn.addEventListener("click", function () {
  this.classList.add("clean-btn");
  window.scrollTo(0, 0);
});

home.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

const navSlide = () => {
  //burger menu vars
  const menuBtn = document.querySelector(".menu-btn");
  const sideMenu = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".menu li");

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("menu-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    menuBtn.classList.toggle("toggle");
  });
};

navSlide();

///adding sticky on mobile

const element = document.querySelector("#story");
const navbar = document.querySelector("nav");
const heroImg = document.querySelector("#home");

navOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "0px",
};

// observer to adjust the nav position
const observerNav = new IntersectionObserver(function (entries, observerNav) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbar.classList.remove("sticky");
    } else {
      navbar.classList.add("sticky");
    }
  });
}, navOptions);

observerNav.observe(element);

// story section appearing animation observer

const storyPictureLeft = document.querySelectorAll(".inside-studio");
const storyText = document.querySelector(".story-text");
const tangledCordsImage = document.querySelectorAll(".tangled-cords");
const backgroundLine = document.querySelector(".background-line");

storyOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "-100px",
};

const observerStory = new IntersectionObserver(function (
  entries,
  observerStory
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
    } else {
      storyPictureLeft.forEach((el) => {
        el.classList.add("fade-in-from-top");
      });
      tangledCordsImage.forEach((el) => {
        el.classList.add("fade-in-from-right");
      });
      storyText.classList.add("fade-in-from-right");
      backgroundLine.classList.add("fade-in-from-top");
    }
  });
},
storyOptions);

observerStory.observe(element);

//observer for contact animations section

const contactSection = document.querySelector("#contact");
const mailboxXs = document.querySelector("#mailbox-xs");
const mailboxMd = document.querySelector("#mailbox-md");
const mailboxSm = document.querySelector("#mailbox-sm");
const mailboxXl = document.querySelector("#mailbox-xl");

const contactDetails = document.querySelector("#contact-right");
const contactText = document.querySelector("#contact-text");
const contactLine = document.querySelector("#contact-line-2");
const flyingTrajectory = document.querySelector("#contact-line");

contactOptions = {
  root: null,
  threshold: 0.2,
  rootMargin: "0px",
};

const observerContact = new IntersectionObserver(function (
  entries,
  observerContact
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      console.log("not interesect");
    } else {
      console.log("intersect");
      mailboxXs.classList.add("fly-rotating-from-left");
      mailboxSm.classList.add("fly-rotating-from-left");
      mailboxMd.classList.add("fly-rotating-from-left");
      mailboxXl.classList.add("fly-rotating-from-left");
      contactDetails.classList.add("fade-in-from-right");

      contactText.classList.add("fade-in-from-left");
      contactLine.classList.add("fade-in-from-left");
      flyingTrajectory.classList.add("fade-in-from-top");
    }
  });
},
contactOptions);

observerContact.observe(contactSection);

// intro animation

let logoIntro = document.querySelector(".logo-intro");
let intro = document.querySelector(".intro");
let logoSpan = document.querySelectorAll(".logo-intro");
let navTop = document.querySelector(".nav");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 400);
    });
    setTimeout(() => {
      logoSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (index + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);

    //get a reference to the animation-wrapper

    const animWrapper = document.querySelector(".animation-wrapper");
    const loadWrapper = document.querySelector(".run-once");

    //get the 'animationSeen' cookie and store in a variable
    const seenAnimation = Cookies.get("animationSeen");

    //if the 'animationSeen" is undefined
    if (!seenAnimation) {
      //display the loading-wrapper
      loadWrapper.style.display = "block";
      setTimeout(() => {
        navTop.classList.add("slide-down");
      }, 2003);
      // show the page-wrapper
      // set the animationSeen cookie to expire in 24h
      Cookies.set("animationSeen", 1, { expires: 1 });
    } else {
      // else if animationSeen cookie exists
      // the user has already seen the animation
      navTop.classList.add("loaded-down");
      // hide the loading-wrapper
      loadWrapper.style.visibility = "hidden";
      // show the page
      animWrapper.style.display = "flex";
    }
  });
});
