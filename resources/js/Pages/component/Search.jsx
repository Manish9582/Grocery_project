import React, { useState } from 'react'
import Header from '../Header'
import Fotter from '../Fotter'
import { Link, usePage } from '@inertiajs/react'
import { FaPlus, FaMinus } from "react-icons/fa6";

const Search = ({ retrive }) => {
  console.log(retrive)
  const [Qunatity, setQunatity] = useState(1)
  const { session, flash } = usePage().props;
  return (
    <>
      <Header data={session}/>

      <div className='my-10 grid grid-cols-6 max-w-[1300px] mx-auto gap-6 bg-slate-50 p-5 rounded-md select-none'>
        {retrive.map((value) => {
          return (
            <>
              <div key={value.id} className='bg-white p-3 rounded-lg border'>
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
                    ₹ {value.price}
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
      <Fotter />
    </>
  )
}

export default Search
