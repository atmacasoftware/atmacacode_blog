import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
} from 'mdb-react-ui-kit';

const Header = () => {

    return (
        <div>
            <MDBNavbar sticky light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href="/">
                        <img src="/logo.png" alt="Logo" style={{height: '70px'}}/>
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
}

export default Header;