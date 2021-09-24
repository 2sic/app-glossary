var winAny = window as any;
winAny.appGlossary3 ??= {};
winAny.appGlossary3.init ??= initGloassary3;


function initGloassary3() {
  // get navHight for correct scrollposition
  var nav = document.getElementsByTagName('header')[0];
  var navHeight = (nav != null ? nav.offsetHeight : 0);

  let target = document.querySelector('[data-hash]')
  target.addEventListener('click', () => {
    const elemOffsetY = document.querySelector(`#${target.getAttribute('data-hash')}`).getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({
      top: elemOffsetY,
      left: 0,
      behavior: 'smooth'
    });
  });
  
}