import { Link } from '@inertiajs/react'
import React from 'react'
import useLink from './auth/UseLinks'
import ItemImg from './auth/DataImg'



const Fotter = () => {
  return (
    <>
      <div className='lg:grid grid-cols-5 max-w-[1400px] mx-auto my-16 gap-10 select-none md:px-6 ss:px-6 s:px-6'>
      
        <div className=' lg:col-start-1 lg:col-end-3 s:w-[fit-content]  lg:w-[100%]  ss:w-[100%] sm:w-[100%] md:w-[100%] mx-auto'>
          <div className='my-1 text-[20px]'>
            <strong>Useful Links</strong>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 ss:grid-cols-2 s:grid-cols-1'>
            {useLink.map((datas) => {
              return (
                <div key={datas.id}>
                  <Link href={datas.url}>
                    <div className='my-[2px] text-gray-500'><p>{datas.links}</p></div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        <div className=' col-start-3 col-end-6 s:w-[fit-content] lg:w-[100%] ss:w-[100%] sm:w-[100%] md:w-[100%] mx-auto'>
          <div className='my-1 text-[20px] flex gap-2 '>
            <strong>Categories</strong> <Link className='text-green-600'>see all</Link>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1'>
            {ItemImg.map((datas) => {
              return (
                <div key={datas.id}>
                  <div className='my-[2px] text-gray-500'><p>{datas.heading}</p></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Fotter