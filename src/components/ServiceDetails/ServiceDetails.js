import React, { useEffect, useState } from 'react';
import {ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link} from 'react-router-dom';
import UseServiceData from '../../hooks/UseServiceData';




const ServiceDetails = () => {
    const [singleService,setSingleservice]=useState([]);
    
    const {type}= useParams();
    const [services]=UseServiceData();
   
    
    
     useEffect(()=>{
        setSingleservice(services.filter(service=>service.department===type));
     },[services])
     console.log(singleService);
    return (
        <div className="container mx-auto">
            <div className ="row mt-5 ">
                <div className ="col-md-4 m-0 ">
                <ListGroup>
                <ListGroup.Item>Our Services</ListGroup.Item>
                {
                    services.map(service=> <ListGroup.Item variant="primary">{service?.title}</ListGroup.Item> )
                }
                </ListGroup>
                </div>

                <div className ="col-md-8 border border-start-0 ">
                <div className ="row ">
                    <div className ="col-11 col-md-6 d-flex align-items-center">
                    <img className="fluid" src={singleService?.[0]?.image} alt="" />
                    </div>

                    <div className ="col-11 col-md-6">
                      <h1 className="pt-3">{singleService?.[0]?.title} </h1> 
                      <p className="text-wrap">{singleService?.[0]?.about}</p>
                    </div>
                </div>
                </div>
            </div> 
            <Link to="/services">
            <button className="btn btn-info text-center w-75 mt-3 ">All Services</button>
            </Link>
        </div>
    );
};


    
   

export default ServiceDetails;