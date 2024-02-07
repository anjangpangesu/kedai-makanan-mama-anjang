// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
const searchBtn = document.querySelector("#search-button");
const scBtn = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!scBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// search
const searchBox = document.querySelector("#search-box");
const searchForm = document.querySelector(".search-form");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Modal Box
const modalDetail = document.querySelector("#item-detail-modal");
const modalDetailBtn = document.querySelectorAll(".detail-button");

modalDetailBtn.forEach((btn) => {
  btn.onclick = (e) => {
    modalDetail.style.display = "flex";
    e.preventDefault();
  };
});

modalDetailBtn.onclick = (e) => {
  modalDetail.style.display = "flex";
  e.preventDefault();
};

// CLose Modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  modalDetail.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === modalDetail) {
    modalDetail.style.display = "none";
  }
};
