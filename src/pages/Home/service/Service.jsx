import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="text-center">
            <h3 className="text-2xl text-orange-600 font-bold">Service</h3>
            <h1 className="text-5xl text-black font-bold my-5"> Our Service Area</h1>
            <p className="mb-12">
                the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    service.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <button className="btn btn-outline mt-12 btn-error">More Services</button>
        </div>
    );
};

export default Service;