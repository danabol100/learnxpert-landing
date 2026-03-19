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
}
