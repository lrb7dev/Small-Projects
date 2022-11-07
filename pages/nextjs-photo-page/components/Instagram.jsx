import React from 'react'
import Img1 from '../public/assets/img/img001.jpg'
import Img2 from '../public/assets/img/img002.jpg'
import Img3 from '../public/assets/img/img003.jpg'
import Img4 from '../public/assets/img/img004.jpg'
import Img5 from '../public/assets/img/img005.jpg'
import Img6 from '../public/assets/img/img006.jpg'
import InstagramImg from '../components/InstagramImg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className="text-2xl font-bold" >Follow me on Instagram</p>
        <p className="pb-4">@MJ.Photosss</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={Img1} />
            <InstagramImg socialImg={Img2} />
            <InstagramImg socialImg={Img3} />
            <InstagramImg socialImg={Img4} />
            <InstagramImg socialImg={Img5} />
            <InstagramImg socialImg={Img6} />
        </div>
    </div>
  )
}

export default Instagram