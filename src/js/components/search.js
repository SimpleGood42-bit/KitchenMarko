(function search(){
  const searchOpen = document?.querySelector('[data-search-open]');
  const searchClose = document?.querySelector('[data-search-close]');
  const inputSearch = document?.querySelector('[data-input]');

  searchOpen?.addEventListener('click', (e) => {
    searchOpen?.classList.add('header__search-btn--active');
    inputSearch?.classList.add('header__search--active');
  });


  searchClose?.addEventListener('click', (e) => {
    searchOpen?.classList.remove('header__search-btn--active');
    inputSearch?.classList.remove('header__search--active');
  });

})();
