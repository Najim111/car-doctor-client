
const BookingsRow = ({ book,handelDelete,handelApproval }) => {
    const { _id, price, date, service, img, email, status } = book
    

    return (
        <tr>
            <th>
                <button onClick={() => handelDelete(_id)} className="btn btn-sm btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={img} alt='' />
                    </div>
                </div>
            </td>
            <td>{service}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-green-500">Confirmed</span> :
                    <button onClick={()=> handelApproval(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingsRow;