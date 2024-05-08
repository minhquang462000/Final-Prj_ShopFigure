'use client'
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useEffect } from 'react';
export interface ITHeadTableOneProps {
    onSelectAll: any
    searchParams : any
}

export default function THeadTableOne (props: ITHeadTableOneProps) {
    const { onSelectAll } = props
    const [queryState, setQueryState] = React.useState<string>('1')
    const router = useRouter()
    useEffect(()=>{
        if(queryState === '1'){
            router.push('?status=1')
        }else if(queryState === '0'){
            router.push('?status=0')
        }
    },[queryState])
  return (
    <ul className="grid grid-cols-10 w-full text-center gap-5  p-4  border-gray-400  font-medium  ">
    <li className="col-span-1 flex items-center gap-1  text-start">
      {" "}
      <input onChange={onSelectAll} type="checkbox" name="" id="" /> Tên
      Danh Mục
    </li>
    <li className="col-span-3 text-center">Mô Tả</li>
    <li className="col-span-2 text-center  ">Ảnh Bìa</li>
    <li className="col-span-1 flex justify-center items-center">
    <select onChange={(e)=>setQueryState(e.target.value)} className="outline-none m-auto border  px-2 p-1 rounded-md border-gray-400">
    <option  value="">Trạng Thái</option>
    <option value={"1"}>Active</option>
    <option value={"0"}>InActive</option>
</select></li>
    <li className="col-span-1 ">Ngày Tạo</li>
    <li className="col-span-1 ">Ngày Cập Nhật </li>
    <li className="col-span-1  ">Action</li>
  </ul>
  );
}
