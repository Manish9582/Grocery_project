import React, { useState } from 'react'
import Header from './Header'
import { CiLocationOn, CiUnlock } from "react-icons/ci";
import { SlNotebook } from "react-icons/sl";
import { TfiGift } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { Link, usePage } from '@inertiajs/react';
import ProfileIf from './ProfileIf';
import { LoginContext } from './useContext/LoginUseCon';

const Profile = ({ item }) => {
    let partProfile = [
        {
            'id': 1,
            'name': 'My Addresses',
            'icon': <CiLocationOn className='text-[20px]' />,
            'link': '/account/address'
        }, {
            'id': 2,
            'name': 'My Order',
            'icon': <SlNotebook />,
            'link': '/account/order'
        },
        {
            'id': 3,
            'name': 'E-Gift-Card',
            'icon': <TfiGift />,
            'link': '/account/gift'
        },
        {
            'id': 4,
            'name': 'Privacy policy',
            'icon': <CiUnlock className='text-[20px]' />,
            'link': '/account/privacy'
        }, {
            'id': 5,
            'name': 'Logout',
            'icon': <FaRegUser />,
            'link': '/account/logout'
        }
    ]
    const { user } = usePage().props
  const [loginPage, setloginPage] = useState(true);
    return (
        <>
            <LoginContext.Provider value={{ loginPage, setloginPage }}>
                <Header />
                <div className='max-w-[900px] my-7 mx-auto shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] lg:h-[80vh] s:h-[100%] s:py-3 rounded-sm lg:grid grid-cols-12'>
                    <div className='border-r col-span-3'>
                        <div className='border-b  px-6 py-4 cursor-pointer hover:s:bg-gray-50'>
                            <p className='lg:text-center'>{user.number}</p>
                        </div>
                        {partProfile.map((data) => {
                            return (
                                <div key={data.id} className='py-3 border-b  px-6 hover:s:bg-gray-50'>
                                    <Link className='flex gap-5 items-center' href={data.link}>
                                        <div>
                                            {data.icon}
                                        </div>
                                        <div>
                                            {data.name}
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className='col-span-9'>
                        <ProfileIf data={item} />
                    </div>
                </div>
            </LoginContext.Provider>

        </>
    )
}

export default Profile