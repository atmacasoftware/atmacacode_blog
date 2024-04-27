import React from "react";
import {
    MDBBadge, MDBBtn,
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const CategoryList = ({name, slug, created_at, handleCategory}) => {

    return (
        <div>
            <MDBBadge className="p-2" style={{cursor:"pointer"}} onClick={() => {handleCategory(slug)}} pill color='dark' light>
                {name}
            </MDBBadge>

        </div>
    )
}

export default CategoryList;