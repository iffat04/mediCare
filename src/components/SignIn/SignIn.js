
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth} from "firebase/auth"
import { useState } from 'react';
import { Redirect, useLocation } from 'react-router';
import UseAuth from "../../hooks/UseAuth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

function SignIn() {
    
const location = useLocation();
    //console.log("came from",location.state?.from?.pathname);
 const redirectedPath = location.state?.from?.pathname || "/";
  //email store
  const [email,setEmail]= useState('');
  //password
  const [pass,setPass]=useState('');
  //error
  const [error, setError] = useState('');
  //toggle display
  const [islogin,setIslogin] = useState(false);
  //display name update profile
  const [name,setName] = useState('');
  //registration complete
  const[isRegistered,setIsRegistered]=useState(false);

  /////////////////////////////////////////google sign in/////////////////////////////////////////////
  const {user,signInUsingGoogle}= UseAuth();

  //form...................................................password and email register and signin

  const handlesubmit = e =>{
    e.preventDefault();
    if(pass.length<6){
        setError("password must be 6 digit");
        return;
    }

    if(!/(?=.*[!@#$&*])/.test(pass)){
      setError("Ensure string has one special case letter.");
      return;
    }

    islogin? loginProcess(email,pass) : createNewUser(email,pass);
    
  }

  //register:
  const auth = getAuth();
  const createNewUser =(email,pass)=>{
    createUserWithEmailAndPassword(auth,email,pass)
    .then(result=>{
      setError("");
      const user = result.user;
      console.log(user)

    })
    .catch(error=>{
      setError(error.message);
    })
  }

  //login

  const loginProcess =(email,pass)=>{
    signInWithEmailAndPassword(auth,email,pass)
    .then(result=>{
      setError("");
      const user = result.user;
      console.log(user)

    })
    .catch(error=>{
      setError(error.message);
    })
  }

  const handleEmail = e =>{
    setEmail(e.target.value);
  }

  const handlePass = e =>{
    setPass(e.target.value);
  }
  

  //toggle
  const handleToggle = e =>{
    setIslogin(e.target.checked);
  }
  console.log(email,pass);
  //name get
  const handleName = e =>{
          setName(e.target.value);
  }
 
 
  return (
    <div className="m-5 w-50 mx-auto">

      <form onSubmit={handlesubmit}>
         {islogin ?
           <h2 className="text-center mb-4 bg-secondary p-3 text-white">Login</h2> 
           :
         <h2 className="text-center mb-4 bg-secondary p-3 text-white">Resister</h2>} 

        {islogin ||
          <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input onBlur={handleName} className="form-control" />
          </div>
        </div>
        }



        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" onBlur={handleEmail} className="form-control" id="inputEmail3"/>
          </div>
        </div>


        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePass} className="form-control" id="inputPassword3"/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={handleToggle} className="form-check-input" type="checkbox" id="gridCheck1"/>
              <label className="form-check-label" htmlFor="gridCheck1">
              
                <p>Already Registerered? </p>
              
              </label>
            </div>
          </div>
        </div>

        <div className="row mb-3 text-danger">
          <h5>{error}</h5>
        </div>
        
      </form>
      
      < div className="text-center">
      <button type="submit" className="btn btn-primary w-25 fs-4 text-center">
        {islogin?
        "Login"
        :
        "Register"
        }
        </button> 

        < p className="w-100 text-info">................................................................................</p>

        <button className="btn btn-warning p-2" onClick={signInUsingGoogle}>Sign In With Google?</button>
      </div>
      {user.email &&
               //(redirectedPath?  <Redirect to={redirectedPath}/> : <Redirect to="/shop"/>)
               <Redirect to={redirectedPath}/>

      }

      
    </div>
  );
}

export default SignIn;
