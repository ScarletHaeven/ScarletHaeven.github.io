function navbarMenuToggle() {
  var navLinks = document.querySelectorAll(".nav-list-menu-link");

  navLinks.forEach(navLink => {
    if (!navLink.classList.contains("block")) {
      navLink.classList.add("block");
    } else {
      navLink.classList.remove("block")
    }
  })
}