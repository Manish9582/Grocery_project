import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import Header from './Header';
import Fotter from './Fotter';
import { Link, usePage } from '@inertiajs/react';
import { LoginContext } from './useContext/LoginUseCon';

const Single = ({ stordata, unique }) => {
    const { user, product } = usePage().props;
    console.log(product)
    const itemdetail = Object.keys(product).map((key) => {
        return product[key];
    })
    let itemKeys = Object.keys(product);
    const [loginPage, setloginPage] = useState(true);

    return (
        <>
            <LoginContext.Provider value={{ loginPage, setloginPage }}>

                <Header />
                <div className='w-[100%] h-[100%]'>
                    <div className='max-w-[1200px] mx-auto lg:grid grid-cols-2 h-[100%] border-b'>
                        <div className='border-r '>
                            <div className='w-[100%] h-[500px] border-b p-8'>
                                <img src={`/storage/${stordata.images}`} alt="" className='w-[100%] h-[100%] object-contain' />
                            </div>
                            <div className='my-5'>
                                <strong className='text-2xl'>Product Details</strong>
                            </div>
                            <div>
                                <div>
                                    <strong>Title</strong>
                                    <p>{stordata.title}</p>
                                </div>
                                <div className='my-3'>
                                    <strong>Type</strong>
                                    <p>{stordata.type}</p>
                                </div>
                                <div className='my-3'>
                                    <strong>Price</strong>
                                    <p> {stordata.price}</p>
                                </div>
                                <div className='my-3'>
                                    <strong>Unit</strong>
                                    <p>{stordata.unit}</p>
                                </div>
                                <div className='my-3'>
                                    <strong>Country</strong>
                                    <p>{stordata.country}</p>
                                </div>
                                <div className='my-3'>
                                    <strong>Featur</strong>
                                    <p>{stordata.featur}</p>
                                </div>
                                <div className='my-3'>
                                    <strong>Discription</strong>
                                    <p>{stordata.discription}</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-[100%] px-10 py-14'>
                            <div>
                                <strong className='text-3xl'>{stordata.title}</strong>
                            </div>
                            <div className=' my-2 border-b pb-2'>
                                <p className='text-[19px] text-green-600 font-bold'>View all by Kab's Jackpot</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p>{stordata.unit}</p>
                                    <p>MRP ₹{stordata.price}</p>
                                    <p>(Include of all texes)</p>
                                </div>
                                <div>
                                    <div className={`cursor-pointer flex items-center bg-green-600 text-white px-2 py-[6px] rounded-md w-[max-content]`}>
                                        <div>
                                            <FaMinus className='text-[14px]' />
                                        </div>
                                        <div>
                                            <p className='text-[15px] w-[30px] text-center'>1</p>
                                        </div>
                                        <div>
                                            <FaPlus className='text-[14px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='my-6'>
                                <div className='my-3'>
                                    <strong className='font-extrabold'>Why shop from blinkit?</strong>
                                </div>
                                <div>
                                    <div className='flex gap-6 items-center'>
                                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" alt=""
                                            className='w-[60px] h-[60px]'
                                        />
                                        <div>
                                            <p className='text-[13px]'>Superfast Delivery</p>
                                            <p className='text-gray-500 text-[13px]'>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-6 my-4 items-center'>
                                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png" alt=""
                                            className='w-[60px] h-[60px]'
                                        />
                                        <div>
                                            <p className='text-[13px]'>Best Prices & Offers</p>
                                            <p className='text-gray-500 text-[13px]'>Best price destination with offers directly from the manufacturers.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-6 items-center'>
                                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png" alt=""
                                            className='w-[60px] h-[60px]'
                                        />
                                        <div>
                                            <p className='text-[13px]'>Wide Assortment</p>
                                            <p className='text-gray-500 text-[13px]'>Choose from 5000+ products across food, personal care, household & other categories.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1300px] mx-auto my-12'>
                    <div className='my-2'>
                        <strong className='text-[24px]'><u>Same</u></strong>
                    </div>
                    <div className=' grid gap-4 grid-cols-6'>
                        {unique.map((value, index) => {
                            return (
                                <>
                                    <div key={value.id}
                                        className={`border-2 p-2 ease-linear`}>
                                        <div className='h-[150px] w-[100%]'>
                                            <Link href={`/item/${value.type}/${value.id}`}>
                                                <img src={`/storage/${value.images}`} alt="" className='h-[100%] w-[100%] object-contain' />
                                            </Link>
                                        </div>
                                        <div className='my-2'>
                                            <p>{value.title}</p>
                                            <p className='text-gray-500 text-[15px]'>{value.unit}</p>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                ₹{value.price}
                                            </div>
                                            <div>
                                                {value.id == itemKeys[index] && value.images == itemdetail[index]['images'] ? (
                                                    <div>
                                                        <form className={`cursor-pointer flex items-center bg-green-600 text-white px-2 py-[6px] rounded-md`}>
                                                            <div>
                                                                <FaMinus className='text-[13px]' onClick={() => handleCardSessionUp(itemKeys[index], -1)} />
                                                            </div>
                                                            <div>
                                                                <p className='text-[14px] w-[25px] text-center'>{itemdetail[index]['quantity']}</p>
                                                            </div>
                                                            <div>
                                                                <FaPlus className='text-[13px]' onClick={() => handleCardSessionUp(itemKeys[index], 1)} />
                                                            </div>
                                                        </form>
                                                    </div>
                                                ) : (

                                                    <div>
                                                        <form className='border-[1px] w-[fit-content] cursor-pointer border-green-800 py-1 px-4 bg-sky-50 rounded-md'
                                                            onClick={() => hanldeCardAddBtn(index, value.id)}>
                                                            ADD
                                                        </form>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })

                        }
                    </div>
                </div>
                <Fotter />
            </LoginContext.Provider>

        </>
    )
}

export default Single