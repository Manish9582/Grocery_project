import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { GoChevronRight } from "react-icons/go";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { router, usePage } from '@inertiajs/react';


const AddtoCard = ({pass}) => {
    const { user, product, admin } = usePage().props;
  const HandleScrollbar2 = () => {
    document.body.style.overflowY = 'auto';
    pass.setcardData(!pass.cardData)
  }
  const handleCardSessionUp = (id, value) => {
    let sendDta = { id, value };
    router.post('/updatequan', sendDta)
  }

  let addprice = 0;
  return (
    <>
      <div>
        <div className='flex items-center justify-between p-4 '>
          <div className='text-[18px]'>
            My Cart
          </div>
          <div className='text-[20px] cursor-pointer' onClick={() => HandleScrollbar2()}>
            <RxCross2 />
          </div>
        </div>
        <div>
          <div className='bg-sky-50 h-[80.50vh] overflow-y-auto rounded-md px-5 pb-5'>
            {
              Object.keys(product).map(key => {
                const item = product[key];
                let ItemQuantity = item.quantity;
                let Price = item.price * ItemQuantity;
                addprice += Price;
                return (
                  <div key={key}>
                    <div className='bg-white  p-3 mt-5 rounded-md flex justify-between items-center'>
                      <div className='flex items-center gap-3'>
                        <div className='h-[60px] w-[50px]'>
                        <img src={`/storage/${item.images}`} alt="" className='w-[100%] h-[100%] object-contain'/>
                        </div>
                        <div>
                          <p className='text-[14px] text-gray-900'>
                            {item.title}
                          </p>
                          <p className='text-[14px] text-gray-500 font-bold'>
                            {item.unit}
                          </p>
                          <p className='text-[14px] text-gray-900 flex gap-1 font-bold'>
                            <p className='font-bold text-sky-500'>₹</p>{item.price}
                          </p>
                        </div>
                      </div>
                      <div>
                        <form className={`cursor-pointer flex items-center bg-green-600 text-white px-2 py-[6px] rounded-md`}>
                          <div>
                            <FaMinus className='text-[13px]' onClick={() => handleCardSessionUp(key, -1)} />
                          </div>
                          <div>
                            <p className='text-[14px] w-[25px] text-center'>{item.quantity}</p>
                          </div>
                          <div>
                            <FaPlus className='text-[13px]' onClick={() => handleCardSessionUp(key, 1)} />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='py-3 p-4 bg-white'>
            <div className='flex justify-between bg-green-600 p-2 rounded-md text-white'>
              <div>
                <div className='text-[14px]'>
                  <p>₹ {addprice}</p>
                </div>
                <div>
                  <p className='text-[13px] font-black text-gray-50'> TOTAL</p>
                </div>
              </div>
              <div className='flex gap-[1px] items-center' onClick={() => pass.setlogpage(!pass.logpage)}>
                <p className='text-[18px] cursor-pointer'>Login to Proceed</p>
                <GoChevronRight className='text-[20px]' />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default AddtoCard