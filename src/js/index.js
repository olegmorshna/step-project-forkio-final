// const icon = document.querySelector(".header__menu-icon");
// const menu = document.querySelector(".header__nav");

// icon.addEventListener("click", function () {
//   icon.classList.toggle("menu-icon-active");
//   menu.classList.toggle("header__nav-open");
// });

const icon = document.querySelector(".header__menu-icon");
const menu = document.querySelector(".header__nav");
const toggleMenu = function () {
  menu.classList.toggle("header__nav-open");
  icon.classList.toggle("menu-icon-active");
};

icon.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", (e) => {
  const target = e.target;
  const isMenu = target == menu || menu.contains(target);
  const isMenuActive = menu.classList.contains("header__nav-open");

  if (!isMenu && isMenuActive) {
    toggleMenu();
  }
});
