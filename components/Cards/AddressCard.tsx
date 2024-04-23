import * as React from 'react';

export interface IAddressCardProps {
    BtnContent: string,
    setOpen: (value: boolean) => void
}

export default function AddressCard(props: IAddressCardProps) {
    const {BtnContent, setOpen} = props
  return (
      <nav className='flex flex-col gap-4 pb-4 bg-white p-4 rounded-xl'>
          <div className='flex justify-between items-center'>
              <label className='w-1/4' htmlFor="">Tên người dùng</label>
              <input className='w-3/4 outline-none bg-transparent border  px-3 py-1 rounded-full' type="text" name="name" id="" placeholder="Nhập tên người dùng" />
          </div>
          <div className='flex justify-between items-center'>
              <label className='w-1/4' htmlFor="">Số điện thoại</label>
              <input
                  className='w-3/4 outline-none bg-transparent border  px-3 py-1 rounded-full'
                  type="text"
                  name="name"
                  id=""
                  placeholder="Số điện thoại"
              />
          </div>
          <div className='flex justify-between items-center'>
              <label className='w-1/4' htmlFor="">Địa chỉ</label>
              <input className='w-3/4 outline-none bg-transparent border  px-3 py-1 rounded-full' type="text" name="name" id="" placeholder="Nhập địa chỉ" />
          </div>
          <div className='flex justify-between items-center'>
              <label className='w-1/4' htmlFor="">Quốc gia</label>
              <select className='w-3/4 outline-none cursor-pointer bg-transparent border  px-3 py-1 rounded-full' defaultValue={"VietNam"} name="" id="">
                  <option value="" disabled>Vui lòng chọn quốc gia</option>
                  <option value="">VietNam</option>
                  <option value="">England</option>
              </select>
          </div>
          <div className='flex justify-between items-center'>
              <label className='w-1/4' htmlFor="">Tỉnh ,Thành phố</label>
              <select className='w-3/4 outline-none cursor-pointer bg-transparent border  px-3 py-1 rounded-full' defaultValue={"Hà Nội"} name="" id="">
                  <option value="">Thái Bình</option>
                  <option value="">Hồ Chí Minh</option>
                  <option value="">Đà Nẵng</option>
              </select>
          </div>
          <div className='flex  items-center'>
              <label className='w-1/4' htmlFor="addressConfirm">Đặt làm địa chỉ mặc định</label>
              <input className=' text-start flex items-start justify-start w-4 h-4' type="checkbox" name="addressConfirm" id="" />
          </div>
          <div className='flex gap-2 mx-auto'>
              <button onClick={() => setOpen(true)} className='bg-[#d62828] font-semibold w-[250px]  text-white  py-[6px] rounded-full'>{BtnContent}</button>
              <button onClick={() => setOpen(false)} className='bg-[#d62828] font-semibold w-[80px]  text-white  py-[6px] rounded-full'>HỦY</button>
          </div>
      </nav>
  );
}
