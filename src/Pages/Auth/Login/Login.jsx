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
                // console.log(res.user);
                // navigate(location.state?.from?.pathname || '/') 
                navigate(location?.state || '/')
            })
            .catch(err => console.log(err) )
    }

    return (
        <div className=''>
            <h2 className='font-extrabold text-[3rem]'>Welcome Back</h2>
            <p className='text-[1.1rem] my-2'>Login with ZapShift</p>
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className="w-full">
                <div className="">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input {...register('email', {required: true})} type="email" className="input w-full" placeholder="Email" />
                        {
                            errors.email?.type === 'required' && <p className='text-red-500'> Email is required </p>
                        }

                        {/* Password */}
                        <label className="label">Password</label>
                        <input {...register('password', {required: true})} type="password" className="input w-full" placeholder="Password" />
                        {
                            errors.password?.type === 'required' && <p className='text-red-500'> Password is required </p>
                        }

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-primary text-black mt-4">Login</button>
                    </fieldset>
                    <p className="text-gray-500 dark:text-gray-400 text-center">Don’t have any account? <Link state={location.state}  to="/register" className="text-primary font-medium hover:link"> Register </Link></p>
                    <SocialLogin/>
                </div>
            </div>
        </form>
        </div>
    );
};

export default Login;