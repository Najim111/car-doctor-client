import Banner from "../Banner/Banner";
import About from "../about/About";

import Service from "../service/Service";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-32">
                <About></About>
            </div>
            <div className="my-32">
                <Service></Service>
            </div>
        </div>
    );
};

export default Home;