import * as React from 'react';

export interface IButtonChangeActiveProps {
    setStatus: (status: number) => void;
    status: number
}

export default function ButtonChangeActive (props: IButtonChangeActiveProps) {
    const {setStatus, status} = props
  return (
    <div className={`p-2 border rounded-lg flex relative text-gray-600 font-bold text-lg h-1/2 mt-2  items-center    gap-2 ${status === 1 ? "border-[#26b9fe]" : "border-red-500"}`}>
    <button onClick={() => setStatus(1)} className={`w-full p-2 z-10 rounded ${status === 1 && "text-white"}`}>Active</button>
    <button onClick={() => setStatus(0)} className={`w-full p-2 z-10 rounded ${status === 0 && "text-white"}`}>InActive</button>
    <span className={`absolute w-1/2 z-0  top-0 transition-all duration-500  h-full ${status === 1 ? "left-0 bg-[#26b9fe]" : " left-1/2 bg-red-500"}`}></span>
</div>
  );
}
