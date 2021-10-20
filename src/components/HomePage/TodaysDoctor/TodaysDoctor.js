import React, { useEffect, useState } from 'react';


const TodaysDoctor = () => {
    const[doctors,setdoctor]=useState([]);
    useEffect(()=>{
        fetch("./doctor.json")
        .then(res=>res.json())
        .then(data=>setdoctor(data));

    },[])
    //console.log(doctors)
    return (
        <div className="container">
        <div id="today-doc" className="my-5">
            < h1 className="my-3 text-center">Todays Doctor</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
{
    doctors.slice(0,9).map(doctor=>
                <div key={doctor.id} className="col">
                    <div className="card h-100">
                    <div className="card-body p-2 text-center">
                        <h5 className="card-title">{doctor.name}</h5>
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
        </div>
    );
};

export default TodaysDoctor;