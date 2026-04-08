// Optional: Add battlefield ambience (embers, smoke, etc.)
document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  // Example: flickering glow effect
  setInterval(() => {
    body.style.background = `radial-gradient(circle at center, #0a0a0a, #1a1a1a, #000 ${Math.random()*10}px)`;
  }, 2000);
});
