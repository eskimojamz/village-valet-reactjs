import React from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap'
import tShirtImg from '../tshirt-solid.svg'
import cutImg from '../cut-solid.svg'
import './Body.css'

function Body() {
    return (
        <div>
            <Container>
                <Row className="p-5">
                <Col>
                    <p>Village Valet Cleaners has proudly served the Merrick and Long Island communities for over 30 years. We offer the highest standard of professional dry cleaning for all of your garments. </p>
                </Col>
                </Row>
                
                <Row className="p-5">
                <Col>
                    <h4>Our Services</h4>
                    <Figure className="p-1 mx-2">
                    <Figure.Image
                        className="p-3 icon"
                        src={tShirtImg}
                        height="75px"
                        width="75px"
                    />
                    <Figure.Caption>
                        <h6>Dry Cleaning</h6>
                    </Figure.Caption>
                    </Figure>

                    <Figure className="p-1 mx-2">
                    <Figure.Image
                        className="p-3 icon"
                        src={cutImg}
                        height="75px"
                        width="75px"
                    />
                    <Figure.Caption>
                        <h6>Tailoring</h6>
                    </Figure.Caption>
                    </Figure>

                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Body
