// import React from 'react'
import icon1 from '../svg/Vector.svg'
import icon2 from '../svg/Call.svg'
import dowloadIcon from '../svg/download.svg'
const Footer = () => {
  return (
    <>
    <div className="relative w-full  pl-20 mx-auto mt-10 px-4 group bg-[#008ECC] ">
        <section className='text-white'>
            <h1 className='text-[44px] font-bold'>MegaMart</h1>
            <h3 className='mt-17 text-[20px] font-bold'>Contact Us</h3>
            <p className='text-[20px] mt-5 flex justify-inline gap-5'>
                <img
                src={icon1}
                />
                Whats App <br/>+1 202-918-2132</p>
            <p className='text-[20px] mt-5 flex justify-inline gap-5'>
                <img
                src={icon2}
                />
                Call Us <br/>+1 202-918-2132</p>
            <h3 className='font-bold text-[20px] mt-15'>Download App
                <img className='mt-5' src={dowloadIcon}/>
            </h3>
        </section>
        <section className='border-t mt-20 text-[#05ABF3] '>
            <h3 className='flex justify-center item-center text-white mt-5 text-[20px]'>© 2022 All rights reserved. Reliance Retail Ltd.</h3>
        </section>
    </div>
      
    </>
  )
}

export default Footer
