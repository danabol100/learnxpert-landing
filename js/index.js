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
    if (target.closest(".icon-menu")) {
      document.documentElement.toggleAttribute("data-menu-open");
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
