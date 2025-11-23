import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const { signInUser } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);
    

    const handleLogin = data => {
        console.log(data);
        signInUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                // navigate(location.state?.from?.pathname || '/') 
                navigate(location?.state || '/')
            })
            .catch(err => console.log(err) )
    }

    return (
        <div>
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input {...register('email', {required: true})} type="email" className="input" placeholder="Email" />
                        {
                            errors.email?.type === 'required' && <p className='text-red-500'> Email is required </p>
                        }

                        {/* Password */}
                        <label className="label">Password</label>
                        <input {...register('password', {required: true})} type="password" className="input" placeholder="Password" />
                        {
                            errors.password?.type === 'required' && <p className='text-red-500'> Password is required </p>
                        }

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <SocialLogin/>
                    <p className="text-gray-500 dark:text-gray-400 text-center"> Don’t have an account?<Link state={location.state}  to="/register" className="text-gradient font-medium"> Sign Up </Link></p>
                </div>
            </div>
        </form>
        </div>
    );
};

export default Login;