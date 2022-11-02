import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 text-center' >
            <h1 className='font-bold text-2xl p-4' >Travel Photos</h1>
            <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4' >
                <div className='w-full h-full col-span-2 md:col-span-3 row-span-2' >
                    <Image
                        src='https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='/'
                        layout='responsive'
                        width='677'
                        height='451'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1507692812060-98338d07aca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
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