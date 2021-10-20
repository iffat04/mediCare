
import UseServiceData from '../../hooks/UseServiceData';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const[services]=UseServiceData();

    return (
       
        <section className ="container pt-3 mb-3">
            <h2 className ="h3 text-primary fs-1 block-title text-center">Services <small className="text-info fs-5">  We Provide</small></h2>
            <div className="row pt-5 mt-30 g-4">
            {
                services.map(serv=>
                <Service key={serv.id} service={serv}/>
                )
            }
                
               
           </div>
        </section>
    );
};

export default Services;