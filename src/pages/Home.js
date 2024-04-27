import React from "react";
import {MDBRow, MDBCol, MDBContainer, MDBTypography} from "mdb-react-ui-kit"
import Blogs from "../components/Blogs";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";

const Home = ({onChangeHandler, handleCategory, data, categoryData}) => {

    return (
        <>
            <MDBContainer className="my-4">
                <MDBRow className="d-block d-sm-block d-lg-none d-md-none">
                    <div className="category-list category-list-mobile">
                        {categoryData.data && categoryData.data.map((item, index) => (
                            <CategoryList
                                key={index}
                                {...item}
                            />
                        ))}
                    </div>
                </MDBRow>
                <MDBRow className="mt-4">
                    <MDBCol className="col-lg-12">
                        <MDBRow>
                            <MDBCol className="col-lg-9 col-md-9 col-sm-12 col-12 blogs-col">
                                <MDBContainer>
                                    <MDBRow>
                                        {data.length === 0 && (
                                            <MDBTypography note noteColor='warning'>
                                                <strong>Uyarı:</strong> Aradığınız kelimeli ile ilgili herhangi bir yazı
                                                bulunamamıştır. Lütfen başka bir kelime ile arama yapınız.
                                            </MDBTypography>
                                        )}
                                        {data && data.map((item, index) => (
                                            <Blogs
                                                key={index}
                                                {...item}
                                            />
                                        ))}
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCol>
                            <MDBCol className="col-lg-3 col-md-3 d-none d-sm-none d-md-block d-lg-block">
                                <MDBRow>
                                    <Search onChangeHandler={onChangeHandler}/>
                                </MDBRow>
                                <MDBRow>
                                    <h5 className="right-bar-title">Kategoriler</h5>
                                    <div className="category-list">
                                        {categoryData.data && categoryData.data.map((item, index) => (
                                            <CategoryList
                                                handleCategory={handleCategory}
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