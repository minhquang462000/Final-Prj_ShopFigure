'use client'
import CardProductMain from '@/components/Cards/CardProductMain';
import CardTitleCollection from '@/components/Cards/CardTitelCollection';
import * as React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

export interface IpageProps {
}

export default function page(props: IpageProps) {
    return (
        <main className='w-full p-3 text-black rounded-sm overflow-hidden bg-white'>
            <CardTitleCollection />
            <ul className='flex max-w-[80%] justify-start overflow-x-auto whitespace-nowrap flex-nowrap h-max my-3 gap-2'>
                <li className='bg-[#D62828] flex cursor-pointer items-center gap-1 px-2 rounded-md p-1 mb-2 text-white'>Xóa tất cả <IoClose size={20} /></li>  
            </ul>
            <div className='grid my-2  grid-cols-4 gap-4'>
                <CardProductMain />
                <CardProductMain />
                <CardProductMain />
                <CardProductMain />
                <CardProductMain />
                <CardProductMain />
                <CardProductMain />
                <CardProductMain />
                <CardProductMain />
                <CardProductMain />
            </div>
            <ul className='flex w-full justify-center h-max my-3 gap-2'>
                <li className='w-10 h-10 flex items-center justify-center hover:text-white hover:bg-[#9b9b9b] text-[#9b9b9b] cursor-pointer border '><IoIosArrowBack /></li>
                <li className='w-10 h-10 flex items-center justify-center hover:text-white font-medium hover:bg-[#9b9b9b] text-[#9b9b9b] cursor-pointer border '>1</li>
                <li className='w-10 h-10 flex items-center justify-center hover:text-white hover:bg-[#9b9b9b] text-[#9b9b9b] cursor-pointer border '><IoIosArrowForward /></li>
            </ul>
        </main>
    );
}
