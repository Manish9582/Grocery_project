import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Header from '../Header';
import Fotter from '../Fotter';
import { Link, router } from '@inertiajs/react';
import { toast, ToastContainer } from 'react-toastify';
import { LoginContext } from '../useContext/LoginUseCon';

const AdminLog = ({ error }) => {
  const [eye1, seteye1] = useState(true)
  const [errors, seterrors] = useState([])
  const [adminlogin, setadminlogin] = useState({
    'email': '',
    'password': ''
  })

  useEffect(() => {
    toast.error(error);
  })

  const handleAdminAData = (e) => {
    const { name, value } = e.target;
    setadminlogin((preData) => {
      return {
        ...preData,
        [name]: value
      }
    })
  }

  let newErrors = [];
  function matchEmail() {
    let emailRegex = /^[a-z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/g;
    if (!emailRegex.test(adminlogin.email)) {
      newErrors.push('Enter the correct email')
      seterrors(newErrors)
    } else {
      seterrors(['']);
    }
  }

  function matchPass() {
    let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}/;
    let bigLetter = /[A-Z]/;
    let smlLetter = /[a-z]/;
    let number = /\d/;
    let special = /(?=.*[@$!%*?&])/;

    let errorsPass = [];
    if (!bigLetter.test(adminlogin.password[0])) {
      errorsPass.push('First word is uppercase letter')
    }

    if (!smlLetter.test(adminlogin.password)) {
      errorsPass.push('One lowerletter')
    }
    if (!number.test(adminlogin.password)) {
      errorsPass.push('One number')
    }
    if (!special.test(adminlogin.password)) {
      errorsPass.push('One specail character')
    }
    if (!passRegex.test(adminlogin.password)) {
      errorsPass.push('Enter the strong password')
    }

    if (errorsPass.length > 0) {
      seterrors(errorsPass);
    } else {
      seterrors(['']);
    }
  }

  const HandleLogform = (e) => {
    e.preventDefault();
    router.post('/logsubmit', { adminlogin })
  }
  const [loginPage, setloginPage] = useState(true);

  return (
    <>
      <LoginContext.Provider value={{ loginPage, setloginPage }}>

        <Header />
        <form className='max-w-[600px] border-2 mx-auto my-16 py-8 px-10' onSubmit={HandleLogform}>
          <div className='my-2'>
            <div>
              <label htmlFor="name">Email</label>
            </div>
            <input type="text" className='w-[100%] rounded-sm' onInput={(e) => handleAdminAData(e)} name='email'
              onKeyUp={matchEmail} value={adminlogin.email}
            />
          </div>

          <div className='my-2'>
            <div>
              <label htmlFor="name">Password</label>
            </div>
            <div className='flex items-center border-2 pr-2'>
              <input type={`${eye1 ? 'password' : 'text'}`} className='w-[100%] rounded-sm outline-none border-none'
                onInput={(e) => handleAdminAData(e)} value={adminlogin.password} name='password' onKeyUp={matchPass} />
              <div>
                {eye1 ? (
                  <div className='text-[20px] cursor-pointer' onClick={() => seteye1(!eye1)}><FaEye /></div>
                ) : (
                  <div className='text-[22px] cursor-pointer' onClick={() => seteye1(!eye1)}><FaEyeSlash /></div>
                )}
              </div>
            </div>
          </div>
          <div>
            {errors.map((error) => {
              return (
                <div><p className='text-red-600'>{error}</p></div>
              )
            })}
          </div>
          <div className='mt-6 bg-green-600 text-white text-[19px] font-medium w-[100%] rounded-sm'>
            <input type="submit" className='w-[100%] cursor-pointer py-[7px]' />
          </div>

          <div className='text-center mt-3'>
            <Link href='/form' className='text-red-700 text-[20px] font-bold underline'>Registration</Link>
          </div>
        </form>
        <ToastContainer />
        <Fotter />
      </LoginContext.Provider>

    </>
  )
}

export default AdminLog
