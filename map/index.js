mapboxgl.accessToken = 'pk.eyJ1IjoibHVjaWEtYXZpbGEiLCJhIjoiY2pyd2wzbmwxMGR4MDRhcGdkdWQyNWZudCJ9.YcO2BfZc6eqfYMSV0rKzpw';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [ -86 , 15 ],
    zoom: 4
});

let hoveredStateId =  null;


map.on('load', function () {
    map.addSource("map", {
        "type": "geojson",
        "data": "./map.geo.json?_id="+Math.random()
    });

    map.addLayer({
        "id": "state-fills",
        "type": "fill",
        "source": "map",
        "layout": {},
        "paint": {
            "fill-color": "#858585",
            "fill-opacity": ["case",
                ["boolean", ["feature-state", "hover"], false],
                0.3,
                0
            ]
        }
    });

    map.addLayer({
        "id": "state-borders",
        "type": "line",
        "source": "map",
        "layout": {},
        "paint": {
            "line-color": "#858585",
        }
    });

    map.on("mousemove", "state-fills", function(e) {
        if (e.features.length > 0) {
            if (hoveredStateId) {
                map.setFeatureState({source: 'map', id: hoveredStateId}, { hover: false});
            }
            hoveredStateId = e.features[0].id;
            map.setFeatureState({source: 'map', id: hoveredStateId}, { hover: true});
        }
    });

    map.on("click", "state-fills", function(e) {
        if (e.features.length > 0) {
            if( e.features[0].properties && e.features[0].properties.link ){
                window.open(e.features[0].properties.link);
            }
        }
    });

    map.on("mouseleave", "state-fills", function() {
        if (hoveredStateId) {
            map.setFeatureState({source: 'map', id: hoveredStateId}, { hover: false});
        }
        hoveredStateId =  null;
    });
});
