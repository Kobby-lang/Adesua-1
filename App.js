function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");


  burger.addEventListener("click", () => {
    //toogle nav
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ""
      } else {
        link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    });
    //Animate links
    burger.classlist.toggle("toggle");
  });
}