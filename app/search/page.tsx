
import { getAllProductClient } from '@/api/product';
import CardProductItem from '@/components/Cards/CardProductItem';
import CardProductMain from '@/components/Cards/CardProductMain';
import CardSearchPage from '@/components/Cards/CardSearchPage';
import RootPagination from '@/components/Pagination/RootPagination';
import { IFilter, IProduct } from '@/interfaces';
import MainLayout from '@/layouts/main';
import Link from 'next/link';
import * as React from 'react';

export interface IpageProps {
}

export default async function page({ searchParams }: { searchParams: { q: string | undefined } }) {
    const query = { page: 1, limit: 15, search: searchParams.q }
    const { docs: products, total } = await getAllProductClient(query as IFilter, "");
    return (
        <MainLayout>
            <main className='max-w-[1280px] m-auto text-black text-xs pt-2 pb-10 flex flex-col gap-4   mt-[100px]'>
                <p className=' flex gap-2'><Link href={'/'}>Trang chủ </Link> /  Tìm kiếm</p>
                <h4 className='text-2xl mt-5 font-medium text-center'>Tìm kiếm</h4>
                <div className='flex gap-4 justify-between items-center'>
                    <p>Kết quả tìm kiếm cho <strong>"{searchParams.q}"</strong>.</p>
                    <div className='flex  font-medium gap-4'>
                        <button className='bg-[#d62828] text-white transition-all duration-500 hover:bg-white hover:text-[#d62828] rounded border border-[#d62828] p-2 px-4 '>SẢN PHẨM ({`${total}`})</button>
                        <button className='border hover:border-[#d62828] hover:text-[#d62828] transition-all duration-300 border-[#dddddd] rounded p-2 px-4'>BÀI VIẾT (0)</button>
                    </div>
                </div>
                <div className='grid gap-3 grid-cols-5'>
                    {products?.map((item: IProduct, index: number) => (
                        <CardSearchPage key={index} product={item} />
                    ))}
                </div>
               {total > query.limit  && <RootPagination page={query.page} total={total} limit={query.limit} query={query.search} />}
            </main>
        </MainLayout>
    );
}
