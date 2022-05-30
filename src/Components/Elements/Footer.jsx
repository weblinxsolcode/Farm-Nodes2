import React from 'react'
import { FaDiscord } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>
      <div className='bg_blue2'>
       <div className="container ">
         <div className="d-flex justify-content-center py-3 pb-5">
           <img className='w-10' src="assets/img/logo2.png" alt="" />
         </div>
       <div className='footer'>
          <div className='align-items-center justify-content-center d-flex'>
            <h5 className='text-white text-center Poppins fs-3 fw-bold '>
              Join our community
            </h5>
            <div className='d-flex  ms-lg-5 ms-1 gap-2 gap-lg-3'>
              <Link to="/"> <FaDiscord className='text-white fs-3' /></Link>
              <Link to="/"> <AiOutlineTwitter className='text-white fs-3' /></Link>

            </div>
          </div>
        </div>
        <p className='mb-0 py-3 text-white Poppins text-center'>Copyright @ FarmNodes 2022. All Rights Reserved.</p>
       </div>
      </div>
    </>
  )
}
