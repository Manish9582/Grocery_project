import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from '@inertiajs/react';

const ProfileIf = ({ data }) => {
    if (data === 'order') {
        return (
            <div className='text-center my-1'>
                <strong className='text-[25px]'>Oops, you haven't placed an order yet.</strong>
            </div>
        )
    } else if (data === 'address') {
        return (
            <div className=' w-[fit-content] mx-auto text-center my-14'>
                <div className='w-[100%]'>
                    <Link href='/account/address'>
                        <img src="https://blinkit.com/c55c5f6ddd0e42607e6c.png" alt="" className='w-[100%] object-contain' />
                    </Link>
                </div>
                <strong>You have no saved addresses</strong>
                <p className='text-slate-400'>Tell us where you want your orders delivered</p>
                <div className='my-4'>
                    <button className='bg-green-600 text-white p-3 py-2 font-semibold rounded-sm'>Add New Address</button>
                </div>
            </div>
        )
    } else if (data === 'gift') {
        return (
            <div className='text-center '>
                <div className='border-b-4 border-green-700 rounded-lg my-2'>
                    <strong className='text-[22px]'>Gift Card</strong>
                </div>
                <div >
                    <div className='w-[fit-content] mx-auto h-[100%]'>
                        <Link href='/account/gift'>
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2024-10/Empty-state-illustration.png"
                                alt="" className='w-[100%] object-contain h-[100%]' />
                        </Link>
                    </div>
                    <div>
                        <strong className='text-[22px]'>No e-gift cards to show here!</strong>
                    </div>
                </div>
            </div>
        )
    } else if (data === 'privacy') {
        return (
            <div className='p-3'>
                <div>
                    <strong>Account privacy and policy</strong>
                </div>
                <p className='text-[14px] my-3'>We i.e. "linkit Commerce Private Limited", are committed to protecting the privacy and security of your personal information. Your privacy is important to us and maintaining your trust is paramount.</p>
                <div className='flex justify-between items-center border p-1 rounded-lg'>
                    <div className='flex items-center '>
                        <RiDeleteBin5Line className='text-[30px]' />
                        <div>
                            <strong className='text-[13px] font-bold'>Request to delete account</strong>
                            <p className='text-[13px]'>Request to closer of your account</p>
                        </div>
                    </div>
                    <FaChevronRight />
                </div>
            </div>
        )
    } else {
        window.history.back();
    }
}

export default ProfileIf
