"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import { ToastContainer } from "react-toastify";

export interface IpageProps {}

export default function page(props: IpageProps) {
  const [image, setImage] = useState<any>(null);

  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    image: "",
    gender: "1",
    positionId: "",
  });
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <main className=" h-screen p-4 px-5 overflow-y-auto">
      <ToastContainer />
      <h2 className="text-2xl mb-5 font-semibold leading-7 text-gray-900">
        Thêm Series
      </h2>
      <div className="border-b grid grid-cols-2 gap-4 gap-x-8 border-gray-900/10 ">
        <div className="col-span-1  ">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Tên Series
          </label>
          <input
            id="name"
            name="name"
            onChange={(e) => handleOnchange(e)}
            type=""
            autoComplete="name"
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-[#26b9fe] outline-none placeholder:text-gray-400 "
          />
        </div>
        <div></div>
        <div className="col-span-1  ">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Mô tả
          </label>
          <textarea
            name=""
            id=""
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset h-[100px] ring-gray-300 focus:ring-[#26b9fe] outline-none placeholder:text-gray-400 "
          />
        </div>

        <div className="col-span-2">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Ảnh Bìa
          </label>
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
                    onChange={(e) =>
                      setImage(URL.createObjectURL(e.target.files![0]))
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
          <div
            className={`${
              image ? "block" : "hidden "
            } mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-2`}
          >
            <div className="flex justify-between items-center w-full">
              <span className="w-[200px] h-[120px]">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={image}
                  alt=""
                />
              </span>
              <span className="w-[70%] truncate">Url Image: {image}</span>
              <span className="border border-black rounded-md px-3 py-1 text-xl">
                {" "}
                <button
                  type="button"
                  onClick={() => {
                    setImage(null);
                  }}
                >
                  X
                </button>
              </span>
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
        <button className="rounded-md bg-indigo-600 px-3 w-[100px] py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ">
          Lưu
        </button>
      </div>
    </main>
  );
}
