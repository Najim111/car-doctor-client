import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../component/contextCreate/AuthProvider";
import BookingsRow from "./BookingsRow";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import axios from "axios";
// import swal from "sweetalert";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const secureAxios = useAxiosSecure()

    // const url = `https://car-doctor-server-alpha-ivory.vercel.app/bookings?email=${user?.email}`;
    const url =`/bookings?email=${user?.email}`
    useEffect(() => {
        // axios.get(url,{withCredentials:true})
        //     .then(res => {
        //         setBookings(res.data);
        //     })
        // fetch(url,{credentials:'include'})
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
        secureAxios.get(url)
        .then(res=>setBookings(res.data))


    }, [url, secureAxios]);

    const handelDelete = id => {
        const tost = confirm('are you sure this item is delete')
        if (tost) {
            fetch(`https://car-doctor-server-alpha-ivory.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("delete successfully")
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }
    const handelApproval = id => {
        fetch(`https://car-doctor-server-alpha-ivory.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const update = bookings.find(booking => booking._id === id)
                    update.status = 'confirm'
                    const newBookings = [update, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div>
            <h2 className="text-5xl">booking services:{bookings?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete Button</th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>States</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(book => <BookingsRow
                                key={book._id}
                                book={book}
                                handelDelete={handelDelete}
                                handelApproval={handelApproval}>
                            </BookingsRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;