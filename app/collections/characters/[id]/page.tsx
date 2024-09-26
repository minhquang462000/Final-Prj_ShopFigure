
import { getListSelect, getOneSelect } from '@/api/getListSelect';
import { getAllProduct, getAllProductClient, getAllProductHome } from '@/api/product';
import CardProductMain from '@/components/Cards/CardProductMain';
import CardTitleCollection from '@/components/Cards/CardTitelCollection';
import RootPagination from '@/components/Pagination/RootPagination';
import TitleCardCollection from '@/components/Support/TitleCardCollection';
import { IFilter } from '@/interfaces';
import * as React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { ToastContainer } from 'react-toastify';
import { listProduct } from '@/models/product';
import { listCharacter } from '@/models/character';
export interface IpageProps {
}

export default async function page({ params }: { params: { id: string } }) {
    // console.log("params----->", params.id);
    // console.log("searchParams----->", searchParams);
    // const dataTitle = await getOneSelect(String(params.id), String(searchParams.id));
    // console.log("🚀 ~ file: page.tsx:page ~ dataTitle:", dataTitle);
    // const queryID = String(searchParams.id)
    // const query = {
    //     page: 1, limit: 28, search: "",
    //     wordFilter: queryID
    // };
    // const {docs:products} =await getAllProduct(query as IFilter);
    // const { docs: products, total } = await getAllProductClient(query as IFilter, label);
    const character = listCharacter[Number(params.id) - 1]
    const products = listProduct.filter((item) => item.character.character_id == Number(params.id));
    const total = products.length
    return (
        <main className='w-full relative  p-3 text-black rounded-sm overflow-hidden bg-white'>
            <ToastContainer autoClose={1000} />
            <TitleCardCollection character={character} />
            <CardTitleCollection title={""} />
            {total > 0 ?
                <div className='w-full p-2'>
                    <ul className='flex max-w-[80%] justify-start overflow-x-auto whitespace-nowrap flex-nowrap h-max  gap-2'>
                        <li className='bg-[#D62828] flex cursor-pointer items-center gap-1 px-2 rounded-md p-1 mb-2 text-white'>Xóa tất cả <IoClose size={20} /></li>
                    </ul>
                    <div className='grid my-2  grid-cols-4 gap-4'>
                        {products?.map((product: any, index: number) => (
                            <CardProductMain key={index} data={product} />
                        ))}
                    </div>
                    {/* {total > query.limit && <RootPagination page={query.page} total={total} limit={query.limit} query={query.search} />} */}
                </div> : <p className='p-2'>Không tìm thấy sản phẩm phù hợp!</p>
            }
        </main>
    );
}
