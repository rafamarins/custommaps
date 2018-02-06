//CUSTOM GOOGLE MAPS STYLE AND INITIALIZE ON BUTTON/TAB CLICK

function loadMap(data, mapObject, configs) {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var lat = data.geometry.location.lat;
    var lng = data.geometry.location.lng;

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: configs.zoom,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(lat, lng),

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: configs.style
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = mapObject;

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map,
    });

    window.onresize = function(event) {
        mapResize(map);
    };

    mapResize(map);
}

function mapResize(map) {
    google.maps.event.trigger(map, 'resize');
}

//FUTURE IMPLEMENTATION OF AUTO INJECT GMAPS SCRIPT TAG ON LOAD
// window.gMapsCallback = function() {
//     window.dispatchEvent('gMapsLoaded');
// }

// function injectTag(gMapkey) {
//     if (!isgMapLoaded('google-maps')) {
//         var gMapTag = document.createElement('script');
//         gMapTag.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=' + gMapkey + '&callback=&callback=gMapsCallback');
//         gMapTag.setAttribute('name', 'google-maps');
//         document.head.appendChild(gMapTag);
//     }
//     //window.addEventListener('gMapsLoaded', function() {});
// }
// function isgMapLoaded(name) {
//     var scripts = document.getElementsByTagName('script');
//     for (var i = scripts.length; i--;) {
//         if (scripts[i].name == name) return true;
//     }
//     return false;
// }

function getCenter(txtAddress, mapElement, configs) {
    // Exemplo de requisição GET
    var ajax = new XMLHttpRequest();
    ajax.open("GET", 'https://maps.googleapis.com/maps/api/geocode/json?address=' + txtAddress + '&key=' + configs.geocodeKey, true);
    ajax.send();

    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var data = ajax.responseText;
            loadMap(JSON.parse(data).results[0], mapElement, configs.map[0]);
        }
    }
}

function initMap(address, mapElement) {
    getJSON('assets/custommaps.config.json', function(status, data) {
        var configs = data.customMapsconfigs[0];
        getCenter(address, mapElement, configs);
    });
}

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200)
            callback(null, xhr.response);
        else
            callback(status, xhr.response);
    };
    xhr.send();
};