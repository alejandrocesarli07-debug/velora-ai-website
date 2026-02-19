const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const mobile = document.getElementById("mobile");

function setOpen(open){
  burger.setAttribute("aria-expanded", String(open));
  mobile.style.display = open ? "block" : "none";
  mobile.setAttribute("aria-hidden", String(!open));
}

burger?.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") === "true";
  setOpen(!open);
});

mobile?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => setOpen(false));
});

// Temporary: front-end only submit
const form = document.getElementById("leadForm");
const status = document.getElementById("status");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "Submitted ✅ We'll contact you shortly.";
  form.reset();
});
