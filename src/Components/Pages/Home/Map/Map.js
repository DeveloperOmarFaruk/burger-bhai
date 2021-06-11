import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Map.css'

class GoogleMap extends Component {
    render () {
        return (
            <>
                <div className="map-container">
                <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                {/* <div>
                <h1>{this.state.selectedPlace.name}</h1>
                </div> */}
                </InfoWindow>
                </Map>
                </div>
            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCF4ifVXh7Pce1wfCN0C1yhkWtMKt2Sjxg")
})(GoogleMap)
