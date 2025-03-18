import React, { createContext, useState } from 'react'
import Header from './Header'
import Fotter from './Fotter'
import ItemImg from './auth/DataImg'
import Sancks from './component/Snacks'
import { Link } from '@inertiajs/react'
import Vege from './component/Vege'

import MobileImg from './auth/Mobile'
import Cardmobile from './component/Cardmobile'
import { LoginContext } from './useContext/LoginUseCon'


function Home({ snacks, vegetable, juice }) {
  const [loginPage, setloginPage] = useState(true);
  return (
    <>
      <LoginContext.Provider value={{ loginPage, setloginPage }}>
        <div className='select-none'>
          <Header />
          <div className='max-w-[1300px] mx-auto'>
            <div className='h-[250px] '>
              <Link>
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt=""
                  className='w-[100%] h-[100%] object-fill'
                />
              </Link>
            </div>

            <div className='md:hidden sm:hidden ss:hidden s:hidden lg:block'>
              <Link className='h-[200px] flex gap-8 py-3 px-5' href='/ '>
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="" />
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="" />
              </Link>
            </div>
          </div>
          <div className='max-w-[1300px] grid grid-cols-10 mx-auto lg:block md:hidden  sm:hidden ss:hidden s:hidden'>
            <div className='grid grid-cols-10'>
              {ItemImg.map((data, index) => {
                return (
                  <div key={index}>
                    <Link href={`/category/${data.category}/${data.links}`}>
                      <img src={data.image} alt="" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>

          {/* mobilecardData */}
          <div className='lg:hidden'>
            <Cardmobile />
          </div>

          <div className='my-4 max-w-[1300px] grid lg:grid-cols-10 md:grid-cols-4 mx-auto md:gap-7 lg:hidden px-4
        ss:grid-cols-2  ss:gap-7 sm:grid-cols-3
        '>
            {MobileImg.map((data, index) => {
              return (
                <>
                  {data.id === 1 || data.id === 2 || data.id === 4 ? (
                    <Link href={`/category/${data.category}/${data.links}`} className='md:col-span-2 my-2'>
                      <div className='w-[100%]  h-[100px] bg-slate-100 rounded-md'>
                        <img src={data.image} alt="" className='object-contain w-[100%] h-[100%]' />
                      </div>
                      <div className='text-center font-bold w-[100%]'>
                        {data.heading}
                      </div>
                    </Link>
                  ) : (
                    <Link href={`/category/${data.category}/${data.links}`} className='my-2'>
                      <div className='w-[100%] h-[100px] bg-slate-100 rounded-md'>
                        <img src={data.image} alt="" className='object-contain w-[100%] h-[100%] md:bg-slate-100 ' />
                      </div>
                      <div className='text-center font-bold'>
                        {data.heading}
                      </div>
                    </Link >
                  )}
                </>
              )
            })}
          </div>

          <Sancks snacks={snacks} />
          <Vege data={vegetable} />
          <Fotter />
        </div >
      </LoginContext.Provider>
    </>
  )
}

export default Home
