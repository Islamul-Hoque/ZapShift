import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const handleGoogleSignIn =() => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                
            })
            .then(err => {
                console.log(err.message);
                
            })
    }

    return (
        <div>
             <div className="flex items-center gap-3 ">
                        <hr className="flex-1 border-gray-200" />
                        <span className="text-gray-400 text-sm">or</span>
                        <hr className="flex-1 border-gray-200" />
                    </div>

                    <button onClick={handleGoogleSignIn} className="btn w-full bg-white text-black rounded-md border border-[#e5e5e5] flex items-center justify-center gap-2"> <FcGoogle size={18}/>Login with Google</button>

        </div>
    );
};

export default SocialLogin;