"use strict";

window.addEventListener("load", load);

function load() {
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
    // убираем active у всех
    cards.forEach((card) => card.classList.remove("benefits__card--active"));

    // добавляем текущей
    cards[current].classList.add("benefits__card--active");

    // переходим к следующей
    current = (current + 1) % cards.length;
  }, 2000); // 2 секунды
}
