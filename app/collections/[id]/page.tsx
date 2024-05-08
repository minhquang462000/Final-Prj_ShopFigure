
import { getListSelect, getOneSelect } from '@/api/getListSelect';
import { getAllProduct, getAllProductHome } from '@/api/product';
import CardProductMain from '@/components/Cards/CardProductMain';
import CardTitleCollection from '@/components/Cards/CardTitelCollection';
import TitleCardCollection from '@/components/Support/TitleCardCollection';
import { IFilter } from '@/interfaces';
import * as React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

export interface IpageProps {
}

export default async function page({params,searchParams}:{params:{id:string},searchParams:{id:string|undefined}}) {
    // console.log("params----->", params.id);
    // console.log("searchParams----->", searchParams);
    const dataTitle = await  getOneSelect(String(params.id),String(searchParams.id));
    // console.log("🚀 ~ file: page.tsx:page ~ dataTitle:", dataTitle);
    const label =String(params.id)
    const queryID = String(searchParams.id)
    const query = { page: 1, limit: 28, search: "" , 
    wordFilter:queryID};
    // const {docs:products} =await getAllProduct(query as IFilter);
    const {docs:products} =await getAllProductHome(query as IFilter,label);
    // console.log("products----->", products);
    
    
    return (
        <main className='w-full relative  p-3 text-black rounded-sm overflow-hidden bg-white'>
         <TitleCardCollection data={dataTitle}/>
            <CardTitleCollection  title={dataTitle?.name}/>
            <ul className='flex max-w-[80%] justify-start overflow-x-auto whitespace-nowrap flex-nowrap h-max my-3 gap-2'>
                <li className='bg-[#D62828] flex cursor-pointer items-center gap-1 px-2 rounded-md p-1 mb-2 text-white'>Xóa tất cả <IoClose size={20} /></li>  
            </ul>
            <div className='grid my-2  grid-cols-4 gap-4'>
              {products?.map((product: any) => (
                <CardProductMain key={product._id} data={product} />
              ))}
            </div>
            <ul className='flex w-full justify-center h-max my-3 gap-2'>
                <li className='w-10 h-10 flex items-center justify-center hover:text-white hover:bg-[#9b9b9b] text-[#9b9b9b] cursor-pointer border '><IoIosArrowBack /></li>
                <li className='w-10 h-10 flex items-center justify-center hover:text-white font-medium hover:bg-[#9b9b9b] text-[#9b9b9b] cursor-pointer border '>1</li>
                <li className='w-10 h-10 flex items-center justify-center hover:text-white hover:bg-[#9b9b9b] text-[#9b9b9b] cursor-pointer border '><IoIosArrowForward /></li>
            </ul>
        </main>
    );
}
