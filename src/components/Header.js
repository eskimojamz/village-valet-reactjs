import React from 'react'
import GEImg from '../gecleaning.png'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col>
                    <div class="jumbotron">
                        <Image
                        className="mx-auto d-block pb-5 fade-in"
                        src={GEImg}
                        />
                        
                        <h1>Greenearth® Clean</h1>
                        <h3>Our dry cleaning processes are  
                        <em> environmentally friendly, non-toxic and inactivate 
                        bacteria and viruses.</em></h3>
                        <p className="pt-3">
                        <a href="https://www.greenearthcleaning.com/" className="btn btn-light">Learn more </a>
                        </p>
                    </div>    
                    </Col>

                    <Col>
                    <div class="jumbotron">
                        <h1>Dry Cleaning Kills Viruses</h1>
                        <h3>Washing clothes and garments with industry-grade organic chemical 
                        solvents and steaming them under ultra-high temperatures of up to 
                        300 degrees Fahrenheit, <em>removes and kills harmful micro-organisms.</em></h3>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
