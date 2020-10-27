ymaps.ready(function () {
  var myMap = new ymaps.Map("YMapsID", {
    center: [7.891091, 98.294710],
    zoom: 14
  });
myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [7.891091, 98.294710]
            },
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
            7.891091, 98.294710
        ], {
            
            });

    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([7.891091, 98.294710], {
            balloonContent: 'DoubleTree by Hilton Phuket Banthai Resort'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }));
});