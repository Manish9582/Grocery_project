import { Link } from '@inertiajs/react'
import React, { useState } from 'react'
import Header from '../Header'
import ItemImg from '../auth/DataImg'
import { IoIosArrowDown } from "react-icons/io";
import Fotter from '../Fotter';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { LoginContext } from '../useContext/LoginUseCon';

const ProductCate = ({ stordata, unique }) => {
  const [Qunatity, setQunatity] = useState(1)
  const [loginPage, setloginPage] = useState(true);
  return (
    <>
      <LoginContext.Provider value={{ loginPage, setloginPage }}>

        <div className='border-b sticky top-0 z-[1] bg-white shadow-md'>
          <div>
            <Header />
          </div>
          <div className='max-w-[1150px] mx-auto flex justify-between'>
            {ItemImg.slice(0, 6).map((data) => {
              return <div className='hover:bg-gray-50 p-3 text-[16px] text-gray-500'><Link href=''>{data.heading}</Link></div>
            })}
            <div className='flex items-center gap-1'>
              More <IoIosArrowDown />
            </div>
          </div>
        </div>

        <div className='border-x border-b max-w-[1250px] mx-auto grid  grid-cols-12 mb-20'>
          <div className='col-start-1 col-end-4 border-r py-2'>
            {unique.map((data) => {
              // console.log("Data",data)
              return (
                <>
                  <div key={data.id} className='bg-white border-b'>
                    <Link className='flex items-center gap-3 py-2' href={`/category/${data.Product}/${data.type}`}>
                      <img src={`/storage/${data.images}`} alt="" className='w-[60px] h-[60px] object-contain' />
                      <p>Helli</p>
                    </Link>
                  </div>
                </>
              )
            })}
          </div>
          <div className='bg-gray-50 col-start-4 col-end-13'>
            <div>

            </div>
            <div className='p-3 grid grid-cols-5'>
              {stordata.map((value) => {
                return (
                  <>
                    <div key={value.id} className='bg-white p-3 rounded-lg'>
                      <div className='h-[150px] w-[170px]'>
                        <Link href={`/item/${value.type}/${value.id}`}>
                          <img src={`/storage/${value.images}`} alt="" className='h-[100%] w-[100%] object-contain' />
                        </Link>
                      </div>
                      <div className='my-2'>
                        <p className='font-bold'>{value.title}</p>
                        <p className='text-gray-500 text-[15px]'>{value.unit}</p>
                      </div>
                      <div className='flex justify-between items-center'>
                        <div>
                          ₹{value.price}
                        </div>
                        <div>
                          {Qunatity < 1 ?
                            (
                              <div>
                                <div className='border-[1px] w-[fit-content] cursor-pointer border-green-800 py-1 px-4 bg-sky-50 rounded-md'
                                >
                                  ADD
                                </div>
                              </div>
                            ) : (<div className={`cursor-pointer flex items-center bg-green-600 text-white px-2 py-[6px] rounded-md`}>
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
                            )}
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>


        <div>
          <Fotter />
        </div>
        </LoginContext.Provider>

        </>
        )
}

        export default ProductCate