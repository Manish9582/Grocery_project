import { router } from '@inertiajs/react';
import React, { useContext, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { LoginContext } from '../useContext/LoginUseCon';


const Login = ({ pass}) => {
    const {loginPage, setloginPage}=useContext(LoginContext)
    const [phone, setphone] = useState('');
    const HadnlephoneNum = (evnt) => {
        let Newpnome = evnt.target.value;
        if (/^\d*$/.test(Newpnome)) {
            setphone(Newpnome)
        } else {
            setphone('')
        }
    }
   
    const trimmedPhone = phone.trim();
    function handleNum(e) {
        e.preventDefault();
        router.post('/addUser', { trimmedPhone });
        setphone('');
    }
    const HandleScrollbarrr = () => {
        document.body.style.overflowY = 'auto';
        setloginPage(!loginPage)
    }
    return (
        <>
            <div className='bg-white lg:w-[fit-content] lg:h-[fit-content] flex gap-10 p-5  rounded-xl lg:relative lg:top-[50%] lg:left-[50%] 
                transform lg:translate-x-[-50%] lg:translate-y-[-50%] md:h-[100%]  md:w-[100%] sm:w-[100%] sm:h-[100%] ss:h-[100%] ss:w-[100%] s:w-[100%] s:h-[100%]
                '>
                <div className='text-[20px] cursor-pointer' onClick={() => {
                    setloginPage(!loginPage),
                    HandleScrollbarrr()
                }}>
                    <FaArrowLeft />
                </div>

                <div className='text-center pr-12 lg:translate-y-[0%] md:translate-y-[50%] sm:translate-y-[50%] ss:translate-y-[50%] s:translate-y-[50%] mx-auto md:w-[100%]'>
                    <div className='h-[80px] w-[100px] mx-auto'>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/824/478/small_2x/e-commerce-logo-design-online-shop-logo-design-idea-vector.jpg" alt=""
                            className='object-cover h-[100%] w-[100%] m-auto' />
                    </div>
                    <strong className='text-[1.7rem] font-black'><h1>India's last minute app</h1></strong>
                    <p className='font-bold'>Log in or Sign up</p>
                    <form className='lg:my-3 lg:w-[300px] lg:mx-auto md:w-[100%] sm:w-[100%] s:w-[100%] ss:w-[100%]' onSubmit={(e) => { handleNum(e) }}>
                        <div>
                            <input type="text" className='h-[40px] outline-none w-[100%] rounded-md'
                                placeholder='Phone number' onChange={HadnlephoneNum}
                                value={phone}
                            />
                        </div>
                        <div className={` mt-3 w-[100%] ${phone.length == 10 ? 'bg-green-700' : 'bg-gray-100'}
                                 ${phone.length == 10 ? 'text-white' : 'text-black'} h-[40px] rounded-md`}>
                            <input type="submit" className='h-[100%] text-[20px] bg-transparent' />
                        </div>
                    </form>
                    <p className='text-[14px]'>By continuing, you agree to our Terms of service & Privacy policy</p>
                </div>
            </div>
        </>
    )
}

export default Login