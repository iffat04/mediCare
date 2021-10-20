import React from 'react';
import img from '../images/notfound.png'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="container">
            <img width="600px" height="400px" src={img} alt="" />
            <br/>
            <Link to="/">
                <button className="btn btn-warning">Back to Home</button>
            </Link>

        </div>
    );
};

export default NotFound;