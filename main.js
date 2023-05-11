let body = document.querySelector("body");
let header = document.querySelector("header");

//Toggle Dark Mode

let toggleDark = document.querySelector(".togle-switch");
let sunAndMoon = document.querySelector(".sun-moon");
let lightOrDark = document.querySelector(".mode span");

const handleClickTogleDarkMode = () => {
  toggleDark.classList.toggle("active");
  sunAndMoon.classList.toggle("active");
  body.classList.toggle("dark");
  if (toggleDark.classList.contains("active")) {
    lightOrDark.textContent = "Light Mode";
  } else {
    lightOrDark.textContent = "Dark Mode";
  }
};

toggleDark.addEventListener("click", handleClickTogleDarkMode);

//close sidebar

let toggleSideBar = document.querySelector(".arow");

const handleClickToggleSideBar = () => {
  toggleSideBar.classList.toggle("close");
  header.classList.toggle("close");
};

toggleSideBar.addEventListener("click", handleClickToggleSideBar);
