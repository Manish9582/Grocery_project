import { Link, router, usePage } from '@inertiajs/react';
import React, { useState } from 'react'
import { FaPlus, FaMinus, FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Sancks = ({ data }) => {
    const { user, product } = usePage().props;
    const [showCard, setshowCard] = useState(data.map(() => 0))
    const hanldeCardAddBtn = (index, val) => {
        setshowCard(preQantity => {
            const StorQan = [...preQantity];
            StorQan[index] = 1;
            return StorQan;
        })
        router.post('/addcard', { val });
    }
    const handleCardSessionUp = (id, value) => {
        let sendDta = { id, value };
        router.post('/updatequan', sendDta)
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 6;
    const totalCards = data.length;
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalCards - cardsPerPage : prevIndex - cardsPerPage));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + cardsPerPage >= totalCards ? 0 : prevIndex + cardsPerPage));
    };
    const itemdetail = Object.keys(product).map((key) => {
        return product[key];
    })
    let itemKeys = Object.keys(product);
    return (
        <>
            {data.length >= 1 && (
                <div className='max-w-[1300px] mx-auto mt-5 md:px-4 sm:px-4 ss:px-4 s:px-4'>
                    <div className='my-3'>
                        <strong className='text-[26px]'>Fruits & Vegetable</strong>
                    </div>
                    <div className='w-[100%] flex gap-4 lg:overflow-x-hidden overflow-hidden relative md:overflow-x-scroll  s:overflow-x-scroll  sm:overflow-x-scroll ss:overflow-x-scroll hide-scrollbar'>
                        {data.slice(currentIndex, currentIndex + 7).map((value, index) => {
                            return (
                                <div key={value.id}
                                    className={`card ${index === currentIndex ? 'active' : ''} border-2 p-2 ease-linear`}>
                                    <div className='lg:h-[150px] lg:w-[170px] md:h-[180px] md:w-[200px] sm:h-[180px] sm:w-[200px] ss:h-[180px] ss:w-[200px]  s:h-[180px] s:w-[200px]'>
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
                            )
                        })

                        }
                        <div className=' absolute top-[50%] md:hidden sm:hidden  ss:hidden  s:hidden lg:block w-[100%]'>
                            <div className=' flex items-center w-[100%] '>
                                <div className='absolute shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-2 cursor-pointer bg-white rounded-lg'>
                                    {currentIndex > 0 && (
                                        <FaAngleLeft onClick={handlePrev} />
                                    )}
                                </div>
                                <div className='absolute right-0 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-2 cursor-pointer bg-white rounded-lg'>
                                    {currentIndex + cardsPerPage < totalCards && (
                                        <FaAngleRight onClick={handleNext} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    )
}

export default Sancks
