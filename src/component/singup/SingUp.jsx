import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../contextCreate/AuthProvider";

const SingUp = () => {
    const { createUser } = useContext(AuthContext)
    const handelSingUp = e => {
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sing UP</h1>
                        <form onSubmit={handelSingUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value='login' />
                            </div>
                        </form>
                        <p>
                            Already have a account? <Link to={'/login'} className='text-red-500 text-lg'>Sing In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;