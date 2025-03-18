import React, { useContext, useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import { FaCaretRight } from "react-icons/fa";
import { router, usePage } from '@inertiajs/react';
import { RxCross2 } from "react-icons/rx";
import { GoChevronRight } from "react-icons/go";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { LoginContext } from '../useContext/LoginUseCon';
import Login from './Login';



const Cardmobile = () => {
    const { user, product, admin } = usePage().props;
    const [mobilecard, setmobilecard] = useState(true)
    const {loginPage, setloginPage}=useContext(LoginContext)
    
    const handleCardSessionUp = (id, value) => {
        let sendDta = { id, value };
        router.post('/updatequan', sendDta)
    }

    let addprice = 0;
    let carpricemobile = 0;
    let stroProductLen = Object.keys(product).length;
    Object.keys(product).map(key => {
        const item = product[key];
        let ItemQuantity = item.quantity;
        let Price = item.price * ItemQuantity;
        carpricemobile += Price;
    })


    const HanleScrolllogin=()=>{
        if(loginPage){
            document.body.style.overflowY = 'hidden';
            setloginPage(!loginPage)
        }
    }
    return (
        <>
            {stroProductLen >= 1 ? (
                <div className={`${mobilecard ? 'block' : 'hidden'} fixed w-[100%] px-4 bottom-3 z-[20]`}>
                    <div className='flex justify-between items-center bg-green-600 text-white px-4 rounded-xl py-1 '>
                        <div className='flex items-center gap-4'>
                            <BsCart3 className='text-[23px] font-extrabold' />
                            <div>
                                <div className='flex gap-[2px]'>
                                    <p>{stroProductLen}</p>
                                    <p>item</p>
                                </div>
                                <p>
                                    <strong>{carpricemobile}</strong>
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center' onClick={() => {
                            setmobilecard(!mobilecard),
                            HanleScrolllogin()

                        }}>
                            <p>View Card</p>
                            <div>
                                <FaCaretRight />
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                <div></div>
            )}
            <div className={` ${mobilecard ? 'hidden' : 'block'} ${loginPage ?'block':'hidden'} fixed top-0 z-[20] bg-white w-[100%] h-[100vh]`}>
                <div className='flex items-center justify-between p-4 '>
                    <div className='text-[18px]'>
                        My Cart
                    </div>
                    <div className='text-[20px] cursor-pointer' onClick={() => setmobilecard(!mobilecard)}>
                        <RxCross2 />
                    </div>
                </div>
                <div>
                    <div className='bg-sky-50 h-[80.50vh] overflow-y-auto rounded-md px-5 py-5'>
                        {
                            Object.keys(product).map(key => {
                                const item = product[key];
                                let ItemQuantity = item.quantity;
                                let Price = item.price * ItemQuantity;
                                addprice += Price;
                                return (
                                    <div key={key}>
                                        <div className='bg-white p-3 flex justify-between items-center'>
                                            <div className='flex items-center gap-3'>
                                                <div className='h-[60px] w-[50px]'>
                                                    <img src={`/storage/${item.images}`} alt="" className='w-[100%] h-[100%] object-contain' />
                                                </div>
                                                <div>
                                                    <p className='text-[14px] text-gray-900'>
                                                        {item.title}
                                                    </p>
                                                    <p className='text-[14px] text-gray-500 font-bold'>
                                                        {item.unit}
                                                    </p>
                                                    <p className='text-[14px] text-gray-900 flex gap-1 font-bold'>
                                                        <p className='font-bold text-sky-500'>₹</p>{item.price}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <form className={`cursor-pointer flex items-center bg-green-600 text-white px-2 py-[6px] rounded-md`}>
                                                    <div>
                                                        <FaMinus className='text-[13px]' onClick={() => handleCardSessionUp(key, -1)} />
                                                    </div>
                                                    <div>
                                                        <p className='text-[14px] w-[25px] text-center'>{item.quantity}</p>
                                                    </div>
                                                    <div>
                                                        <FaPlus className='text-[13px]' onClick={() => handleCardSessionUp(key, 1)} />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='py-3 p-4 bg-white'>
                        <div className='flex justify-between bg-green-600 p-2 rounded-md text-white'>
                            <div>
                                <div className='text-[14px]'>
                                    <p>₹ {addprice}</p>
                                </div>
                                <div>
                                    <p className='text-[13px] font-black text-gray-50'> TOTAL</p>
                                </div>
                            </div>
                            <div className='flex gap-[1px] items-center' onClick={()=>setloginPage(!loginPage)}>
                                <p className='text-[18px] cursor-pointer'>Login to Proceed</p>
                                <GoChevronRight className='text-[20px]' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`${loginPage ?'hidden':'block'} w-[100%] h-[100%] top-0 fixed z-[30]`} >
                 <Login/>
            </div>
        </>
    )
}

export default Cardmobile