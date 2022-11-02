import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center mb-5'>
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h2 className="text-5xl my-4 font-semibold">Our Service Area</h2>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iure assumenda rem! Officia, voluptatum assumenda!</p>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                    key={service._id}
                    service = {service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;