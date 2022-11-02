import React from 'react';
import { Form, Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
    }
    return (
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="image" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl text-center font-bold">Login!!</h1>
      <Form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary"  type="submit" value="Login" />
        </div>
      </Form>
      <p className='text-center pb-5'>New to genius Car <Link className='text-orange-600' to="/signup">SignUp</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;