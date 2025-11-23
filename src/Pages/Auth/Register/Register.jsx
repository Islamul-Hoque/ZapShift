import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const { createUser } = useAuth()
    const handleRegister = (data) => {
        console.log('After Register', data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                
            })
            .catch(err => {
                console.log(err);
                
            })
    }

    return (
        <div>
            <h3>Register</h3>
            <form onSubmit={handleSubmit(handleRegister)} >
                <fieldset className="fieldset">
                
                    {/* Email */}
                    <label className="label">Email</label>
                    <input {...register('email', {required: true})} type="email" className="input" placeholder="Email" />
                    {
                        errors.email?.type === 'required' && (<p className='text-red-500'>Email is required</p>)
                    }

                    {/* Password */}
                    <label className="label">Password</label>
                    <input {...register('password', {required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/ })} type="password" className="input" placeholder="Password" />
                    {
                        errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 character or longer</p>
                    }
                    {
                        errors.password?.type === 'pattern' && <p className='text-red-500'>Password must include uppercase, lowercase, number & special character</p>
                    }
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
            </form>
            <SocialLogin/>
        </div>
    );
};
export default Register;