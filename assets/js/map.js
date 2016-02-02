/*global google */
/*global infowindow */
var markers = [];
var map;

//Google Maps API used
var tournaments = [
    new google.maps.LatLng(44.0521, -123.0867), //Frohnmayer
    new google.maps.LatLng(47.6097, -122.3331), //Emerald City
    new google.maps.LatLng(37.8717, -122.2728), //Cal
    new google.maps.LatLng(44.5667, -123.2833), //Corvallis
    new google.maps.LatLng(43.6167, -116.2000), //Idaho
    new google.maps.LatLng(33.6167, -117.8975), //Newport Beach
    new google.maps.LatLng(34.0722, -118.4441), //UClassic
    new google.maps.LatLng(37.4225, -122.1653) //Stanford
];

var i;
function initialize() {
    'use strict';
    var mapOptions = {
        center: { lat: 39.828127, lng: -98.579404},
        zoom: 4,
        disableDefaultUI: true
    },
        infowindow = new google.maps.InfoWindow({
            maxWidth: 150
        });
    
    map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
    map.setOptions({draggable: false, zoomControl: true, scrollwheel: false, disableDoubleClickZoom: true});

    for (i = 0; i < tournaments.length; i += 1) {
        markers.push(new google.maps.Marker({
            position: tournaments[i],
            map: map,
            animation: google.maps.Animation.DROP
        }));
    }

    google.maps.event.addListener(markers[0], 'click', function () {
        infowindow.setContent('<a href = "http://www.collegemocktrial.org/Frohnmayer%20Tab%20Summary.pdf">Frohmayer Memorial Invitational 2014, Eugene, OR</a></br>' + 
                               '<a href = "http://www.collegemocktrial.org/Frohnmayer%20Tab%20Summary.pdf">Frohmayer Memorial Invitational 2015, Eugene, OR</a>');
        infowindow.open(map, markers[0]);
    });

    google.maps.event.addListener(markers[1], 'click', function () {
        infowindow.setContent('<a href = "http://www.collegemocktrial.org/University%20of%20Washington%20TabSummary.pdf">Emerald City Open 2014, Seattle, WA</a>'
                               + '<a href = "http://www.collegemocktrial.org/University%20of%20Washington%20TabSummary.pdf">Emerald City Open 2015, Seattle, WA</a>');
        infowindow.open(map, markers[1]);
    });
    
    google.maps.event.addListener(markers[2], 'click', function () {
        infowindow.setContent('<a href = "http://www.calmocktrial.com/WTMI_Tab_Summary_FINAL-9.pdf">Lee Park Memorial Invitational, Berkeley, CA</a>'
                               + '<a href = "http://www.calmocktrial.com/WTMI_Tab_Summary_FINAL-9.pdf">Winston Thomas Memorial Invitational, Berkeley, CA</a>');
        infowindow.open(map, markers[2]);
    });

    google.maps.event.addListener(markers[3], 'click', function () {
        infowindow.setContent('<a href = "http://www.collegemocktrial.org/4Corvallis%20Regional%20Tab%20Summary%20-%20FINAL.pdf">Corvallis Regional, Corvallis, OR</a>');
        infowindow.open(map, markers[3]);
    });

    google.maps.event.addListener(markers[4], 'click', function () {
        infowindow.setContent('<a href = "http://www.collegemocktrial.org/2%20-%20Boise%20Regional%20Tab%20Summary%20FINAL.pdf">Boise Regional, Boise, ID</a>');
        infowindow.open(map, markers[4]);
    });

    google.maps.event.addListener(markers[5], 'click', function () {
        infowindow.setContent('<a href = "http://www.collegemocktrial.org/1%20-%20Newport%20Beach%20ORCS%20Tab%20Summary%20FINAL.pdf">Newport ORCS, Newport, CA</a>');
        infowindow.open(map, markers[5]);
    });

    google.maps.event.addListener(markers[6], 'click', function () {
        infowindow.setContent('<a href = "http://www.collegemocktrial.org/1%20-%20Newport%20Beach%20ORCS%20Tab%20Summary%20FINAL.pdf">UCLASSIC, Los Angeles, CA</a>');
        infowindow.open(map, markers[6]);
    });

    google.maps.event.addListener(markers[7], 'click', function () {
        infowindow.setContent('<a href = "http://www.collegemocktrial.org/1%20-%20Newport%20Beach%20ORCS%20Tab%20Summary%20FINAL.pdf">SUMTI, Palo Alto, CA</a>');
        infowindow.open(map, markers[7]);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);