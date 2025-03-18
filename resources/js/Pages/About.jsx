import React, { useState } from 'react'
import Header from './Header'
import Fotter from './Fotter'
import { Link, usePage } from '@inertiajs/react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LoginContext } from './useContext/LoginUseCon';

const About = () => {
  const { user, product } = usePage().props;

  const [loginPage, setloginPage] = useState(true);
  return (
    <>
      <LoginContext.Provider value={{ loginPage, setloginPage }}>
        <div>
          <Header />
        </div>
        <div className='bg-gradient-to-t from-green-600 to-yellow-500 py-3 '>
          <div>
            <Link href='/about'>
              <img
                src="https://blinkit.com/careers/sites/default/files/2024-05/about-masthead-desktop.png"
                alt="About Blinkit"
              />
            </Link>
          </div>
          <div className="text-center mt-4">
            <strong className="text-[30px] s:text-[25px] font-semibold text-white">
              Instant commerce indistinguishable from magic
            </strong>
          </div>
        </div>
        <div className='max-w-[1000px] mx-auto my-4 boreder-2 border-rose-400 s:px-3'>
          <div className='my-6'>
            <strong className='text-[25px] font-extrabold'>100x retail in 5 years</strong>
          </div>
          <p>
            <p className='mt-2'>
              magine needing something when you are at home and getting it before you have tied your shoelaces to step out. We are revolutionizing e-commerce by making the stuff most important to you, available to you in a blink of your eye.
            </p>
            <p className='mt-2'>
              We want our customers to focus on the more important things for themselves and not need to plan for the little things that life needs on an everyday basis. We are here to get your chores out of your way.
            </p>
            <p className='mt-2'>
              Our mission is – “instant commerce indistinguishable from magic”. Using a backbone of technology, data sciences, and rich customer insights, we've built a dense and fast network of partner stores enabling lightning fast deliveries in minutes.
            </p>
            <p className='mt-2'>
              We are already one of the largest e-grocery companies in India. Our ambition however, is to be 100x this size in the next five years.
            </p>
            <p className='mt-2'>
              In order to become one of the most important e-retail companies of our generation, we need builders who can think on their feet, take extreme ownership and commit to making outcomes happen. If you are ambitious, smart, and don’t have an ego about it, we’d love to hear from you.
            </p>
            <p className='mt-2'>
              Opportunities to create $100 billion businesses in India are rare. We are on the way and looking for the hungry.
            </p>
            <p className='text-green-600 font-bold mt-2'>
              "Blinkit" is owned & managed by "Blink Commerce Private Limited” (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”
            </p>
          </p>

          <div className='my-6'>
            <div>
              <strong className='text-[25px] text-extrabold'>Some of the people building Blinkit</strong>
            </div>
            <div className='lg:grid md:grid lg grid-cols-3 gap-7 mt-5'>
              <div className='border bg-slate-50 hover:shadow-lg rounded-sm s:mt-2'>
                <div className='h-[300px]'>
                  <img src="mani.jpeg" alt="Manish" className='h-[100%] w-[100%] object-cover ' />
                </div>
                <div className='flex p-3 gap-3'>
                  <Link href=''>
                    <FaLinkedin className='text-[30px]' />
                  </Link>
                  <Link href=''>
                    <FaInstagram className='text-[30px]' />
                  </Link>
                </div>
              </div>
              <div className='border-2 bg-slate-50 rounded-sm hover:shadow-lg  s:mt-2'>
                <div className='h-[300px]'>
                  <img src="varun.jpeg" alt="varun" className='h-[100%] w-[100%] object-cover' />
                </div>
                <div className='flex p-3 gap-3'>
                  <Link href=''>
                    <FaLinkedin className='text-[30px]' />
                  </Link>
                  <Link href=''>
                    <FaInstagram className='text-[30px]' />
                  </Link>
                </div>
              </div>
              <div className='border-2 bg-slate-50 rounded-sm hover:shadow-lg  s:mt-2'>
                <div className='h-[300px]'>
                  <img src="vivek.jpeg" alt="vivek" className='h-[100%] w-[100%] object-cover' />
                </div>
                <div className='flex p-3 gap-3'>
                  <Link href=''>
                    <FaLinkedin className='text-[30px]' />
                  </Link>
                  <Link href=''>
                    <FaInstagram className='text-[30px]' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Fotter />
      </LoginContext.Provider>
    </>
  )
}

export default About