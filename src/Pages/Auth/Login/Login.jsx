import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const { signInUser } = useAuth()
    const handleLogin = data => {
        console.log(data);
        signInUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                
            })
            .then(err => {
                console.log(err);
                
            })
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
                </div>
            </div>
        </form>
        <SocialLogin/>
        </div>
    );
};

export default Login;