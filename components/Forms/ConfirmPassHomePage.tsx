import * as React from 'react';
import { FaHandPointLeft } from 'react-icons/fa';

export interface IComfirmPassHomePageProps {
    setOpen:(value: boolean) => void
}

export default function ComfirmPassHomePage (props: IComfirmPassHomePageProps) {
  const {setOpen} = props
  return (
    <section>
    <h2 className="text-lg">KHÔI PHỤC MẬT KHẨU</h2>
    <h3 className="mb-3">Nhập email của bạn</h3>
    <input
      className="border mb-3 p-2 outline-none w-full bg-transparent"
      type="email"
      placeholder="Email"
    />

    <button className="bg-black text-white mb-3 w-full p-3 text-xs font-medium rounded">
      Lấy mật khẩu
    </button>
    <button onClick={() => setOpen(false)} className="flex items-center font-bold gap-1 hover:underline"><FaHandPointLeft />Trở về đăng nhập</button>
  </section>
  )
}
