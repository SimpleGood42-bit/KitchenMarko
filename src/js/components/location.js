(function location(){
  const location = document?.querySelector('[data-location]');
  const locationClose = document?.querySelector('[data-locationclose]');

  locationClose?.addEventListener('click', (e) => {
    location?.classList.add('remove');

  });
})();
