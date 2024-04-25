import React from "react";
import {
    MDBBadge,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBRow
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const Blogs = ({name, category, description, id, slug, image, user_photo, user, created_at}) => {
    const getImage = `https://www.atmacacode.net/atmacacode/${image}`
    const getUserPhoto = `https://www.atmacacode.net/atmacacode/${user_photo}`

    return (
        <div>
            <MDBCol size="12">
                <Link to={`/${slug}`} className="card-link">
                    <MDBCard className="blog-card shadow-0">
                    <MDBRow className='g-0'>
                        <MDBCol md='4 d-flex justify-center align-items-center'>
                            <MDBCardImage src={getImage} alt={name} fluid/>
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle className="text-dark d-flex align-items-start">{name}</MDBCardTitle>
                                <div className="d-flex align-items-start my-1">
                                    <MDBBadge color='dark' light>{category}</MDBBadge>
                                </div>
                                <MDBCardText className="card-text card-description d-flex align-items-start">{description}</MDBCardText>
                                <div className="d-flex justify-content-between align-items-center">
                                    <MDBCardText className="float-start">
                                    <div className="profile-card">
                                        <img src={getUserPhoto} alt="Profile"/>
                                        <span className='text-muted'>{user}</span>
                                    </div>
                                </MDBCardText>
                                <MDBCardText>
                                    <small className='text-muted'>{created_at}</small>
                                </MDBCardText>
                                </div>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                </Link>
                <hr/>
            </MDBCol>
        </div>
    )
}

export default Blogs;