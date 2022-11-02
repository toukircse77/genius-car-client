import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const {user,createUser} = useContext(AuthContext);
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result => {
            console.log(result.user)
            form.reset();
        }).catch(err => console.error(err));
    }
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className='w-3/4' src={img} alt="image" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center text-orange-500 font-bold">Regi<span className='text-black'>ster!!</span></h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="input your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder=" input your email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                  <input className="btn btn-primary"  type="submit" value="Register" />
              </div>
            </form>
            <p className='text-center pb-5'>All ready have an account <Link className='text-orange-600' to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;