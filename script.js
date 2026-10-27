document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");

if (menuButton && siteHeader) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    siteHeader.classList.toggle("menu-open", !isExpanded);
  });

  siteHeader.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      siteHeader.classList.remove("menu-open");
    });
  });
}
