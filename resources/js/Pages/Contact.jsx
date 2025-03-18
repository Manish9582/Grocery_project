import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import Header from './Header';
import Fotter from './Fotter';
import { LoginContext } from './useContext/LoginUseCon';
const Contact = () => {
  const [loginPage, setloginPage] = useState(true);

  return (
    <>
      <LoginContext.Provider value={{ loginPage, setloginPage }}>

        <Header />
        <div className='text-center my-12'>
          <div>
            <strong className='text-[40px]'>Contact</strong>
          </div>
          <div className='my-3 ss:px-3  md:px-6'>
            Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci.
            Suspendisse vulputate semper nunc eget rhoncus.
          </div>
        </div>
        <div className='max-w-[1300px] mx-auto h-[auto] my-12 ss:px-3  md:px-6 bg-gradient-to-r from-pink-50 to-white' >
          <div className=' h-[auto] lg:grid grid-cols-12 items-center'>
            <div className='col-start-2 col-end-6 my-24'>
              <div>
                <strong className='text-3xl'>Get in touch</strong>
              </div>
              <p className='text-[14px] my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor,
                congue justo at, lobortis orci.
              </p>
              <div className='flex items-center gap-4 my-3'>
                <CiLocationOn className='text-[22px]' />
                <p className='text-blue-500'>Rani Garden , Shastri Nagar</p>
              </div>
              <div className='flex items-center gap-4 my-3'>
                <MdEmail className='text-[22px]' />
                <p className='text-blue-500'>mk5758029@gmail.com</p>
              </div>
              <div className='flex items-center gap-4 my-3'>
                <IoCallOutline className='text-[22px]' />
                <p>+91 9582747332</p>
              </div>
            </div>
            <div className='col-start-6 col-end-11 p-10 bg-white shadow-md ss:my-4 border-2'>
              <form action="">
                <div className='lg:flex justify-between gap-4'>
                  <input type="text" className='shadow-[0px_0px_1px] w-[100%] h-[38px] outline-none' />
                  <input type="text" className='shadow-[0px_0px_1px] w-[100%] h-[38px] outline-none ss:mt-5' />
                </div>
                <div className='my-5'>
                  <input type="text" className='shadow-[0px_0px_1px] w-[100%] h-[38px] outline-none' />
                </div>
                <div>
                  <textarea name="" id="" className='border-2 w-[100%] outline-none  px-3 py-1'></textarea>
                </div>
                <div className='mt-3'>
                  <input type="submit" className='border-2 px-4 py-1 bg-black text-white outline-none' />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Fotter />

      </LoginContext.Provider>
    </>
  )
}

export default Contact
