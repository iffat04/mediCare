import React from 'react';
import { Redirect, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './Login.css'

const Login = () => {
    const {user,signInUsingGoogle}= UseAuth();
    console.log(user);
    const location = useLocation();
    console.log("came from",location.state?.from?.pathname);
    const redirectedPath = location.state?.from?.pathname || "/";
    
    return (
        <>
        < div className="form-container">
           
            <form >
                <h2 className="bg-info">login please</h2>
                <br />
                <input type="text" name="" id="name" placeholder="name"/>
                <br />
                <br />
                <input type="password" name="" id="password" placeholder="password" />
                <br />
                <br />
            
                <input type="submit" value="Submit" />
                <br />
                <p>New user? please <Link to="/register">Register</Link></p>
                <p>........or......</p>
              
            </form>
            </div>
            <div className="form-container" >
            <button className="btn-regular" onClick={signInUsingGoogle}>Sign in with Google</button>
            </div>
            {user.email &&
               //(redirectedPath?  <Redirect to={redirectedPath}/> : <Redirect to="/shop"/>)
               <Redirect to={redirectedPath}/>

            }
            
        
    </>
    );
};

export default Login;