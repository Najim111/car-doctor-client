import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../component/contextCreate/AuthProvider";
import BookingsRow from "./BookingsRow";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])
    return (
        <div>
            <h2 className="text-5xl">booking services:{bookings?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Email</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        bookings.map(book =><BookingsRow 
                        key={book._id}
                        book={book}>
                        </BookingsRow>)
                    }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;