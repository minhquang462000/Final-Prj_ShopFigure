"use client";
import MainLayout from "@/layouts/main";
import axios from "axios";
import { useRouter } from 'next/navigation';
import * as React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";
import { ToastContainer, toast} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export interface IpageProps {}

export default function page(props: IpageProps) {
  const router = useRouter()
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [formRegister, setFormRegister] = React.useState({
    name: "",
    email: "",
    password: "",
    numberphone:"",
    comfirmpassword: ""
  });
  const handleDataRegister = (e: any) => {
    const { name, value } = e.target;
    setFormRegister({
      ...formRegister,
      [name]: value
    });
  };

  
  const handleRegister = () => {
if (formRegister.name == "" || formRegister.email == "" || formRegister.password == "" || formRegister.comfirmpassword == "") {
  toast.error('Vui lòng điền đầy đủ điền kiện')
}
   else if(formRegister.password != formRegister.comfirmpassword ) {
   toast.error('Mật khẩu nhập lại không đồng nhất')
   }else{
   
   try {
    const {comfirmpassword,...data} = formRegister
   const fetData = async () => {
    const res = await axios.post("http://localhost:8080/api/v1/auth/register", {...data}).then((res) => {
      toast.success('Đăng ký thành công')
      router.push('/auth/login')
      console.log(res);
      
    }).catch((e) => {
      toast.error(e.response.data.message)
    });
    
  };
  fetData();

 
   } catch (e: any) {
    toast.error(e.response.data.message)
   }
  }
};

  
  return (
    <MainLayout>
      
      <main className="text-black text-xl  w-screen bg-gradient-to-r from-[#cdf2f9] to-[#6fe9ff] mx-auto">
      <ToastContainer  autoClose={2000}/>
        <div className="w-[1280px] pb-10 flex relative flex-col gap-10 mx-auto">
          <ul className="flex py-3 text-base gap-2 ">
            <li className="cursor-pointer">Trang chủ</li>
            <li className="cursor-pointer hover:text-[#d70018]">/ Tài khoản</li>
            <li className="cursor-pointer">/ Đăng ký</li>
          </ul>
          <nav className="bg-white flex flex-col pb-10 gap-5 mx-auto rounded-md group/item w-[900px] px-10 p-6">
            <h1 className="text-center text-[30px] font-medium">
              Tạo Tài Khoản
            </h1>
            <input
              onChange={(e) => handleDataRegister(e)}
              name="name"
              className="outline-none bg-transparent border p-2"
              type="text"
              placeholder="Tên đăng nhập"
            />
            <input
              onChange={(e) => handleDataRegister(e)}
              className="outline-none bg-transparent border p-2"
              name="email"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => handleDataRegister(e)}
              className="outline-none bg-transparent border p-2"
              name="numberphone"
              type="text"
              placeholder="Số điện thoại"
            />
            <div className="w-full flex justify-between p-2 border">
              <input
              onChange={(e) => handleDataRegister(e)}
                className="outline-none w-[95%] bg-transparent"
                name="password"
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
            <div className="w-full flex justify-between p-2 border">
              <input
              onChange={(e) => handleDataRegister(e)}
              name="comfirmpassword"
                className="outline-none w-[95%] bg-transparent"
                type={showPassword2 ? "text" : "password"}
                placeholder="Xác nhận lại mật khẩu"
              />
              <button
                onClick={() => setShowPassword2(!showPassword2)}
                className="w-[5%]"
              >
                {!showPassword2 ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            <button onClick={handleRegister} className="w-max bg-black mx-auto text-white p-3 px-8 font-medium rounded">
              Đăng Ký
            </button>
            <button className="text-lg flex items-center justify-center gap-1 hover:text-[#d70018]">
              <TbArrowBackUp />
              Quay lại đăng nhập
            </button>
          </nav>
        </div>
      </main>
    </MainLayout>
  );
}