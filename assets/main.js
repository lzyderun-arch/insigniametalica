const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
const whatsappUrl = "https://wa.me/8619520704162?text=Hola%2C%20quiero%20cotizar%20insignias%20o%20productos%20met%C3%A1licos%20personalizados.";

if (!document.querySelector(".whatsapp-float")) {
  const whatsappFloat = document.createElement("a");
  whatsappFloat.className = "whatsapp-float";
  whatsappFloat.href = whatsappUrl;
  whatsappFloat.target = "_blank";
  whatsappFloat.rel = "noopener";
  whatsappFloat.setAttribute("aria-label", "Cotizar por WhatsApp");
  whatsappFloat.innerHTML = '<span class="whatsapp-float-icon" aria-hidden="true">WA</span><span class="whatsapp-float-text">WhatsApp</span>';
  document.body.appendChild(whatsappFloat);
}

document.addEventListener("click", (event) => {
  const whatsappLink = event.target.closest('a[href*="wa.me/8619520704162"]');
  if (!whatsappLink || typeof gtag !== "function") return;

  gtag("event", "whatsapp_click", {
    link_url: whatsappLink.href,
    page_location: window.location.href
  });
});
