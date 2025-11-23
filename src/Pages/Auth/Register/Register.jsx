import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router';

const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const { createUser, updateUserProfile } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = (data) => {
        const profileImg =  data.photo[0]

        createUser(data.email, data.password)
            .then(result => {
                toast.success("Account created successfully 🚀");
                // navigate(location.state?.from?.pathname || '/')

                // Store the img in form data
                const formData = new FormData()
                formData.append('image', profileImg)

                // Send the photo to store and get the URL
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_Key}`
                axios.post(image_API_URL, formData)
                    .then(res => {
                        console.log('after img upload', res.data.data.url);

                        // Update Profile to firebase
                        const updateProfile = {
                            displayName: data.name, 
                            photoURL: res.data.data.url
                        }
                        updateUserProfile(updateProfile)
                            .then(() => {
                                toast.success("Profile updated successfully 🎉")
                                navigate(location.state || '/');
                            })
                            .catch(() => toast.error("Profile update failed. Try again ⚠️"));
                    })
                    .catch(() => toast.error("Image upload failed. Please try again."));
            })
            .catch(err =>  toast.error(err.message || "Registration failed. Please try again."))
    }

    return (
        <div className='mb-8'>
            <h2 className='font-extrabold text-[3rem]'>Create an Account</h2>
            <p className='text-[1.1rem] my-2'>Register with ZapShift</p>
            <form onSubmit={handleSubmit(handleRegister)} >
                <div className="">
                    <div className="">
                        <fieldset className="fieldset">

                            {/* Name */}
                            <label className="label">Name</label>
                            <input {...register('name', {required: true})} type="text" className="input w-full" placeholder="Your name" />
                                {  errors.name?.type === 'required' && <p className='text-red-500'>name is required</p>  }

                            {/* Photo Field */}
                            <label className="label">Photo</label>
                            <input {...register('photo', {required: true})} type="file" className="w-full file-input" placeholder="Your photo" />
                                { errors.photo?.type === 'required' && <p className='text-red-500'>Photo is required</p> }

                            {/* Email */}
                            <label className="label">Email</label>
                            <input {...register('email', {required: true})} type="email" className="w-full input" placeholder="Email" />
                                { errors.email?.type === 'required' && (<p className='text-red-500'>Email is required</p>)   }

                            {/* Password */}
                            <label className="label">Password</label>
                            <input {...register('password', {required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/ })} type="password" className="input w-full" placeholder="Password" />
                                { errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>  }
                                { errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 character or longer</p> }
                                { errors.password?.type === 'pattern' && <p className='text-red-500'>Password must include uppercase, lowercase, number & special character</p> }
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary text-black mt-4">Register</button>

                        </fieldset>
                        <p className="text-gray-500 dark:text-gray-400 text-center">Already have an account?  <Link state={location.state}  to="/login" className="text-primary font-medium hover:link" >  Login </Link></p>
                        <SocialLogin/>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Register;