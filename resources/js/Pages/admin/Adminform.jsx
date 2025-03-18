import React, { useState } from 'react'
import Header from '../Header'
import Fotter from '../Fotter'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, router } from '@inertiajs/react';
import { toast, ToastContainer } from 'react-toastify';
import { LoginContext } from '../useContext/LoginUseCon';

const Adminform = () => {
  const [admin, setadmin] = useState({
    'name': '',
    'last': '',
    'age': '',
    'gender': '',
    'phone': '',
    'email': '',
    'password': '',
  })
  const [genderr, setgenderr] = useState(true);
  const [eye1, seteye1] = useState(true)
  const [eye2, seteye2] = useState(true)
  const [errors, seterrors] = useState([])
  const [conFirmPass, setconFirmPass] = useState('')
  let newErrors = [];


  const handleAdminAData = (e) => {
    const { name, value } = e.target;
    setadmin((preData) => {
      return {
        ...preData,
        [name]: value
      }
    })
  }
  const checkGender = (e) => {
    setgenderr(e.target.value);
  }


  const fliitheAlldataFun = () => {
    if (admin.name == '' && admin.age == '' && admin.gender == '' && admin.last == '' && admin.email == '' && admin.phone == '' && admin.password == '') {
      toast.error('fill the all data !');
    } else {
      if (admin.name == '') {
        toast.error('fill the name !');
      }
      if (admin.last == '') {
        toast.error('fill the sur name !');
      }
      if (admin.age == '') {
        toast.error('fill the age !');
      }
      if (admin.gender == '') {
        toast.error('fill the gender !');
      }
      if (admin.email == '') {
        toast.error('fill the email !');
      }
      if (admin.phone == '') {
        toast.error('fill the phone !');
      }
      if (admin.password == '') {
        toast.error('fill password !');
      }
    }
  }

  const checkAge = () => {
    let number = /\d/;
    if (!number.test(admin.age)) {
      newErrors.push('Enter only numbers');
      seterrors(newErrors);
      setadmin({ ...admin, age: '' });
    } else {
      seterrors(['']);
    }
  }

  const checkPhone = () => {
    let number = /\d/;
    if (!number.test(admin.phone)) {
      newErrors.push('Enter only numbers');
      seterrors(newErrors);
      setadmin({ ...admin, phone: '' });
    } else if (admin.phone.length > 10) {
      newErrors.push('Its not a number');
      seterrors(newErrors);
    } else {
      seterrors(['']);
    }
  }

  function matchEmail() {
    let emailRegex = /^[a-z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/g;
    if (!emailRegex.test(admin.email)) {
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
    if (!bigLetter.test(admin.password[0])) {
      errorsPass.push('First word is uppercase letter')
    }

    if (!smlLetter.test(admin.password)) {
      errorsPass.push('One lowerletter')
    }
    if (!number.test(admin.password)) {
      errorsPass.push('One number')
    }
    if (!special.test(admin.password)) {
      errorsPass.push('One specail character')
    }
    if (!passRegex.test(admin.password)) {
      errorsPass.push('Enter the strong password')
    }

    if (errorsPass.length > 0) {
      seterrors(errorsPass);
    } else {
      seterrors(['']);
    }
  }


  const ConfirmPasswordFun = () => {
    if (conFirmPass.trim() !== admin.password) {
      newErrors.push("Confirm Passwords don't match");
    }
    if (newErrors.length > 0) {
      seterrors(newErrors);
    } else {
      seterrors(['']);
    }
  };

  const submitAddminData = (e) => {
    e.preventDefault();
    router.post('/addmin', { admin })
  }
  const [loginPage, setloginPage] = useState(true);

  return (
    <>
      <LoginContext.Provider value={{ loginPage, setloginPage }}>

        <Header />
        <form className='max-w-[600px] border-2 mx-auto my-14 py-8 px-10' onSubmit={submitAddminData}>
          <div className='text-center text-[24px]'>
            <strong><u>Admin penal</u></strong>
          </div>

          <div className='my-2'>
            <div>
              <label htmlFor="name">Name</label>
            </div>
            <input type="text" className='w-[100%] rounded-sm' value={admin.name} onInput={(e) => handleAdminAData(e)} name='name' />
          </div>

          <div className='my-2'>
            <div>
              <label htmlFor="name">Last Name</label>
            </div>
            <input type="text" className='w-[100%] rounded-sm' value={admin.last} onInput={(e) => handleAdminAData(e)} name='last' />
          </div>

          <div className='my-2'>
            <div>
              <label htmlFor="gender">Gender</label>
            </div>
            <div>
              <div className='flex justify-between'>
                Male<input type="radio" value='male' onClick={(e) => {
                  handleAdminAData(e),
                    checkGender(e)
                }} name='gender'
                  checked={genderr === 'male'} />
              </div>
              <div className='flex justify-between'>
                Female<input type="radio" value='female' onClick={(e) => {
                  handleAdminAData(e),
                    checkGender(e)
                }} name='gender'
                  checked={genderr === 'female'}
                />
              </div>
              <div className='flex justify-between'>
                Other<input type="radio" value='other' onClick={(e) => {
                  handleAdminAData(e),
                    checkGender(e)
                }} name='gender'
                  checked={genderr === 'other'}
                />
              </div>
            </div>
          </div>

          <div className='my-2'>
            <div>
              <label htmlFor="name">Age</label>
            </div>
            <input type="text" className='w-[100%] rounded-sm' value={admin.age} onInput={(e) => handleAdminAData(e)} name='age'
              onKeyUp={checkAge}
            />
          </div>

          <div className='my-2'>
            <div>
              <label htmlFor="name">Phone Number</label>
            </div>
            <input type="text" className='w-[100%] rounded-sm' value={admin.phone} onInput={(e) => handleAdminAData(e)} name='phone'
              onKeyUp={checkPhone}
            />
          </div>

          <div className='my-2'>
            <div>
              <label htmlFor="name">Email</label>
            </div>
            <input type="text" className='w-[100%] rounded-sm' value={admin.email} onInput={(e) => handleAdminAData(e)} name='email'
              onKeyUp={matchEmail}
            />
          </div>

          <div className='my-2'>
            <div>
              <label htmlFor="name">Password</label>
            </div>
            <div className='flex items-center border-2 pr-2'>
              <input type={`${eye1 ? 'password' : 'text'}`} className='w-[100%] rounded-sm outline-none border-none' value={admin.password}
                onInput={(e) => handleAdminAData(e)} name='password' onKeyUp={matchPass} />
              <div>
                {eye1 ? (
                  <div className='text-[20px] cursor-pointer' onClick={() => seteye1(!eye1)}><FaEye /></div>
                ) : (
                  <div className='text-[22px] cursor-pointer' onClick={() => seteye1(!eye1)}><FaEyeSlash /></div>
                )}
              </div>
            </div>
          </div>

          <div className='my-2'>
            <div>
              <label htmlFor="name">Confirm password</label>
            </div>
            <div className='flex items-center border-2 pr-2'>
              <input type={`${eye2 ? 'password' : 'text'}`} className='w-[100%] rounded-sm outline-none border-none'
                onChange={(e) => setconFirmPass(e.target.value)} value={conFirmPass} onKeyUp={ConfirmPasswordFun}
              />
              <div>
                {eye2 ? (
                  <div className='text-[20px] cursor-pointer' onClick={() => seteye2(!eye2)}><FaEye /></div>
                ) : (
                  <div className='text-[22px] cursor-pointer' onClick={() => seteye2(!eye2)}><FaEyeSlash /></div>
                )}
              </div>
            </div>
          </div>
          <div>
            {errors.map((error) => {
              return (
                <>
                  <p className='text-red-600'>{error}</p>
                </>
              )
            })}
          </div>
          <div className='mt-6 bg-green-600 text-white text-[19px] font-medium w-[100%] rounded-sm'>
            <input type="submit" className='w-[100%] cursor-pointer py-[7px]' onClick={fliitheAlldataFun} />
          </div>
          <div className='text-center mt-3'>
            <Link href='/login' className='text-red-700 text-[20px] font-bold underline'>Login</Link>
          </div>
        </form>
        <ToastContainer />
        <Fotter />

      </LoginContext.Provider>

    </>
  )
}

export default Adminform
