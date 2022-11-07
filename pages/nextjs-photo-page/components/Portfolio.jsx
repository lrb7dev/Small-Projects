import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
    return (
        <div id="works" className='max-w-[1240px] mx-auto py-16 text-center' >
            <h1 className='font-bold text-2xl p-4' >Events and Conferences</h1>
            <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4' >
                <div className='w-full h-full col-span-2 md:col-span-3 row-span-2' >
                    <Image
                        src='https://images.unsplash.com/photo-1602137925482-00fb0ed07877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        alt='/'
                        layout='responsive'
                        width='677'
                        height='451'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1575029644286-efb9039cac46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1626125345510-4603468eedfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1599739291060-4578e77dac5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio