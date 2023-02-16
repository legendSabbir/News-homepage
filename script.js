const header = document.querySelector(".header")

window.addEventListener("scroll", function () {
  if (this.scrollY > 120) {
    header.classList.add("active")
  } else {
    header.classList.remove("active")
  }
})

const nav = document.querySelector("nav")
const menu_open_btn = document.querySelector(".menu-open")
const menu_close_btn = document.querySelector(".menu-close")
const overlay = document.querySelector(".overlay")

menu_open_btn.addEventListener("click", toggleNav)
menu_close_btn.addEventListener("click", toggleNav)
overlay.addEventListener("click", toggleNav)

function toggleNav () {
  nav.classList.toggle("active")
  overlay.classList.toggle("active")
}