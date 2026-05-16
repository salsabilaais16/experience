const toggle = document.getElementById("toggle");
const menu   = document.getElementById("menu");

toggle.onclick = () => {
  menu.classList.toggle("active");
};


/* ─────────────────────────────────────────────────
   2. ACTIVE NAVBAR LINK
───────────────────────────────────────────────── */
document.querySelectorAll(".nav-menu a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.querySelectorAll(".nav-menu a").forEach(function(n) {
      n.classList.remove("active");
    });
    this.classList.add("active");
    menu.classList.remove("active");
  });
});