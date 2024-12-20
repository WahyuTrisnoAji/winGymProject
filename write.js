// inisiasi toggle class
const navbarNav = document.querySelector(".navbar-nav");

// function ketika humburger diklik
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// function menghilangkan sidebar dengan mengklik sembarang tempat
const humburger = document.querySelector("#humburger-menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
