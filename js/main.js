console.log("cannot GET lol.js :(");
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
const matrixArray = matrix.split("");
const fontSize = 10;
const columns = canvas.width / fontSize;
const drops = [];
let z = 0;

for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff41";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 35);

const texts = [
  "Beginner-intermediate",
  "Find the flag on this website",
  'print("Hello world!")',
  "CTF Player",
  "admin' or 1=1-- ",
  "Hunting for flags",
  "Always learning",
  "<script>alert(1);</script>",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = 100;
  if (isDeleting) typeSpeed /= 2;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

typeEffect();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function j() {
  if (z == 1) {
    //AES things idk
    document.cookie =
      "session=g8HWXElneexcrsoKfIrobWbJP2dinJ00BRzFVbQPb5k=; path=/; max-age=60";
  }
}

document
  .getElementById("discord-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("You can add me with this username: @fedebosio");
  });

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(10, 10, 10, 0.98)";
  } else {
    navbar.style.background = "rgba(10, 10, 10, 0.95)";
  }
});

/*
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! (demo)");
});
*/

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
