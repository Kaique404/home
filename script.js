/* MENU */
fetch("menu.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("menu-container").innerHTML = html;
  });

/* LOADER */
fetch("loader.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("loader-container").innerHTML = html;
  });

window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("loaded");
      setTimeout(() => loader.remove(), 800);
    }
  }, 1200);
});

/* ANIMAÇÃO AO SCROLL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
