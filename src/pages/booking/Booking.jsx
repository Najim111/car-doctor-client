import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../component/contextCreate/AuthProvider";



const Booking = () => {
    const service = useLoaderData()
    const { title, price, _id, img } = service;
    const { user } = useContext(AuthContext);

    const handelBooking = e => {
        e.preventDefault()

        const from = e.target;
        const name = from.name.value;
        const date = from.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email, date,
            service: title,
            service_id: _id,
            price: price,
            img,
        }
        console.log(booking);


        fetch('http://localhost:5000/booking', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));



        // fetch('http://localhost:5000/booking',{
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(booking)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        // })  
    }
    return (
        <div>
            <form onSubmit={handelBooking}>
                <h2>book service: {title}</h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bBookinged" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bBookinged" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bBookinged" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={' $ ' + price} className="input input-bBookinged" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-block mb-5" type="submit" value="Booking Confirm" />
                </div>
            </form>

        </div>
    );
};

export default Booking;