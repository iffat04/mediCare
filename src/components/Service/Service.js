import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
    const {title,about,logo,department} = props.service;
    //console.log(props);
    return (
        <div className ="col-lg-4 col-sm-6 mb-30 pb-5">
        <Link to ={`/services/${department}`} className =" card h-100" >
            <div className ="box-shadow bg-white rounded-circle mx-auto text-center service"><img src={logo} alt=""/></div>
            <div className="card-body text-center ">
                <h3 className="card-title pt-1">{title}</h3>
                <p className="card-text text-sm">{about}</p><span className="text-sm text-uppercase font-weight-bold">
                   <button className="btn btn-info">  Learn More&nbsp;<i className="fe-icon-arrow-right"></i> </button></span>
            </div>
        </Link>
        </div>
    );
};

export default Service;