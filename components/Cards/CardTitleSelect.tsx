import * as React from 'react';

export interface ICardTitleSelectProps {
  title: string;
  urlLink: string;
}

export default function CardTitleSelect(props: ICardTitleSelectProps) {
  const { title, urlLink } = props;
  return (
    <nav className='text-black flex justify-between py-2   items-center '>
      <h1 className='text-xl font-bold pl-3 border-l-[3px] border-black'>{title.toUpperCase()}</h1>

      <section className='flex   justify-end  text-sm '>
        <div className='flex text-end gap-2 max-w-[800px]  overflow-x-auto items-center flex-nowrap whitespace-nowrap '>
          <button className='bg-[#ededed] rounded-md p-2 my-2 hover:text-white hover:bg-[#fc4444]'>Đã phát hành</button>
          <button className='bg-[#ededed]  rounded-md p-2 my-2 hover:text-white hover:bg-[#fc4444]'>Chưa phát hành</button>
          <button className='bg-[#ededed]  rounded-md p-2 my-2 hover:text-white hover:bg-[#fc4444]'>Chưa phát hành</button>
          <button className='bg-[#ededed]  rounded-md p-2 my-2 hover:text-white hover:bg-[#fc4444]'>Chưa phát hành</button>
          <button className='bg-[#ededed]  rounded-md p-2 my-2 hover:text-white hover:bg-[#fc4444]'>Chưa phát hành</button>
        </div>
      </section>
    </nav>
  );
}
