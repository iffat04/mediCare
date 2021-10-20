import React, { useEffect, useState } from 'react';


const TodaysDoctor = () => {
    const[doctors,setdoctor]=useState([]);
    useEffect(()=>{
        fetch("./doctor.json")
        .then(res=>res.json())
        .then(data=>setdoctor(data));

    },[])
    console.log(doctors)
    return (
        <div id="today-doc" className="my-5">
            < h1 className="my-3 text-center">Todays Doctor</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
{
    doctors.slice(0,9).map(doctor=>
                <div class="col">
                    <div class="card h-100">
                    <div class="card-body p-2 text-center">
                        <h5 class="card-title">{doctor.name}</h5>
                        <p>Scheduale: {doctor.Time}</p>
                        <p>Fee: {doctor.Fees}</p>
                        <p className="text-danger">Specialist: {doctor.specialist}</p>
                    </div>
                    </div>
                </div>
    )            
}
                
            </div>
           
        </div>
    );
};

export default TodaysDoctor;