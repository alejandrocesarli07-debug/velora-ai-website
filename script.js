const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

// Mobile nav
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

// Copy buttons
document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const text = btn.getAttribute("data-copy") || "";
    try{
      await navigator.clipboard.writeText(text);
      const old = btn.textContent;
      btn.textContent = "Copiado ✅";
      setTimeout(()=> btn.textContent = old, 1100);
    }catch{
      btn.textContent = "No se pudo copiar";
      setTimeout(()=> btn.textContent = "Copiar número", 1100);
    }
  });
});

// FAQ accordion
document.querySelectorAll("[data-faq]").forEach(q => {
  q.addEventListener("click", () => {
    q.classList.toggle("open");
    const plus = q.querySelector("span");
    if (plus) plus.textContent = q.classList.contains("open") ? "–" : "+";
  });
});

// Temporary form submit (front-end only for now)
const form = document.getElementById("leadForm");
const status = document.getElementById("status");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "Enviado ✅ Te contactamos pronto.";
  form.reset();
});
