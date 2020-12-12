import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import { Container, Col, Row } from 'react-bootstrap'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
    <Container>
        <Row className="pt-5">
            <Col>
            <div className="map">
                <h4 className="map-h2 pb-3">Come Visit Us</h4>
            
                <div className="google-map">
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyA5A0ZfpIRPfkohjASi2mFd3NgZ50RRDe4' }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                    >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                    />
                    </GoogleMapReact>
                </div>
            </div>
            </Col>
        </Row>
    </Container>
)



export default Map