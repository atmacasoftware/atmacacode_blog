import React, {useState, useEffect} from "react";
import axios from "axios";
import {MDBRow, MDBCol, MDBContainer, MDBTypography} from "mdb-react-ui-kit"
import {toast} from "react-toastify";
import Blogs from "../components/Blogs";
import CategoryList from "../components/CategoryList";

const Home = () => {
    const [data, setData] = useState({});
    const [categoryData, categorySetData] = useState({});

    useEffect(() => {
        loadBlogsData();
        loadCategoryData();
    }, []);

    const loadBlogsData = async () => {
        const response = await axios.get("https://www.atmacacode.net/blog/api/tum-yazilar/")
        if (response.status === 200) {
            setData(response.data)
        } else {
            toast.error("Bir hata meydana geldi.");
        }
    }

    const loadCategoryData = async () => {
        const response = await axios.get("https://www.atmacacode.net/blog/api/kategoriler/")
        if (response.status === 200) {
            categorySetData(response.data)
        } else {
            toast.error("Bir hata meydana geldi.");
        }
    }


    return (
        <>
            <MDBContainer className="my-4">
                <MDBRow className="mt-4">
                    <MDBCol className="col-lg-12">
                        {data.length === 0 && (
                            <MDBTypography className="text-center mb-0" tag="h2">
                                Herhangi bir blog yazısı bulunmamaktadır.
                            </MDBTypography>
                        )}
                        <MDBRow>
                            <MDBCol className="col-lg-8 col-md-9 col-sm-12">
                                <MDBContainer>
                                    <MDBRow>
                                        {data.data && data.data.map((item, index) => (
                                            <Blogs
                                                key={index}
                                                {...item}
                                            />
                                        ))}
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCol>
                            <MDBCol className="col-lg-4 col-md-3 hidden-xs">
                                <MDBRow>
                                    <div className="category-list">
                                        {categoryData.data && categoryData.data.map((item, index) => (
                                            <CategoryList
                                                key={index}
                                                {...item}
                                            />
                                        ))}
                                    </div>

                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </>
    );
}

export default Home;