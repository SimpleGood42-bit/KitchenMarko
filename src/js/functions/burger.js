import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';


(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');

  burger?.addEventListener('click', (e) => {
    menu?.classList.toggle('header__nav--active');
    burger?.classList.toggle('nav__btn--active');

    if (menu?.classList.contains('header__nav--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

    menuItems?.forEach(el => {
      el.addEventListener('click', () => {
        burger?.setAttribute('aria-expanded', 'false');
        burger?.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('nav__btn--active');
        menu.classList.remove('header__nav--active');
        enableScroll();
      });
    });
})();

