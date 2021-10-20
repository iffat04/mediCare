import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark mt-5 p-4 ">
        <div className=" d-flex justify-content-around ">
            <div className="d-flex d-flex flex-column justify-content-start">
            <h2 className="text-white  w-75 pt-3">Login To Connect</h2>
            <Form className="w-75">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
               
            </Form>
            <button  className="btn btn-warning w-50">Submit</button>
            </div>
            <div>
            <div className= "mt-5">
            <h2 className="text-warning">Contact Us </h2>
            <p className="text-white">Address: 65 link road,Badda, 
            <br/> Dhaka-1000,Bangladesh 
            <br/>
            Phone: +546 5532
            <br/>
            Email: <Link className="footer">medicare_09@gmail.com</Link>
            </p>
            </div>

            </div>
            
        </div>
        <p className="text-white mt-2 text-center"> copyright reserved @musicvalley </p>
        </div>
    );
};

export default Footer;