// App cache updates
window.applicationCache.addEventListener('updateready', function() {
    alert('app updated, reloading...');
    window.location.reload();
});

// Show first page
$('.page')
    .eq(0)
    .show();


// Page navigation
$('.js-prev, .js-next').click(function() {
    var nPages = $('.page').length;
    var index = $(this).prevAll('.page').length + 1;
    var $page = $('.page:visible');
    var $prev = $page.prev('.page');
    var $next = $page.next('.page');
    if (this.classList.contains('js-next') && $next.length) {
        $page.hide();
        $next.show();
    } else if (this.classList.contains('js-prev') && $prev.length) {
        $page.hide();
        $prev.show();
    }
    var progress = $('.page:visible').prevAll('.page').length + 1 + ' / ' + nPages;
    $('.page_nav__progress').text(progress);
    return false;
});


var start_loc = [5.118915, 7.353078]; // Changed to be somewhere where revisit has data

// Map
var map = L.map('map', {
        center: start_loc,
        dragging: true,
        zoom: 16,
        zoomControl: false,
        doubleClickZoom: false,
        attributionControl: false
    });


// Tile layer
var funcLayer = new L.TileLayer.Functional(function(view) {
    var deferred = $.Deferred();
    var url = 'http://{s}.tiles.mapbox.com/v3/examples.map-20v6611k/{z}/{y}/{x}.png'
        .replace('{s}', 'abcd'[Math.round(Math.random() * 3)])
        .replace('{z}', Math.floor(view.zoom))
        .replace('{x}', view.tile.row)
        .replace('{y}', view.tile.column);
    getImage(url, deferred.resolve);
    return deferred.promise();
});

map.addLayer(funcLayer);

// Revisit api call
getNearbyFacilities(start_loc[0], start_loc[1], 2); 

function getImage(url, cb) {
    // Retrieves an image from cache, possibly fetching it first
    var imgKey = url.split('.').slice(1).join('.').replace(/\//g, '');
    var img = localStorage[imgKey];
    if (img) {
        cb(img);
    } else {
        imgToBase64(url, 'image/png', function(img) {
            localStorage[imgKey] = img;
            cb(img);
        });
    }
};

function imgToBase64(url, outputFormat, callback){
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        var dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback.call(this, dataURL);
        canvas = null; 
    };
    img.src = url;
};


// Location
$('.js-location')
    .click(function() {
        console.log('finding location')
        var $location = $('.question__location')
            .val('Searching...');
        navigator.geolocation.getCurrentPosition(
            function success(position) {
                // Server accepts [lon, lat]
                var text = position.coords.longitude + ', ' + position.coords.latitude;
                $location.val(text);
            }, function(error) {
                console.log(error);
            }, {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0
            });
    });


// Camera selection
var camera = null;
if (window.MediaStreamTrack){
    // Save the last camera id. It's likely the outward facing one.
    MediaStreamTrack.getSources(function(sources) {
        sources.forEach(function(source) {
            if (source.kind == 'video') {
                camera = source.id;
            }
        });
    });
}

// Browser implementations
navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

var playing = false;
var video = $('.js-video')[0];
$('.js-picture')
    .click(function() {        
        if (playing) {
            video.pause();
            navigator.vibrate(50);
        } else {
            navigator.getUserMedia({
                video: {optional: [{sourceId: camera}]}
            }, function(stream) {
                video.src = window.URL.createObjectURL(stream);
                
                setTimeout(function(){
                    video.play();
                }, 100);
                playing = true;
            }, function(err) {
                console.log(err);
            });
        }
    });


/* Revisit stuff */
// Icons ripped from nmis
function getNearbyFacilities(lat, lng, rad) {
    var icon_edu = new L.icon({iconUrl: "icons/normal_education.png"});
    var icon_health = new L.icon({iconUrl: "icons/normal_health.png"});
    var icon_water = new L.icon({iconUrl: "icons/normal_water.png"});
	var url = "http://revisit.global/api/v0/facilities.json"
    function drawPoint(lat, lng, name, type) {
        var marker = new L.marker([lat, lng], {
            title: name,
            alt: name,
            riseOnHover: true
        });

        switch(type) {
            case "education":
                marker.options.icon = icon_edu;
                break;
            case "water":
                marker.options.icon = icon_water;
                break;
            default:
                // just mark it as health 
                marker.options.icon = icon_health;
                break;
        }

        marker.addTo(map);
    };

    var revisit = localStorage.getItem('revisit');
    if (revisit) { // its in localStorage 
        var facilities = JSON.parse(revisit).facilities;
        var facility = null;
        for(i = 0; i < facilities.length; i++) {
            facility = facilities[i];
            // stored lon/lat in revisit, switch around
            drawPoint(facility.coordinates[1], 
                    facility.coordinates[0], 
                    facility.name, 
                    facility.properties.sector);
        }
		
    } else {
        // Revisit ajax req
        $.get(url,{
                near: lat + "," + lng,
                rad: rad,
                limit: 100,
                fields: "name,coordinates,properties:sector", //filters results to include just those three fields,
            },
            function(data) {
                localStorage.setItem('revisit', JSON.stringify(data));
                var facilities = data.facilities;
                var facility = null;
                for(i = 0; i < facilities.length; i++) {
                    facility = facilities[i];
                    // stored lon/lat in revisit, switch around
                    drawPoint(facility.coordinates[1], 
                            facility.coordinates[0], 
                            facility.name, 
                            facility.properties.sector);
                }
            }
        );
	}
}

// Finished
$('.js-submit')
    .click(function() {
        var saving = $('.question__saving')[0];
        saving.classList.add('icon--spin');
        setTimeout(function() {
            // Reset demo
            saving.classList.remove('icon--spin');
            // Reset page
            $('.page')
                .hide()
                .eq(0)
                .show();
            // Reset page nav
            $('.js-prev').click();
        }, 2000);
    });
    
    
    
