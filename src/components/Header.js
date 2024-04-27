import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup
} from 'mdb-react-ui-kit';

const Header = () => {

    return (
        <div>
            <MDBNavbar sticky light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href="/">
                        <img src="/logo.png" alt="Logo" style={{height: '70px'}}/>
                    </MDBNavbarBrand>
                    <MDBInputGroup tag="form" className='d-flex w-auto'>
                        <input className='form-control blog-search-input' placeholder="Blog arayın..." aria-label="Search" type='Search'/>
                    </MDBInputGroup>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
}

export default Header;