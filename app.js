// App cache updates
window.applicationCache.addEventListener('updateready', function() {
    alert('app updated, reloading...');
    window.location.reload();
});


// Revisit
localStorage.setItem('revisit', JSON.stringify({"facilities":[{"name":"st felecitas int. nursary/ primary school","coordinates":[7.350122,5.113733],"properties":{"sector":"education"}},{"name":"holy guide secondary school school","coordinates":[7.355035,5.115278],"properties":{"sector":"education"}},{"name":"friedel krofs educational center","coordinates":[7.359303,5.120833],"properties":{"sector":"education"}},{"name":"chrislyn int'l school","coordinates":[7.350401,5.117741],"properties":{"sector":"education"}},{"name":"boy's technical college","coordinates":[7.353362,5.118594],"properties":{"sector":"education"}},{"name":"living stone model school","coordinates":[7.350776,5.115885],"properties":{"sector":"education"}},{"name":"emmanuel int. schools","coordinates":[7.36128,5.116695],"properties":{"sector":"education"}},{"name":"benett int. christain sec. school","coordinates":[7.359279,5.121544],"properties":{"sector":"education"}},{"name":"royalties int. christain school","coordinates":[7.359982,5.121158],"properties":{"sector":"education"}},{"name":"globetty int. childhood","coordinates":[7.348706,5.114887],"properties":{"sector":"education"}},{"name":"truth and faith nursery.pri school","coordinates":[7.35675,5.115477],"properties":{"sector":"education"}},{"name":"truth and faith nursery.pri school","coordinates":[7.35675,5.115477],"properties":{"sector":"education"}},{"name":"st.eugene .primary school","coordinates":[7.352945,5.111983],"properties":{"sector":"education"}},{"name":"sacred heart college","coordinates":[7.35135,5.113841],"properties":{"sector":"education"}},{"name":"mainland int. sec. school","coordinates":[7.354816,5.122756],"properties":{"sector":"education"}},{"name":"friedel kropfs school","coordinates":[7.359331,5.120389],"properties":{"sector":"education"}},{"name":"access int. schools","coordinates":[7.350041,5.110928],"properties":{"sector":"education"}},{"name":"higher grounds intl school","coordinates":[7.350188,5.111083],"properties":{"sector":"education"}},{"name":"osusu secondary school","coordinates":[7.35083,5.119811],"properties":{"sector":"education"}},{"name":"boys tech college","coordinates":[7.352777,5.119178],"properties":{"sector":"education"}},{"name":"asaokpuaja primary sch.","coordinates":[7.35242,5.111041],"properties":{"sector":"education"}},{"name":"eziobu primary school 2","coordinates":[7.352186,5.111824],"properties":{"sector":"education"}},{"name":"eziobu primary school 3","coordinates":[7.351963,5.111946],"properties":{"sector":"education"}},{"name":"queen  esther int sch prim","coordinates":[7.352412,5.119109],"properties":{"sector":"education"}},{"name":"little friends of jesus nur./primary school","coordinates":[7.352224,5.114884],"properties":{"sector":"education"}},{"name":"main comprehensive sec sch","coordinates":[7.354828,5.122588],"properties":{"sector":"education"}},{"name":"kings academy","coordinates":[7.353432,5.119445],"properties":{"sector":"education"}},{"name":"newtrend p s","coordinates":[7.346672,5.116485],"properties":{"sector":"education"}},{"name":"osusu primary school 3","coordinates":[7.352501,5.11708],"properties":{"sector":"education"}},{"name":"newtrend inter sec sch","coordinates":[7.353721,5.121276],"properties":{"sector":"education"}},{"name":"osusu p s 2","coordinates":[7.351946,5.11759],"properties":{"sector":"education"}},{"name":"sweet angels int nursery and primary school","coordinates":[7.353249,5.122914],"properties":{"sector":"education"}},{"name":"sacred heart college","coordinates":[7.351584,5.113033],"properties":{"sector":"education"}},{"name":"osusu primary school 1","coordinates":[7.352287,5.117474],"properties":{"sector":"education"}},{"name":"osusu boys secondary school","coordinates":[7.351403,5.119571],"properties":{"sector":"education"}},{"name":"queen esther sec sch","coordinates":[7.352235,5.119017],"properties":{"sector":"education"}},{"name":"family health clinic","coordinates":[7.355037,5.126192],"properties":{"sector":"health"}},{"name":"chinwendu clinic","coordinates":[7.358186,5.121137],"properties":{"sector":"health"}},{"name":"euna hospital and maternity","coordinates":[7.352931,5.120208],"properties":{"sector":"health"}},{"name":"delta hospital","coordinates":[7.3507,5.1184],"properties":{"sector":"health"}},{"name":"angeled clinic","coordinates":[7.354767,5.123978],"properties":{"sector":"health"}},{"name":"osusu 11 phc","coordinates":[7.357916,5.112703],"properties":{"sector":"health"}},{"name":"st. theresa's maternity home and children's care.","coordinates":[7.354918,5.114678],"properties":{"sector":"health"}},{"name":"evergreen hospital/maternity","coordinates":[7.353303,5.120294],"properties":{"sector":"health"}},{"name":"new life hospital","coordinates":[7.349312,5.117521],"properties":{"sector":"health"}},{"name":"osusu 1 phc","coordinates":[7.351291,5.118331],"properties":{"sector":"health"}},{"name":"el-asamen specialist hospital and maternity","coordinates":[7.358888,5.120441],"properties":{"sector":"health"}},{"name":"nnadozie hospital/ maternity","coordinates":[7.358399,5.118717],"properties":{"sector":"health"}},{"name":"humana hospital","coordinates":[7.359032,5.120836],"properties":{"sector":"health"}},{"name":"todac clinic","coordinates":[7.361883,5.117028],"properties":{"sector":"health"}},{"name":"horstman hospital","coordinates":[7.360166,5.119629],"properties":{"sector":"health"}},{"name":"goodness and mercy hospital","coordinates":[7.345506,5.115793],"properties":{"sector":"health"}},{"name":"nnadozie hospital","coordinates":[7.358426,5.118754],"properties":{"sector":"health"}},{"name":"water point","coordinates":[7.352883,5.114607],"properties":{"sector":"water"}},{"name":"water point","coordinates":[7.352162,5.114821],"properties":{"sector":"water"}},{"name":"water point","coordinates":[7.351152,5.117601],"properties":{"sector":"water"}},{"name":"water point","coordinates":[7.352168,5.110532],"properties":{"sector":"water"}},{"name":"water point","coordinates":[7.353078,5.118915],"properties":{"sector":"water"}},{"name":"water point","coordinates":[7.351073,5.120075],"properties":{"sector":"water"}}],"offset":0,"limit":59,"total":59}));


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
getNearbyFacilities(start_loc[0], start_loc[1], 1); 

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

        return;
    }
    // Could put ajax call back in?
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
    
    
    
