import { setTokenCookie } from '@/api/login';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

export interface ILoginHomePageProps {
    setOpen: (value: boolean) => void
}

export default function LoginHomePage (props: ILoginHomePageProps) {
    const {setOpen} = props
    const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter();
    const [showForgetTable, setShowForgetTable] = React.useState(false);
    const [formLogin, setFormLogin] = React.useState({
      email: "",
      password: "",
    });
  
    const handleDataLogin = (e: any) => {
      const { name, value } = e.target;
      setFormLogin({
        ...formLogin,
        [name]: value,
      });
    };
    const handleLogin = () => {
      if (formLogin.email == "" || formLogin.password == "") {
        toast.error('Vui lòng điền đầy đủ điền kiện')
      } else {
        const fetData = async () => {
          await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            { ...formLogin }
          ).then(async (res) => {
           if (res.data.user.cart ===null) {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth`, {user: res.data.user.user_id})
           }
           setTokenCookie(res.data.Token);
            toast.success('Đăng nhập thành công ,xin chờ trong giây lát...')
            if (res.data.user.role == 0) {
              router.push(`/admin/accountAdmin/${res.data.user.user_id}`)
            } else {
              router.push("/")
            }
          }).catch((e) => {
            toast.error(e.response.data.message)
          });
          //
        };
        fetData();
      }
    }
  return (
    <nav>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
                  <h2 className="text-lg">ĐĂNG NHẬP TÀI KHOẢN</h2>
                  <h3 className="mb-3">Nhập email và tài khoản của bạn</h3>
                  <input
                    className="border mb-3 p-2 outline-none w-full bg-transparent"
                    type="email"
                    placeholder="Email"
                    onChange={handleDataLogin}
                    name="email"
                  />
                  <div className="w-full mb-3 flex justify-between p-2 border">
                    <input
                      className="outline-none w-[95%] bg-transparent"
                      type={showPassword ? "text" : "password"}
                      placeholder="Mật khẩu"
                      onChange={handleDataLogin}
                      name="password"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-[5%]"
                    >
                      {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>
                  <button onClick={handleLogin} className="bg-black text-white mb-3 w-full p-3 text-xs font-medium rounded">
                    ĐĂNG NHẬP
                  </button>
                  <section className="text-start mb-1">
                    <p>
                      Khách hàng mới?
                      <Link href="/auth/register">  <button className="font-bold hover:underline ml-1">Tạo tài khoản</button></Link>
                    </p>
                  </section>
                  <section  className="text-start mb-3">
                    <p>
                      Quên mật khẩu?
                      <button  onClick={() => setOpen(true)} className="font-bold hover:underline ml-1">Khôi phục mật khẩu</button>
                    </p>
                  </section>
                </nav> 
  );
}
