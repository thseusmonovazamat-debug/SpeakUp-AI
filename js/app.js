const menuButton = document.querySelector(".menu-button");
const navigationList = document.querySelector(".navigation-list");

menuButton.addEventListener("click", function () {
  navigationList.classList.toggle("is-open");
});