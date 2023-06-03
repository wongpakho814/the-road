// Navbar
const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];
let i = 0;

document.querySelectorAll(".nav-link").forEach((item) => {
  item.style.cssText = `background-color: ${colors[i++]}`;    
});

const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");  
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});
// End of navbar

// Popular tours cards
Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  }
});
// End of popular tours cards