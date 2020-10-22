const menuButton = document.querySelector("#menu");
const closeButton = document.querySelector("#close-icon");
const navElements = document.querySelectorAll(".nav-item");

const openMenu = () => {
  document.querySelector(".open-menu").classList.add("show");
  document.querySelector("body").classList.add("no-scroll");
};

const closeMenu = () => {
  document.querySelector(".open-menu").classList.remove("show");
  document.querySelector("body").classList.remove("no-scroll");
};

// Attach functionality to nav buttons
menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

//Attach close feature to nav items
navElements.forEach((navItem) => {
  navItem.addEventListener("click", closeMenu);
});

// Navbackground toggles
