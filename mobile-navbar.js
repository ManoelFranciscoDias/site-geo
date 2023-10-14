class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

window.addEventListener('load', function () {
  const nav = document.querySelector('nav');
  nav.classList.add('visible');
});

window.onload = function() {
  var scrollToTopButton = document.getElementById('scrollToTop');

  // Quando o usuário rola a página
  window.onscroll = function() {
      if (document.documentElement.scrollTop > 100) {
          scrollToTopButton.style.display = 'block';
      } else {
          scrollToTopButton.style.display = 'none';
      }
  };

  // Quando o botão é clicado
  scrollToTopButton.onclick = function() {
      scrollToTop();
  };
};

// Função para rolar suavemente de volta ao topo
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adicione a opção 'smooth' para a animação suave
  });
}