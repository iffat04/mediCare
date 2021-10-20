
import { useState } from 'react';
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";

import React from 'react';

const MakeAppointment = () => {

const {user,signInUsingGoogle,registerd,signInwithEmail}= UseAuth();
const { register, handleSubmit, formState: { errors } } = useForm()



/////////////////////////////////////////google sign in/////////////////////////////////////////////
const onSubmit = data => {
  console.log(data);
  const {email,password,name} = data;

}
console.log(user);

  //handlesubmit islogin handlename handle email handlepass handletoggle 
  return (
    <div className="m-5 w-50 mx-auto d-flex justify-content-center ">
      
           <div className="d-flex flex-column justify-content-center align-items-center border px-4">
           <h3 className="btn btn-dark py-2 px-3 fs-4 text-warning">
            Appointment Form
            </h3>
            
    
            <form className="form d-flex flex-column bg-light p-5 align-items-center" onSubmit={handleSubmit(onSubmit)}>   
            
                < input className="p-2 border rounded"  placeholder="Patient Name"  {...register("name")} />
               <br/>
                < input className="p-2 border rounded" placeholder="Doctor Name"  {...register("doctor", { required: true })} />
                <br/>
                < input className="p-2 border rounded" placeholder="Date and Time"  {...register("date", { required: true })} />
                <br/>< input className="p-2 border rounded" placeholder="Age"  {...register("age", { required: true })} />
                <br/>
                < input className="p-2 border rounded" placeholder="Weight"  {...register("weight", { required: true })} />
                <br/>

                < input className="p-2 border rounded"  placeholder="password" type="password"  {...register("password")} />
                <br />
                {errors.email && <span>This field is required</span>}
                
                <br />
                < input className="py-1 px-4 border rounded-pill bg-info"  type="submit" />
            </form>

            

            </div>
      
    </div>
  );
}

export default MakeAppointment;
