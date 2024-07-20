'use client'
import CardSearchHeader from '@/components/Cards/CardSearchHeader';
import { IProduct } from '@/interfaces';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

export interface ISearchHearderProps {
}

export default function SearchHearder(props: ISearchHearderProps) {
    const [contentSearch, setContentSearch] = useState<string>('');
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [dataProductSearch, setDataProductSearch] = useState<any>({} as { data: IProduct[], total: number });
    const [dataPostSearch, setDataPostSearch] = useState<any>({} as { data: any[], total: number });
    const wrapperRefSearch = useRef<HTMLDivElement>(null);

    const fetchData = async () => {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/client?search=${contentSearch}`)
        setDataProductSearch(result.data)
    }

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (
                wrapperRefSearch.current &&
                !wrapperRefSearch.current!.contains(event.target) &&
                showPopup
            ) {
                setShowPopup(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup, wrapperRefSearch]);
    useEffect(() => {
        if (contentSearch.length > 0) {
            setShowPopup(true)
        }

        if (contentSearch.length > 2) {
            fetchData()
        }
    }, [contentSearch]) 
    return (
        <div className="flex relative items-center gap-2 bg-white   justify-between  rounded-md border-2 w-[35%]  border-white">
            <input
                className="outline-none bg-transparent w-full placeholder:text-black px-2 text-black"
                placeholder="Bạn đang tìm gì ??"
                type="text"
                name='search'
                onChange={(e) => setContentSearch(e.target.value)}
            />
            <Link href={`/search?q=${contentSearch}`}><IoMdSearch className="bg-gradient-to-r from-red-600 to-orange-500 text-[30px] rounded-md py-1 w-[70px] " /></Link>
            <div ref={wrapperRefSearch} className={`${showPopup ? 'block' : 'hidden'} bg-white absolute shadow-[0_0_10px_0_rgba(0,0,0,0.2)]  shadow-black top-10 rounded left-0 py-3 flex flex-col gap-3 max-h-[400px] overflow-y-auto text-black w-full`}>
                <h4 className='text-center font-medium text-lg'>KẾT QUẢ TÌM KIẾM</h4>
                <div className='w-full  h-max'>
                    <div className='flex justify-between items-center bg-[#f5f5f5] py-1 px-2'>
                        <p className='font-medium text-base'>SẢN PHẨM</p>
                        <button className={`${!dataProductSearch?.total && 'hidden'} hover:underline`}>
                            <Link href={`/search?q=${contentSearch}`}>Xem tất cả <b className='mx-1'>{dataProductSearch?.total}</b> sản phẩm</Link></button>
                    </div>
                    {!dataProductSearch?.docs ?
                        <p className='text-sm px-2'>Không có sản phẩm phù hợp!</p> :
                        <div className='flex flex-col px-4 py-2  gap-2 max-h-[350px] overflow-hidden'>
                            {dataProductSearch?.docs?.map((item: IProduct, index: number) => <CardSearchHeader key={index} product={item} />)}
                        </div>
                    }

                </div>
                <div className='w-full  h-max'>
                    {<div className='flex justify-between items-center bg-[#f5f5f5] py-1 px-2'>
                        <p className='font-medium text-base'>BÀI VIẾT</p>
                        <button className={`${!dataPostSearch.total && 'hidden'} hover:underline`}>Xem tất cả <b className='mx-1'>0</b> sản phẩm</button>
                    </div>}
                    {dataPostSearch.length === 0 ?
                        <p className='text-sm px-2'>Không có bài viết phù hợp!</p> :
                        <div className='flex flex-col gap-2 px-4 py-2  max-h-[350px] overflow-hidden'>
                        </div>}

                </div>
            </div>
        </div>
    );
}
