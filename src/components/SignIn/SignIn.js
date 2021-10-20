
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Redirect, useLocation } from 'react-router';
import UseAuth from "../../hooks/UseAuth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const SignIn=()=> {  
const location = useLocation();
const {user,signInUsingGoogle,registerd,signInwithEmail}= UseAuth();
const { register, handleSubmit, formState: { errors } } = useForm();
const[toggle,setToggle]=useState(false);

const handleToggle=()=>{
  setToggle((!toggle));
}

//console.log("came from",location.state?.from?.pathname);
const redirectedPath = location.state?.from?.pathname || "/";

/////////////////////////////////////////google sign in/////////////////////////////////////////////
const onSubmit = data => {
  console.log(data);
  const {email,password,name} = data;
  if(toggle){
    registerd(email,password,name);
  }
  else{
  signInwithEmail(email,password);
  }

}
console.log(user);

  //handlesubmit islogin handlename handle email handlepass handletoggle 
  return (
    <div className="m-5 w-50 mx-auto d-flex justify-content-center ">
      
           <div className="d-flex flex-column justify-content-center align-items-center border px-4">
           <button onClick={handleToggle} className="btn btn-dark py-2 px-3 fs-4 text-warning">
            {toggle?
              <p>Already Had Account? Click to Sign In</p>
              :
              <p>New User ? Click to Register</p>
            }
            </button>
            
               <div className="mt-4">
               {toggle?
              <h2>Register</h2>
               :
               <h2>Sign In</h2>
               }
               </div>

            <form className="form d-flex flex-column bg-light p-5 align-items-center" onSubmit={handleSubmit(onSubmit)}>   
               {toggle &&
                < input className="p-2 border rounded"  placeholder="Name"  {...register("name")} />
               }
               <br/>
                < input className="p-2 border rounded" placeholder="email"  {...register("email", { required: true })} />
                <br/>
                < input className="p-2 border rounded"  placeholder="password" type="password"  {...register("password")} />
                <br />
                {errors.email && <span>This field is required</span>}
                
                <br />
                < input className="py-1 px-4 border rounded-pill bg-info"  type="submit" />
            </form>

            <button className="btn btn-warning py-1 px-3 my-3" onClick={signInUsingGoogle}>Sign In With Google?</button>

            </div>



        
      {user.email &&
               //(redirectedPath?  <Redirect to={redirectedPath}/> : <Redirect to="/shop"/>)
               <Redirect to={redirectedPath}/>

      }

      
    </div>
  );
}

export default SignIn;
