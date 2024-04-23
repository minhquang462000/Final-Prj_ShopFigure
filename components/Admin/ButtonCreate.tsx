import * as React from 'react';
import { FaPlus } from 'react-icons/fa';

export interface IButtonCreateProps {
}

export default function ButtonCreate (props: IButtonCreateProps) {
  return (
    <div className="p-4 flex justify-between font-medium items-center w-full ">
            <h1 className="text-3xl  underline">Product</h1>
          <button className="w-max flex items-center text-lg   gap-2 border-gray-600 hover:text-white transition-all duration-300 hover:border-red-500 hover:bg-red-500  rounded-xl p-3 border   ">
            <FaPlus />
            Thêm mới
          </button>
        </div>
  );
}
