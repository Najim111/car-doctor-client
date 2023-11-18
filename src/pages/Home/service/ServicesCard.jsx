
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';


const ServicesCard = ({ service }) => {
    const {_id, img, title, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-[315px] h-[200px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold mb-5">{title}</h2>
                <div className="card-actions flex justify-between items-center">
                    <p className='text-left  text-xl font-semibold text-[#FF3811]'>Price:{price}</p>
                    <Link to={`/booking/${_id}`}>
                    < GoArrowRight className='text-[#FF3811]'></GoArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
