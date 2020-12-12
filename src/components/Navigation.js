import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../logo.png'

function Navigation() {
    return (
        <div>
            <Navbar variant="light">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Village Valet Cleaners
                </Navbar.Brand>
                <Navbar.Text>
                516-867-4546
                </Navbar.Text>
            </Navbar> 
        </div>
    )
}

export default Navigation
