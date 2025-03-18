import React, { useContext, useState } from 'react';
import { LuSearch } from "react-icons/lu";
import { FaCartShopping } from "react-icons/fa6";
import { Link, router, usePage } from '@inertiajs/react';
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import Login from './component/Login';
import AddtoCard from './component/AddtoCard';
import { LoginContext } from './useContext/LoginUseCon'
import Profile from './Profile';
import { HiOutlineArrowLeft } from "react-icons/hi2";

const Header = () => {
    const { user, product, admin } = usePage().props;
    const [searchItem, setsearchItem] = useState();
    const [profile, setprofile] = useState(true);
    const { loginPage, setloginPage } = useContext(LoginContext);
    console.log(profile)

    const handleSearchItem = (e) => {
        setsearchItem(e.target.value)
    }
    const SendProduct = (e) => {
        e.preventDefault();
        router.get('/Searchproduct', { searchItem })
    }
    const [cardData, setcardData] = useState(true)
    const HanleScrollVBar = () => {
        if (cardData) {
            document.body.style.overflowY = 'hidden';
            setcardData(!cardData)
        }
    }

    const HanleScrolllogin = () => {
        if (loginPage) {
            document.body.style.overflowY = 'hidden';
            setloginPage(!loginPage)
        }
    }
    return (
        <>
            <div className='border-b sticky top-0 z-[10] bg-white select-none'>
                <div className='lg:grid lg:grid-cols-13 items-center max-w-[1450px] mx-auto gap-12 md:mb-2 lg:mb-0 ss:mb-2 sm:mb-2 s:mb-2'>
                    <div className='lg:border-r col-start-1 col-end-1 flex items-center justify-between md:px-6  sm:px-6  ss:px-6  s:px-6'>
                        <div>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/024/824/478/small_2x/e-commerce-logo-design-online-shop-logo-design-idea-vector.jpg" alt=""
                                className='object-cover h-[100%] w-[100px] m-auto' />
                        </div>
                        <div className='md:block  lg:hidden'>
                            {(user && user.number == null) && (admin && admin.phone == null && admin.email == null) ? (
                                <div className='cursor-pointer' onClick={() => {
                                    HanleScrolllogin()
                                }}>
                                    <FaRegUserCircle className='text-2xl' />
                                </div>
                            ) : (
                                <div className='cursor-pointer' onClick={() => setprofile(!profile)}>
                                    <FaRegUserCircle className='text-2xl' />
                                </div>
                            )}
                        </div>

                    </div>
                    <div className='lg:flex col-start-2 col-end-4 justify-between md:hidden sm:hidden ss:hidden s:hidden'>
                        <Link href='/' preserveScroll >Home</Link>
                        <Link href='/about' preserveScroll >About</Link>
                        <Link href='/service' preserveScroll >Service</Link>
                        <Link href='/contact' preserveScroll >Contact</Link>
                    </div>
                    <form className='flex items-center col-start-4 col-end-11 border-2 gap-3 rounded-lg h-[45px] px-1 md:mx-3 md:mt-2 sm:mx-3 ss:mx-3 s:mx-3' onSubmit={(evt) => SendProduct(evt)}>
                        <LuSearch className='text-[25px]' />
                        <input type="text" className='h-[100%] w-[100%] border-none outline-none bg-transparent'
                            placeholder='Search here  . . . . .' onInput={(e) => handleSearchItem(e)}
                            value={searchItem}
                        />
                    </form>
                    <div className='col-start-11 col-end-13 md:hidden lg:block sm:hidden ss:hidden s:hidden'>
                        <div className='flex items-center justify-between'>
                            <div className='text-[19px] cursor-pointer' >
                                {(user && user.number == null) && (admin && admin.phone == null && admin.email == null) ? (
                                    <div onClick={HanleScrolllogin}>
                                        <p> Login</p>
                                    </div>
                                ) : (
                                    <div className='flex items-center gap-2' onClick={() => setprofile(!profile)}>
                                        <p >Account</p>
                                        <strong><IoIosArrowDown className='font-extrabold' /></strong>
                                    </div>
                                )}
                            </div>
                            <div className='flex items-center justify-center  cursor-pointer gap-2 text-[18px]
                                bg-green-600 text-white py-2 rounded-lg px-4 ' onClick={() => HanleScrollVBar()}>
                                <FaCartShopping />
                                <strong>Card</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${profile ? 'hidden' : 'block'} fixed ss:mt-3 lg:mt-0 z-10 w-[100%]`}>
                <div className='lg:grid grid-cols-12  h-[89.10vh] bg-[rgba(0,0,0,0.4)] items-start w-[100%]'>
                    <div className='col-start-1 col-end-10'>

                    </div>
                    <div className=' bg-white col-start-10 col-end-12 px-6 py-6 text-[16px] outline-none lg:rounded-md relative bottom-3 s:h-[80vh] lg:h-[220px]'>
                        {admin && admin.phone == null && admin.email == null ? (
                            <div>
                                <strong className='mt-2'>My Account</strong>
                                <div className='mt-2'>
                                    <Link classID='font-extrabold' href='account/order' preserveScroll compo={Profile}>My Order</Link>
                                </div>
                                <div className='mt-2'>
                                    <Link href='account/address' preserveScroll>Saved Address</Link>
                                </div>
                                <div className='mt-2'>
                                    <Link href='/account/gift' preserveScroll>E-Gift Cards</Link>
                                </div>
                                <div className='mt-2'>
                                    <Link href='/account/privacy' preserveScroll>Account Privacy</Link>
                                </div>
                                <div className='mt-2'>
                                    <Link href='/account/logout' preserveScroll>Log Out</Link>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <strong className='mt-2 font-extrabold'>Admin</strong>
                                <div className='mt-2'>
                                    <Link href='/upload'>Add Data</Link>
                                </div>
                                <div className='mt-2'>
                                    <Link href='/getall_product'>Item List</Link>
                                </div>
                                <div className='mt-2'>
                                    <Link href='/logoutAdmin'>Log Out</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* CardData */}
            < div className={`  ${cardData ? 'hidden' : 'block'}    grid grid-cols-12  h-[100vh] fixed z-[10] top-0 w-[100%]`}>
                <div className='col-start-1 col-end-10 bg-[rgba(0,0,0,0.6)] h-[100%] w-[100%]'>

                </div>
                <div className='col-start-10 col-end-13 bg-white'>
                    <AddtoCard pass={{ setcardData, cardData, loginPage, setloginPage }} />
                </div>
            </div >
            {/* LoginPage */}
            < div className={`${loginPage ? 'hidden' : 'block'} h-[100vh]  fixed z-[30] top-0  lg:bg-[rgba(0,0,0,0.6)] w-[100%]`}>
                <Login />
            </div >
        </>
    );
};

export default Header;
