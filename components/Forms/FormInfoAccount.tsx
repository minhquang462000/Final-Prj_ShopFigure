import * as React from 'react';

export interface IFormInfoAccountProps {
}

export default function FormInfoAccount (props: IFormInfoAccountProps) {
  return (
    <div className='w-full flex gap-4  bg-white  p-4 rounded-xl  flex-col'>
            <h2 className='text-2xl   mb-1'>Thông tin tài khoản</h2>
            <div className='flex justify-between items-center'>
              <label  className='w-1/4' htmlFor="">Tên người dùng</label>
              <input className='w-3/4 outline-none bg-transparent border  px-3 py-1 rounded-full' type="text" name="name" id="" placeholder="tên" />
            </div>
            <div className='flex justify-between items-center'>
              <label  className='w-1/4' htmlFor="">Giới tính</label>
              <div className='flex w-3/4 gap-4 items-center'>
                <span className='flex gap-2'>
                  <input type="radio" name="gender" id="" />
                  Nam
                </span>
                <span className='flex gap-2'>
                  <input  type="radio" name="gender" id="" />
                  Nữ
                </span>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <label  className='w-1/4' htmlFor="">Địa chỉ</label>
              <input className='w-3/4 outline-none bg-transparent border  px-3 py-1 rounded-full' type="text" name="name" id="" placeholder="Nhập địa chỉ" />
            </div>
            <div className='flex justify-between items-center'>
              <label  className='w-1/4' htmlFor="">Quốc gia</label>
              <select  className='w-3/4 outline-none cursor-pointer bg-transparent border  px-3 py-1 rounded-full' defaultValue={"VietNam"} name="" id="">
                <option value="" disabled>Vui lòng chọn quốc gia</option>
                <option value="">VietNam</option>
                <option value="">England</option>
              </select>
            </div>
            <div className='flex justify-between items-center'>
              <label  className='w-1/4' htmlFor="">Tỉnh ,Thành phố</label>
              <select  className='w-3/4 outline-none cursor-pointer bg-transparent border  px-3 py-1 rounded-full' defaultValue={"Hà Nội"} name="" id="">
                <option value="">Thái Bình</option>
                <option value="">Hồ Chí Minh</option>
                <option value="">Đà Nẵng</option>
              </select>
            </div>
            <div className='flex justify-between items-center'>
              <label  className='w-1/4' htmlFor="">Email</label>
              <input className='w-3/4 outline-none bg-transparent border  px-3 py-1 rounded-full' type="email" name="name" id="" placeholder="Email" />
            </div>
            <div className='flex justify-between items-center'>
              <label  className='w-1/4' htmlFor="">Số điện thoại</label>
              <input
              className='w-3/4 outline-none bg-transparent border  px-3 py-1 rounded-full'
                type="text"
                name="name"
                id=""
                placeholder="Số điện thoại"
              />
            </div>
            <div className='flex justify-between items-center'>
              <label className='w-1/4'  htmlFor="">Ngày sinh</label>
              <input className='w-3/4 outline-none bg-transparent border  px-3 py-1 rounded-full' type="date" name="name" id="" placeholder="dd/mm/yyyy" />
            </div>
            <button className='bg-[#d62828] font-semibold w-[250px] mx-auto text-white  py-[6px] rounded-full'>CẬT NHẬT</button>
          </div>
  );
}
