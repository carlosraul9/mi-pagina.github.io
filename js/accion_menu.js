document.addEventListener("DOMContentLoaded", function() {
  var menuItems = document.querySelectorAll("#menu li a");
  var pages = document.querySelectorAll(".page");

  menuItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
      event.preventDefault();
      var target = item.getAttribute("href");

      // Oculta todas las páginas
      pages.forEach(function(page) {
        page.classList.remove("active");
      });

      // Muestra la página correspondiente al enlace clicado
      document.querySelector(target).classList.add("active");
    });
  });
});