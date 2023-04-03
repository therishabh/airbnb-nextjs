import Image from 'next/image'
import React from 'react';
import {
    HeartIcon,
    StarIcon
  } from "@heroicons/react/24/solid";

const InfoCard = ({img, location, title, description, price, star, total}) => {
    console.log(description)
  return (
    <div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transtion duration-200 ease-out first:border-t'>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0' >
            <Image src={img} layout='fill' objectFit='cover' className='rounded-2xl' />
        </div>
        <div className='flex flex-col pl-5 basis-5/6'>
            <div className='flex justify-between'>
                <p>{location}</p>
                <HeartIcon className='h-7 cursor-pointer' />
            </div>
            <h4 className='text-xl'>{title}</h4>
            <div className='border-b w-10 pt-2' />
            <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
            
            <div className="flex justify-between items-end pt-5">
                <p className="flex item-center">
                    <StarIcon className='h-5 text-red-500' /> {star}
                </p>
                <div>
                    <p className='text-lg font-semibold lg:text-2xl pb-2'>{price}</p>
                    <p className='text-right font-extralight'>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard