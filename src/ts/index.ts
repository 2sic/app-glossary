var winAny = window as any;
winAny.appGlossary3 ??= {};
winAny.appGlossary3.init ??= initGloassary3;

function initGloassary3() {
  // get navHeight for later use
  var nav = document.getElementsByTagName('header')[0];
  var navHeight = (nav != null ? nav.offsetHeight : 0);

  document.querySelectorAll<HTMLAnchorElement>('.app-glossary3 a[href*="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (!href) return;

      e.preventDefault();
      window.location.hash = href;

      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;

      // substract scrollOffset with navHeight for accurate position
      const elemOffsetY = target.getBoundingClientRect().top + window.scrollY - navHeight;
      // scroll to hash element
      window.scrollTo({
        top: elemOffsetY,
        left: 0,
        behavior: 'smooth'
      });
    });
  });

  // get hash from url and open specific item
  if (window.location.hash) {
    const target = document.querySelector<HTMLElement>(window.location.hash);
    if (target) {
      // substract scrollOffset with navHeight for accurate position
      const elemOffsetY = target.getBoundingClientRect().top + window.scrollY - navHeight;
      // scroll to hash element
      window.scrollTo({
        top: elemOffsetY,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}