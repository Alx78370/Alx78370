const burgeropen = (document.getElementById("icons").innerHTML = "☰");
const links = document.querySelectorAll("nav li");

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false);
  window.addEventListener(wheelEvent, preventDefault, wheelOpt);
  window.addEventListener("touchmove", preventDefault, wheelOpt);
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
icons.addEventListener("click", () => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    const burgerclose = (document.getElementById("icons").innerHTML = "✘");
    disableScroll();
  } else {
    const burgeropen = (document.getElementById("icons").innerHTML = "☰");
    enableScroll();
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    const burgeropen = (document.getElementById("icons").innerHTML = "☰");
  });
});

function sendMail() {
  const subjectLine =
    document.getElementById("name").value +
    " " +
    document.getElementById("surname").value;
  const body = document.getElementById("Msg").value;
  window.location.href =
    "mailto:alexis.vachet@outlook.fr?subject=" + subjectLine + "&body=" + body;
}
