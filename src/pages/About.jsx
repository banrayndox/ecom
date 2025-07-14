import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'
function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} /></div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about_img} className='w-full md:max-w-[400px]' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae voluptates saepe dolores, animi endis quam ex doloribus deserunt omnis debitis amet animi, aspernatur sunt impedit vitae?
            </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, incidunt.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quis dignissimos perferendis corporis debitis odit architecto praesentium porro. Eveniet, qui!</p>
            </div>
        </div>
 <div className='text-xl py-4'>
  <Title text1={'WHY'} text2={'CHOOSE US?'} />
 </div>
 <div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Quality Assurance:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia dolorum quo placeat officiis a?</p>
  </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Convenience:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias quod ati, voluptate nesciunt corrupti consequatur iure mollitia doloribus quas sit consequuntur?</p>
  </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Exceptional Customer Service:</b>
    <p className='text-gray-600'>Lorluptate nesciunt corrupti consequatur iure mollitia doloribus quas sit consequuntur?</p>
  </div>
 </div>
 <NewsLetter />
    </div>
  )
}

export default About
