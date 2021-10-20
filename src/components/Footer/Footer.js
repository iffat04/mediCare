import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark mt-5 p-4 ">
        <div className=" d-md-flex justify-content-around  ">
            <div className="d-flex d-flex flex-column justify-content-start">
            <h2 className="text-white  w-75 pt-3">Left Your Comments</h2>
            <Form className="w-75">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <FloatingLabel className="my-3" controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
               
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

        <p className="text-white mt-2 text-center"> copyright reserved @medicare </p>
        </div>
    );
};

export default Footer;