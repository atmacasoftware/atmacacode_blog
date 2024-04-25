import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn, MDBInputGroup
} from 'mdb-react-ui-kit';

const Header = () => {
    return (
        <div>
            <MDBNavbar sticky  light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href="/">
                    <img src="/logo.png" alt="Logo" style={{height: '50px'}} />
                </MDBNavbarBrand>
                <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                    <input className='form-control' placeholder="Blog arayın..." aria-label="Search" type='Search'/>
                    <MDBBtn outline>Ara</MDBBtn>
                </MDBInputGroup>
            </MDBContainer>
        </MDBNavbar>
        </div>
    );
}

export default Header;