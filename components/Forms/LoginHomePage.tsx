import Link from 'next/link';
import * as React from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export interface ILoginHomePageProps {
    setOpen: (value: boolean) => void
}

export default function LoginHomePage (props: ILoginHomePageProps) {
    const {setOpen} = props
    const [showPassword, setShowPassword] = React.useState(false);
  return (
    <section>
                  <h2 className="text-lg">ĐĂNG NHẬP TÀI KHOẢN</h2>
                  <h3 className="mb-3">Nhập email và tài khoản của bạn</h3>
                  <input
                    className="border mb-3 p-2 outline-none w-full bg-transparent"
                    type="email"
                    placeholder="Email"
                  />
                  <div className="w-full mb-3 flex justify-between p-2 border">
                    <input
                      className="outline-none w-[95%] bg-transparent"
                      type={showPassword ? "text" : "password"}
                      placeholder="Mật khẩu"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-[5%]"
                    >
                      {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>
                  <button className="bg-black text-white mb-3 w-full p-3 text-xs font-medium rounded">
                    ĐĂNG NHẬP
                  </button>
                  <nav className="text-start mb-1">
                    <p>
                      Khách hàng mới?
                      <Link href="/auth/register">  <button className="font-bold hover:underline ml-1">Tạo tài khoản</button></Link>
                    </p>
                  </nav>
                  <nav  className="text-start mb-3">
                    <p>
                      Quên mật khẩu?
                      <button  onClick={() => setOpen(true)} className="font-bold hover:underline ml-1">Khôi phục mật khẩu</button>
                    </p>
                  </nav>
                </section> 
  );
}
