import React from "react";
import {MDBInputGroup} from "mdb-react-ui-kit";

const Search = ({onChangeHandler}) => {
    return (
        <>
            <MDBInputGroup tag="form" className='d-flex w-100 mb-4'>
                <input className='form-control blog-search-input' placeholder="Blog arayın..." aria-label="Search"
                       type='Search' onChange={onChangeHandler}/>
            </MDBInputGroup>
        </>
    )
}

export default Search;