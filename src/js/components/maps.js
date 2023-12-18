ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.76044816238552,37.61539489053962],
      zoom: 13,
    });

    var myPlacemark = new ymaps.Placemark([55.769932626426616,37.63839751505134], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/map-mark.svg',
      iconImageSize: [12, 12]
    });

    myPlacemark.events.add('click', function () {
      document?.querySelector('[data-location]').classList.remove('remove');
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('rulerControl');
}
