document.addEventListener("DOMCcontentLoaded", () => {
    const visible = document.querySelector(".visible");
    const navbar = document.querySelector("nav");

    const menubar = document.querySelector(".menubar");
    menubar.addEventListener("click", () => {
      navbar.classList.toggle('visible')
    });
    console.log('sp')

  });