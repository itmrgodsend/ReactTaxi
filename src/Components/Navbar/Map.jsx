import React from "react";
import '../../App.css';
import mapboxgl from "mapbox-gl";
import PropTypes from 'prop-types'


mapboxgl.accessToken = 'pk.eyJ1IjoiaXRtcmdvZHNlbmQiLCJhIjoiY2tjM2UxN3U1MjcxdzJxbzRxNnRlMzN6OCJ9.t7HmuC1JYzCb4B98PzYXbg';

class Map extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 2
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });


    }

    render() {
        return (
            <div>
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}



export default Map;
