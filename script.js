// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Fake contact form handler (no backend yet)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  statusEl.textContent = "Right now this form is a demo only (no backend).";
  // Later we will connect it to a real backend or a form service.
});
