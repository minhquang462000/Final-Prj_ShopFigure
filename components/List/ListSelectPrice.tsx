import * as React from 'react';
import { FiMinus } from 'react-icons/fi';
import { GiCheckMark } from 'react-icons/gi';

export interface IListSelectPriceProps {
}

export default function ListSelectPrice (props: IListSelectPriceProps) {
    const [changeColor, setChangeColor] = React.useState(false)
  return (
    <td className=" rounded w-full flex flex-col bg-white p-3">
    <span className="border-b-[1px] pb-2 justify-between items-center flex w-full"> 
     <h3 className="font-medium" >Lọc Giá</h3>
     <FiMinus />
     </span>
     <ul className="flex gap-1 mt-2 text-sm font-medium max-h-[250px] overflow-y-auto flex-col py-2">
     <li className="px-2 cursor-pointer group/mark flex w-full relative my-1 items-center gap-2">
              <label className="cursor-pointer flex items-center gap-2 w-full relative" > 
              <GiCheckMark  size={15} className={`absolute cursor-pointer group-hover/mark:block z-10  hidden  focus:text-green-500 text-[#e44c4c]   `}/>
              <input  className=" h-4 cursor-pointer w-4" type="checkbox" name="" id="one" />
                Dưới 500.000 <span className='underline'>đ</span>
                </label>
         </li>  
         <li className="px-2 cursor-pointer group/mark flex w-full relative my-1 items-center gap-2">
              <label className="cursor-pointer flex items-center gap-2 w-full relative" > 
              <GiCheckMark  size={15} className={`absolute cursor-pointer group-hover/mark:block z-10  hidden  focus:text-green-500 text-[#e44c4c]   `}/>
              <input  className=" h-4 cursor-pointer w-4" type="checkbox" name="" id="one" />
                 500.000 <span className='underline'>đ</span> - 2.000.000 <span className='underline'>đ</span>
                </label>
         </li>  
      
         <li className="px-2 cursor-pointer group/mark flex w-full relative my-1 items-center gap-2">
              <label className="cursor-pointer flex items-center gap-2 w-full relative" > 
              <GiCheckMark  size={15} className={`absolute cursor-pointer group-hover/mark:block z-10  hidden  focus:text-green-500 text-[#e44c4c]   `}/>
              <input  className=" h-4 cursor-pointer w-4" type="checkbox" name="" id="one" />
              2.000.000 <span className='underline'>đ</span> - 5.000.000 <span className='underline'>đ</span>
                </label>
         </li>  
         <li className="px-2 cursor-pointer group/mark flex w-full relative my-1 items-center gap-2">
              <label className="cursor-pointer flex items-center gap-2 w-full relative" > 
              <GiCheckMark  size={15} className={`absolute cursor-pointer group-hover/mark:block z-10  hidden  focus:text-green-500 text-[#e44c4c]   `}/>
              <input  className=" h-4 cursor-pointer w-4" type="checkbox" name="" id="one" />
              5.000.000 <span className='underline'>đ</span> - 10.000.000 <span className='underline'>đ</span>
                </label>
         </li>  
         <li className="px-2 cursor-pointer group/mark flex w-full relative my-1 items-center gap-2">
              <label className="cursor-pointer flex items-center gap-2 w-full relative" > 
              <GiCheckMark  size={15} className={`absolute cursor-pointer group-hover/mark:block z-10  hidden  focus:text-green-500 text-[#e44c4c]   `}/>
              <input  className=" h-4 cursor-pointer w-4" type="checkbox" name="" id="one" />
                Trên 10.000.000 <span className='underline'>đ</span>
                </label>
         </li>  
      
     </ul>
     </td>
  );
}
