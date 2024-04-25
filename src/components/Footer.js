import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import Header from "./Header";


const Footer = () => {
    return (
        <div>
            <MDBFooter className='bg-light text-center text-white'>
                <MDBContainer className='p-4 pb-0'>
                    <section className='mb-4'>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{backgroundColor: '#3b5998'}}
                            href='https://www.facebook.com/atmacacode/'
                            role='button'
                        >
                            <MDBIcon fab icon='facebook'/>
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{backgroundColor: '#ac2bac'}}
                            href='https://www.instagram.com/atmacacode/'
                            role='button'
                        >
                            <MDBIcon fab icon='instagram'/>
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{backgroundColor: '#0082ca'}}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='linkedin-in'/>
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{backgroundColor: '#333333'}}
                            href='https://github.com/atmacasoftware'
                            role='button'
                        >
                            <MDBIcon fab icon='github'/>
                        </MDBBtn>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2024 /
                    <a className='text-white' href='https://atmacacode.net/'>
                        atmacacode.net
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer;