import * as React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

export interface ICardProductHomeProps {
}

export default function CardProductMain (props: ICardProductHomeProps) {
  return (
    <nav className='relative group/search hover:shadow-lg hover:shadow-neutral-400  border-[1px] overflow-hidden'>
            <div className='w-[95%] flex flex-col  gap-3 mx-auto p-1 h-max  overflow-hidden'>  
           <div className='w-full cursor-pointer  relative h-[220px]'>
           <img className='w-full h-full object-cover' src={"https://product.hstatic.net/200000462939/product/1873723-b03b8_231c191e41094ee4b61ea4db412e6f57_grande.jpg"} alt="" />
           <IoSearchOutline size={40} className='bg-white shadow-md group-hover/search:block hidden shadow-gray-400 rounded-full p-2 absolute top-[40%] bottom-[40%]  right-[40%] left-[40%]' />
           </div>
            <h3 className='leading-5 mt cursor-pointer line-clamp-2'>Tên sản phẩm abc abc bac bac bac bac ádfasđ f sfsdfsa ds jdhasjkzdhsdf</h3>
           <span className='flex my-3  justify-between text-[#e44c4c] font-medium items-center text-sm'>
                <p>462.000 <span className='underline'>đ</span></p>
                <p className='text-gray-500  line-through '>462.000 <span className='underline'>đ</span></p>
                <FaRegHeart className='mr-4' size={18}/>
            </span>
            <span className='bg-[#20b648] text-white -rotate-45 absolute pb-1 -top-7 -left-9  text-center text-[11px] font-bold pt-12 w-max px-4 m-auto'>Pre-order</span>
            <span className='italic bg-[#ff2121] text-white px-2 py-1 absolute top-2 right-3 text-xs rounded font-medium '>-10%</span>
            </div>
         </nav>
  );
}
