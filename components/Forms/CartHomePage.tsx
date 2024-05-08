import * as React from 'react';
import { IoClose } from 'react-icons/io5';

export interface ICartHomePageProps {
}

export default function CartHomePage (props: ICartHomePageProps) {
  return (
    <div className='pb-3 py-1'>
      <h2 className='text-2xl font-normal mb-2'>Giỏ hàng</h2>
      <ul className='flex flex-col max-h-[250px] overflow-y-auto'>
        <li className='flex gap-4 text-start py-2 border-b-[1px] border-gray-400 border-dotted'>
        <img className='w-[80px] h-[100px] object-cover' src="https://product.hstatic.net/200000462939/product/2023-12-07_19h59_29_b1447719367c46a9a42f92bf7a030606_small.png" alt="" />
           <nav className='flex flex-col gap-2'>
            <h3 className='hover:text-[#d70018] h-[55px] line-clamp-3 overflow-hidden cursor-pointer'>Date A Live IV - Tokisaki Kurumi - Coreful Figure - Shouakuma Ver., Renewal | Taito Figure</h3>
            <p className=' font-normal text-xs'>Thanh toán toàn bộ</p>
            <span className='flex items-center gap-2'>
                <span className='border-[1px] w-6 border-gray-400 h-6   flex justify-center items-center '>1</span>
                <p className=' text-[#d70018]'>490,000₫</p>
            </span>
           </nav>
           <button className='flex hover:text-[#d70018]  justify-start items-start'><IoClose size={20} className='font-bold'/></button>
        </li>
        <li className='flex gap-4 text-start py-2 border-b-[1px] border-gray-400 border-dotted'>
        <img className='w-[80px] h-[100px] object-cover' src="https://product.hstatic.net/200000462939/product/2023-12-07_19h59_29_b1447719367c46a9a42f92bf7a030606_small.png" alt="" />
           <nav className='flex flex-col gap-2'>
            <h3 className='hover:text-[#d70018] h-[55px] line-clamp-3 overflow-hidden cursor-pointer'>Date A Live IV - Tokisaki Kurumi - Coreful Figure - Shouakuma Ver., Renewal | Taito Figure</h3>
            <p className=' font-normal text-xs'>Thanh toán toàn bộ</p>
            <span className='flex items-center gap-2'>
                <span className='border-[1px] w-6 border-gray-400 h-6   flex justify-center items-center '>1</span>
                <p className=' text-[#d70018]'>490,000₫</p>
            </span>
           </nav>
           <button className='flex hover:text-[#d70018]  justify-start items-start'><IoClose size={20} className='font-bold'/></button>
        </li>
        <li className='flex gap-4 text-start py-2 border-b-[1px] border-gray-400 border-dotted'>
        <img className='w-[80px] h-[100px] object-cover' src="https://product.hstatic.net/200000462939/product/2023-12-07_19h59_29_b1447719367c46a9a42f92bf7a030606_small.png" alt="" />
           <nav className='flex flex-col gap-2'>
            <h3 className='hover:text-[#d70018] h-[55px] line-clamp-3 overflow-hidden cursor-pointer'>Date A Live IV - Tokisaki Kurumi - Coreful Figure - Shouakuma Ver., Renewal | Taito Figure</h3>
            <p className=' font-normal text-xs'>Thanh toán toàn bộ</p>
            <span className='flex items-center gap-2'>
                <span className='border-[1px] w-6 border-gray-400 h-6   flex justify-center items-center '>1</span>
                <p className=' text-[#d70018]'>490,000₫</p>
            </span>
           </nav>
           <button className='flex hover:text-[#d70018]  justify-start items-start'><IoClose size={20} className='font-bold'/></button>
        </li>
      </ul>
      <nav className='flex flex-col gap-2'>
        <span className='flex justify-between items-center py-2'>
            <p>TỔNG TIỀN:</p>
            <p className='text-[#d70018] text-lg'>490,000₫</p>
        </span>
        <div className='flex gap-4 text-xs font-medium justify-between'>
            <button className='bg-[#9b9b9b] hover:bg-white hover:text-[#9b9b9b] hover:border-[1px] border-[#9b9b9b] text-white py-3 w-1/2 '>XEM GIỎ HÀNG</button>
            <button className='border-[1px] hover:border-white hover:text-white  hover:bg-[#9b9b9b] border-[#9b9b9b] text-[#9b9b9b] py-3 w-1/2'>THANH TOÁN</button>
        </div>
      </nav>
    </div>
  );
}
