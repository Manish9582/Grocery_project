import React, { useState } from 'react'
import Header from '../Header'
import Fotter from '../Fotter'
import { LuSearch } from "react-icons/lu";
import { Link, router } from '@inertiajs/react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteSweep } from "react-icons/md";
import { LoginContext } from '../useContext/LoginUseCon';
const ListProduct = ({ list }) => {
    let countSNummber = 0;
    const [search, setsearch] = useState()
    const searchData = (e) => {
        e.preventDefault();
        router.get('/search', { search });
    }
    const [loginPage, setloginPage] = useState(true);

    return (
        <>
            <LoginContext.Provider value={{ loginPage, setloginPage }}>

                <Header />
                <div className='max-w-[1300px] mx-auto border rounded-md my-12 select-none'>
                    <div className='my-6 flex items-center justify-between px-6'>
                        <div>

                        </div>
                        <div>
                            <form className='flex items-center border gap-3 rounded-lg h-[45px] px-1 w-[400px]' onSubmit={(e) => searchData(e)}>
                                <LuSearch className='text-[25px]' />
                                <input type="text" className='h-[100%] w-[100%] border-none outline-none bg-transparent' placeholder='Search here  . . . . .'
                                    value={search} name='prodcut' onChange={(e) => setsearch(e.target.value)}
                                />
                            </form>
                        </div>
                    </div>
                    <div className='w-[100%]'>
                        <div className='grid grid-cols-12 py-2 items-center border-t border-b text-[18px] font-medium text-white bg-green-600'>
                            <div className='text-center col-span-1'>S.no</div>
                            <div className='col-span-2 mx-auto'>Image</div>
                            <div className='col-span-2'>Title</div>
                            <div className='col-span-1'>Type</div>
                            <div className='col-span-1'>Price</div>
                            <div className='col-span-1'>Price</div>
                            <div className='col-span-2'>Featur</div>
                            <div className='col-span-1 text-center'>Update</div>
                            <div className='col-span-1 text-center'>Delete</div>
                        </div>
                        <div>
                            {list.data.map((data) => {
                                countSNummber++;
                                return (
                                    <div className='grid grid-cols-12 py-2 items-center  border-b' key={data.id}>
                                        <div className='text-center col-span-1'>{countSNummber}</div>
                                        <div className='w-[80px] h-[80px] col-span-2 mx-auto'>
                                            <img src={`/storage/${data.images}`} alt="" className='w-[100%] h-[100%] object-contain' />
                                        </div>
                                        <div className='col-span-2 '>{data.title}</div>
                                        <div className='col-span-1'>{data.type}</div>
                                        <div className='col-span-1'>{data.price}</div>
                                        <div className='col-span-1'>{data.unit}</div>
                                        <div className='col-span-2'>{data.featur}</div>
                                        <div className='col-span-1'>
                                            <div className='item center text-[24px] w-[fit-content] m-auto '>
                                                <Link href={`/edit/${data.id}`} >
                                                    <LiaEditSolid />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='col-span-1'>
                                            <div className='item center text-[24px] w-[fit-content] m-auto'>
                                                <Link href={`/singleItem/${data.id}`}>
                                                    <MdDeleteSweep />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex justify-between items-center my-8 px-6'>
                        <div className='flex items-center gap-4'>
                            <div className='font-medium text-gray-400 text-[17px]'>TOTAL :</div>
                            <div>{list.total}</div>
                        </div>
                        <div className='flex gap-8'>
                            <Link href={list.prev_page_url} className='border p-2 text-[20px] rounded-sm bg-gray-100'>
                                <FaAngleLeft />
                            </Link>
                            <Link href={list.next_page_url} className='border p-2 text-[20px] rounded-sm bg-gray-100'>
                                <FaAngleRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <Fotter />

            </LoginContext.Provider>

        </>
    )
}

export default ListProduct
