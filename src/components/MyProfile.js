import React from 'react';
import {homePage} from "../utils/constants";
import {Link} from "react-router-dom";

const MyProfile = (props) => {

    return (
        <div>
            Hello,
            <p>add photo</p>
            <Link to={'/home'}>Home</Link>

        </div>
    );
};

export default MyProfile;