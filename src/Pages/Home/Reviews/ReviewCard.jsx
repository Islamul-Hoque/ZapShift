import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const { user_email, userName, delivery_email, ratings, review:reviews,  parcel_id, pick_up_email, user_photoURL, date } = review

    return (
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow p-8 flex flex-col gap-4 border border-gray-100">
        <FaQuoteLeft className="text-4xl text-teal-200" />
        <p className="text-gray-600 leading-relaxed"> {reviews} </p>


<div className="border-t border-dashed border-teal-300 my-2"></div>


<div className="flex items-center gap-4 mt-2">
<div className="w-12 h-12 rounded-full bg-teal-800 p-1 overflow-hidden"> <img className='rounded-full' src={user_photoURL} alt="" /> </div>
<div>
<h3 className="text-lg font-bold text-teal-900">{userName}</h3>
<p className="text-gray-500 text-sm">Senior Product Designer</p>
</div>
</div>
</div>
    );
};

export default ReviewCard;