import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


// import { useNavigate } from 'react-router-dom';


function Refer() {
const navigate = useNavigate();
    
  return (

    <div className="bg-[#1E1E1E] text-white py-4 px-6 rounded-[20px] font-semibold flex flex-col gap-4 mt-8 relative my-[60px] text-center items-center align-middle">
    <button onClick={() => navigate(-1)}  className="flex items-center pb-2 relative left-[-20%]">
        <FaArrowLeft className="mr-2 " />
      </button>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
        Invite friends to join the Vivstock community and earn 5% of what they deposit on their first transaction. It's simple—share your unique referral link, and when they sign up and deposit, you both benefit! Start referring today and grow your earnings while helping others discover the world of stock market investing with Vivstock.
      </p>
    </div>
  );
}

export default Refer;