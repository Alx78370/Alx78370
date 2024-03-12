
const burgeropen = document.getElementById('icons').innerHTML = "☰";
const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
  const burgerclose = document.getElementById('icons').innerHTML = "✘";
  }
  else {
    const burgeropen = document.getElementById('icons').innerHTML = "☰";
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
