import React from "react";
import {
    MDBBadge,
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const CategoryList = ({name, slug, created_at}) => {

    return (
        <div>
            <MDBBadge className="p-2" pill color='dark' light>
                <Link to={`?kategori=${slug}`} className="text-white">{name}</Link>
            </MDBBadge>

        </div>
    )
}

export default CategoryList;