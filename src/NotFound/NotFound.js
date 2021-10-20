import React from 'react';
import img from '../images/notfound.jpg'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="container mx-auto d-flex flex-column justify-content-center align-items-center ">
            <img width="600px" height="300px" className="text-center" src={img} alt="" />
            <br/>
            <Link to="/">
                <button className="btn border-primary">Back to Home</button>
            </Link>

        </div>
    );
};

export default NotFound;