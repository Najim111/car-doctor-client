
const BookingsRow = ({ book }) => {
    const { date, service, img, email } = book

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingsRow;