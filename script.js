document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const navbar = document.querySelector(".navbar");
const navLinks = navbar.querySelector("nav ul");
const toggleButton = document.createElement("div");
toggleButton.classList.add("toggle-menu");
toggleButton.innerHTML = `<span></span><span></span><span></span>`;
navbar.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleButton.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      toggleButton.classList.remove("open");
    }
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
