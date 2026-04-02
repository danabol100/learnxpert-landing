"use strict";

window.addEventListener("load", load);

function load() {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("header--scroll-state");
    } else {
      header.classList.remove("header--scroll-state");
    }
  });

  const burger = document.querySelector(".icon-menu");
  const menu = document.querySelector(".header__menu");

  document.addEventListener("click", (e) => {
    const target = e.target;

    //бургер
    if (target.closest(".icon-menu")) {
      document.documentElement.toggleAttribute("data-menu-open");
    }
    //футер
    if (target.closest(".footer-column__title")) {
      if (window.innerWidth > 600) return;

      const currentTitle = target.closest(".footer-column__title");
      const currentList = currentTitle.nextElementSibling;

      const activeTitle = document.querySelector(
        ".footer-column__title[data-footer-menu-open]",
      );

      if (activeTitle && activeTitle !== currentTitle) {
        activeTitle.removeAttribute("data-footer-menu-open");
        activeTitle.nextElementSibling.style.height = "0px";
      }

      const isOpen = currentTitle.hasAttribute("data-footer-menu-open");

      if (isOpen) {
        currentTitle.removeAttribute("data-footer-menu-open");
        currentList.style.height = "0px";
      } else {
        currentTitle.setAttribute("data-footer-menu-open", "");
        currentList.style.height = currentList.scrollHeight + "px";
      }
    }
  });
  const cards = document.querySelectorAll(".benefits__card");

  let current = 0;

  setInterval(() => {
    cards.forEach((card) => card.classList.remove("benefits__card--active"));

    cards[current].classList.add("benefits__card--active");

    current = (current + 1) % cards.length;
  }, 2000);

  const cardsPricing = document.querySelectorAll(".card-plan");
  const defaultCard = document.querySelector(".card-plan--active");

  if (window.matchMedia("(hover: hover)").matches) {
    cardsPricing.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        cardsPricing.forEach((c) => c.classList.remove("card-plan--active"));
        card.classList.add("card-plan--active");
      });

      card.addEventListener("mouseleave", () => {
        cardsPricing.forEach((c) => c.classList.remove("card-plan--active"));
        defaultCard.classList.add("card-plan--active");
      });
    });
  }

  if (window.matchMedia("(hover: none)").matches) {
    cardsPricing.forEach((card) => {
      card.addEventListener("click", () => {
        cardsPricing.forEach((c) => c.classList.remove("card-plan--active"));
        card.classList.add("card-plan--active");
      });
    });
  }
  const bullets = document.querySelectorAll(".swiper-pagination .bullet");

  swiper.on("slideChange", () => {
    bullets.forEach((b) => b.classList.remove("active"));

    // активная точка (3 варианта)
    const index = swiper.realIndex % 3;
    bullets[index].classList.add("active");
  });
}
