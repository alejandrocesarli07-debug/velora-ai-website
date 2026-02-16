const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const yearEl = document.getElementById("year");
const leadForm = document.getElementById("leadForm");
const formStatus = document.getElementById("formStatus");

yearEl.textContent = new Date().getFullYear();

function setMobileNav(open) {
  menuBtn.setAttribute("aria-expanded", String(open));
  mobileNav.style.display = open ? "block" : "none";
  mobileNav.setAttribute("aria-hidden", String(!open));
}

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    setMobileNav(!isOpen);
  });

  // Close mobile nav when clicking a link
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setMobileNav(false));
  });
}

// Copy demo number button
document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const text = btn.getAttribute("data-copy") || "";
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = "Copied ✅";
      setTimeout(() => (btn.textContent = "Copy number"), 1200);
    } catch {
      btn.textContent = "Copy failed";
      setTimeout(() => (btn.textContent = "Copy number"), 1200);
    }
  });
});

// Temporary form handler (front-end only)
// Next step: connect to Airtable via n8n webhook.
if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "Submitted ✅ We'll contact you shortly.";
    formStatus.style.marginTop = "10px";
    leadForm.reset();
  });
}
