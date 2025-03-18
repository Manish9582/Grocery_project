import React, { useState } from 'react'
import { router } from '@inertiajs/react'
import { toast, ToastContainer } from 'react-toastify'
import Header from '../Header';
import Fotter from '../Fotter';
import { LoginContext } from '../useContext/LoginUseCon';
const AddProduct = () => {
    const [showImg, setshowImg] = useState(null);
    const [item, setitem] = useState({
        'image': '',
        'title': '',
        'type': '',
        'unit': '',
        'country': '',
        'featur': '',
        'discription': '',
        'price': '',
        'cover': '',
        'product': '',
    })
    const HandleData = (e) => {
        let { id, value, files } = e.target;
        if (id === 'image' && files.length > 0) {
            setitem((prevItem) => ({
                ...prevItem,
                [id]: files[0],
            }));
        } else {
            setitem((prevItem) => ({
                ...prevItem,
                [id]: value,
            }));
        }
    }
    function showImagFun(event) {
        let file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setshowImg(imageUrl);
        }
    }
    const HandleuplaodData = (evt) => {
        evt.preventDefault()
        if (item.image == '' && item.title == '' && item.type == '' && item.unit == '' &&
            item.country == '' && item.featur == '' && item.type == '' && item.price == '' && item.cover == '' && item.product == '') {
            toast.error('Fill the all Data')
        }
        router.post('/upload', item)
    }
    const [loginPage, setloginPage] = useState(true);

    return (
        <>
            <LoginContext.Provider value={{ loginPage, setloginPage }}>

                <Header />

                <div className='bg-purple-50 py-[80px]'>
                    <form onSubmit={HandleuplaodData} encType="multipart/form-data">
                        <div className='max-w-[1000px] mx-auto p-14 shadow-lg rounded-sm bg-white'>
                            <div className='text-center mb-3 text-2xl'>
                                <strong><u>Upload Data</u></strong>
                            </div>
                            <div className='grid lg:grid-cols-2 gap-7 items-center py-4'>
                                <div>
                                    <div className='w-[100%] h-[400px]'>
                                        <img src={showImg} className='showImg w-[100%] h-[100%] object-contain' alt="Preview" />
                                    </div>
                                    <div>
                                        <input type="file" id='image' onChange={(event) => {
                                            HandleData(event);
                                            showImagFun(event);
                                        }} className='outline-none'
                                        />
                                    </div>
                                </div>
                                <div className=''>
                                    <div>
                                        <label htmlFor="">Title</label>
                                        <div className='w-[100%] h-[38px]'>
                                            <input type="text" className='w-[100%] h-[100%] rounded-[5px]'
                                                id='title' value={item.title} onChange={HandleData} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="">Product Name</label>
                                        <div className='w-[100%] h-[38px]'>
                                            <input type="text" className='w-[100%] h-[100%] rounded-[5px]'
                                                id='type' value={item.type} onChange={HandleData} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="">Product Type</label>
                                        <div className='w-[100%] h-[38px]'>
                                            <input type="text" className='w-[100%] h-[100%] rounded-[5px]'
                                                id='product' value={item.product} onChange={HandleData} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="">Price</label>
                                        <div className='w-[100%] h-[38px]'>
                                            <div className='w-[100%] h-[38px]'>
                                                <input type="text" className='w-[100%] h-[100%] rounded-[5px]'
                                                    id='price' value={item.price} onChange={HandleData} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="">Unit</label>
                                        <div className='w-[100%] h-[38px]'>
                                            <div className='w-[100%] h-[38px]'>
                                                <input type="text" className='w-[100%] h-[100%] rounded-[5px]'
                                                    id='unit' value={item.unit} onChange={HandleData} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="">Packing Type</label>
                                        <div className='w-[100%] h-[38px]'>
                                            <input type="text" className='w-[100%] h-[100%] rounded-[5px]'
                                                id='cover' value={item.cover} onChange={HandleData} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="">Country of Origin</label>
                                        <div className='w-[100%] h-[38px]'>
                                            <input type="text" className='w-[100%] h-[100%] rounded-[5px]'
                                                id='country' value={item.country} onChange={HandleData} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="">Features</label>
                                        <div className='w-[100%] h-[38px]'>
                                            <input type="text" className='w-[100%] h-[100%] rounded-[5px]'
                                                id='featur' value={item.featur} onChange={HandleData} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="">Description</label>
                                        <div className='w-[100%] h-[38px]'>
                                            <input type="text" className='w-[100%] h-[100%] rounded-[5px]'
                                                id='discription' value={item.discription} onChange={HandleData} />
                                        </div>
                                    </div>
                                    <div className='my-2 w-[100%] h-[40px] text-center text-white'>
                                        <input type="submit" className='my-2 w-[100%] h-[100%]  text-[19px] bg-green-600 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <ToastContainer stacked />
                 <Fotter />
            </LoginContext.Provider>

        </>
    )
}

export default AddProduct