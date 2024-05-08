"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { HiPhoto } from "react-icons/hi2";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { IUser } from "@/interfaces";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
export interface IpageProps { }

export default function page(props: IpageProps) {
  const [avatar, setAvatar] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>('');
  const router = useRouter();

  const [dataUser, setDataUser] = useState<any>({
    name: "",
    email: "",
    password: "",
    comfirmpassword: "",
    gender: "",
    address: "",
    phone: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleDataNewUser = (e: any) => {
    const { name, value } = e.target;
    setDataUser({
      ...dataUser,
      [name]: value
    });
  };

  const handleCreateUser = async () => {
    if (dataUser.name === "" || dataUser.password === "" || dataUser.comfirmpassword === "" || dataUser.email === "" || dataUser.address === "" || dataUser.phone === "" || avatar === null) {
      toast.error('Vui lòng điền đầy đủ điền kiện')
      return
    }
    else if (dataUser.password != dataUser.comfirmpassword) {
      toast.error('Mật khẩu nhập lại không đồng nhất')
      return
    } else {

      const formData = new FormData();
      formData.append('name', dataUser.name);
      formData.append('email', dataUser.email);
      formData.append('password', dataUser.password);
      formData.append('comfirmpassword', dataUser.comfirmpassword);
      formData.append('gender', dataUser.gender);
      
      formData.append('address', dataUser.address);
      formData.append('phone', dataUser.phone);
      if (avatar) {
        formData.append('avatar', avatar);
        
      }
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/users`, formData)
        .then((res) => {
          toast.success('Tạo tài khoản thành công')
          router.push('/admin/users')
        })
        .catch((e) => {
          toast.error(e.response.data.message)
        })
    }
  };


  return (
    <div className="mx-auto max-w-270">
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
      <div className="grid grid-cols-5 gap-4">
        <div
          className="border-b col-span-5 border-stroke
         "
        >
          <h3 className="font-medium  ">Cật Nhật Thông Tin</h3>
        </div>
        <nav className="grid col-span-3 bg-white rounded-md gap-4 p-7">
          <div className="w-full ">
            <label
              className="mb-3 block text-sm font-medium "
              htmlFor="fullName"
            >
              Tên
            </label>
            <div className="w-full">
              <input
                className="w-full rounded-md outline-none bg-transparent border ring-1 focus:ring-[#26b9fe] p-2"
                type="text"
                name="name"
                id="name"
                placeholder="Tên..."
                onChange={handleDataNewUser}

              />
            </div>
          </div>
          <div className="">
            <label className="mb-3 block text-sm font-medium " htmlFor="phone">
              Giới tính
            </label>
            <select onChange={(e) => setDataUser({ ...dataUser, gender: e.target.value })} className="w-[300px] rounded-md outline-none bg-transparent border ring-1 focus:ring-[#26b9fe] p-2" name="gender" id="">
              <option value="">Gioi tinh</option>
              <option value="1">Nam</option>
              <option value="0">Nu</option>
            </select>
          </div>
          <div className="w-full flex gap-4">
            <div className="w-full flex ring-1 focus:ring-[#26b9fe] rounded-md justify-between p-2 border">
              <input

                className="outline-none w-[95%] bg-transparent"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                onChange={handleDataNewUser}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="w-[5%]"
              >
                {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            <div className="w-full flex ring-1 focus:ring-[#26b9fe] rounded-md justify-between p-2 border">
              <input

                name="comfirmpassword"
                className="outline-none w-[95%] bg-transparent"
                type={showPassword2 ? "text" : "password"}
                placeholder="Xác nhận lại mật khẩu"
                onChange={handleDataNewUser}
              />
              <button
                onClick={() => setShowPassword2(!showPassword2)}
                className="w-[5%]"
              >
                {!showPassword2 ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>

          <div className="">
            <label className="mb-3 block text-sm font-medium " htmlFor="phone">
              Số Điện Thoại
            </label>
            <div className="w-full">
              <input
                className="w-full rounded-md outline-none bg-transparent border ring-1 focus:ring-[#26b9fe] p-2"
                type="text"
                name="phone"
                id="name"
                placeholder="SĐT..."

                onChange={handleDataNewUser}

              />
            </div>
          </div>

          <div className="">
            <label className="mb-3 block text-sm font-medium " htmlFor="email">
              Email
            </label>
            <div className="w-full">
              <input
                className="w-full rounded-md outline-none bg-transparent border ring-1 focus:ring-[#26b9fe] p-2"
                type="text"
                name="email"
                id="email"
                placeholder="email..."

                onChange={handleDataNewUser}

              />
            </div>
          </div>

          <div className="">
            <label
              className="mb-3 block text-sm font-medium "
              htmlFor="address"
            >
              Địa Chỉ
            </label>
            <input
              className="w-full rounded-md outline-none bg-transparent border ring-1 focus:ring-[#26b9fe] p-2"
              type="text"
              name="address"
              id="address"
              placeholder="Địa chỉ..."
              onChange={handleDataNewUser}


            />
          </div>
        </nav>
        <div className="col-span-2 bg-white rounded-md p-7">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Avatar
          </label>
          <div className={`${imagePreview ? "block" : "hidden "}   `}>
            <div className="flex  items-end gap-2 w-full">
              <img
                className="w-[100px] h-[100px] object-cover rounded-full"
                src={imagePreview}
                alt=""
              />
              <button
                className="border border-black rounded-md px-4 py-1 text-xs hover:border-red-500 hover:text-red-500"
                type="button"
                onClick={() => {
                  setImagePreview(null);
                }}
              >
                Xoá
              </button>
            </div>
          </div>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <HiPhoto
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="image"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600  hover:text-indigo-500"
                >
                  <span className="p-1">Chọn File</span>

                  <input
                    id="image"
                    name="image"
                    type="file"
                    onChange={(e) => {
                      setImagePreview(URL.createObjectURL(e.target.files![0]))
                      setAvatar(e.target.files![0])
                    }

                    }
                    accept="image/*"
                    className="sr-only outline-none"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-x-6 m-auto">
        <Link href="/admin/users">
          <button className="text-sm w-[100px] hover:bg-red-500 hover:text-white hover:border-red-500 border px-3 py-2 rounded-md border-black font-semibold leading-6 text-gray-900">
            Quay Lại
          </button>
        </Link>
        <button onClick={handleCreateUser} className="rounded-md bg-indigo-600 px-3 w-[100px] py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ">
          Lưu
        </button>
      </div>
    </div>
  );
}
