import React, {useEffect, useState} from "react";
import {
    MDBBadge, MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle,
    MDBCol,
    MDBContainer, MDBIcon, MDBListGroup, MDBListGroupItem,
    MDBRow
} from "mdb-react-ui-kit";
import axios from "axios";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import HTMLReactParser from "html-react-parser";

const Blog = () => {

    const [data, setData] = useState({});

    const {slug} = useParams();

    useEffect(() => {
        loadBlogData();
        postBlogIp();
    }, [slug]);

    useEffect(() => {
        document.title = data.name
    }, [data.name])

    useEffect(() => {
        document.getElementsByTagName("META")[3].content=data.description;
    }, [data.description])


    const loadBlogData = async () => {
        const response = await axios.get(`https://www.atmacacode.net/blog/api/tum-yazilar/yazi/${slug}/`)
        if (response.status === 200) {
            setData(response.data.data)
        } else {
            toast.error("Bir hata meydana geldi.");
        }
    }

    const postBlogIp = async () => {
        await axios.post(`https://www.atmacacode.net/blog/api/tum-yazilar/yazi/${slug}/`);
    }


    return (
        <div className="mt-4">
            <MDBContainer className="blog-container">
                <MDBRow>
                    <div className="mb-2">
                        <h3 className="text-start">{data.name}</h3>
                        <div className="d-flex justify-content-between align-items-center">
                            <MDBBadge color='dark' light>{data.category}</MDBBadge>
                            <span className="text-muted">{data.created_at}</span>
                        </div>
                    </div>
                    <div>
                        <div className="blog-main-image">
                            <img className="full-image" src={`https://www.atmacacode.net/atmacacode/${data.image}`} alt="Blog"
                                 />
                        </div>
                    </div>
                    <div>
                        <MDBRow>
                            <MDBCol className="col-lg-9 col-md-9 col-sm-12">
                                <p className="text-start">
                                    {HTMLReactParser(`${data.text}`)}
                                </p>
                            </MDBCol>
                            <MDBCol className="col-lg-3 col-md-3 col-sm-12">
                                <MDBRow>
                                    <MDBCard className="shadow-3">
                                        <MDBCardBody>
                                            <div className="blog--user-img">
                                                <img src={`https://www.atmacacode.net/atmacacode/${data.user_photo}`}
                                                     alt=""/>
                                            </div>
                                            <MDBCardTitle>{data.user}</MDBCardTitle>
                                            <MDBCardText>
                                                {data.user_bio}
                                            </MDBCardText>
                                        </MDBCardBody>
                                        <MDBCardBody>
                                            <MDBBtn
                                                floating
                                                className='m-1'
                                                style={{backgroundColor: '#0082ca'}}
                                                href={data.user_linkedin}
                                                role='button'
                                            >
                                                <MDBIcon fab icon='linkedin-in'/>
                                            </MDBBtn>

                                            <MDBBtn
                                                floating
                                                className='m-1'
                                                style={{backgroundColor: '#333333'}}
                                                href={data.user_github}
                                                role='button'
                                            >
                                                <MDBIcon fab icon='github'/>
                                            </MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBCard className="mt-3 shadow-3 statistic-card">
                                        <MDBCardBody>
                                            <MDBListGroup className="float-start" light>
                                                <MDBListGroupItem
                                                    className="d-flex align-items-center justify-content-start float-start">
                                                    <MDBIcon far icon="eye"/> <span
                                                    style={{marginLeft: '30'}}>{data.view_count} Görüntülenme</span>
                                                </MDBListGroupItem>
                                            </MDBListGroup>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Blog;