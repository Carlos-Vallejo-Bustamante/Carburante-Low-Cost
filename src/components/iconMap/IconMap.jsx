import Draw from 'leaflet';

const IconMap = Draw.icon({
    iconUrl: require('../../assets/point-map.png'),
    iconRetinaUrl: require('../../assets/point-map.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: 'leaflet-venue-icon'
})

export default IconMap;