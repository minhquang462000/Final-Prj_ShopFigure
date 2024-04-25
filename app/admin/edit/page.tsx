"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { HiPhoto } from "react-icons/hi2";

export interface IpageProps {}

export default function page(props: IpageProps) {
  const [image, setImage] = React.useState<any>(null);
  return (
    <div className="mx-auto max-w-270">
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
                defaultValue="Nguyễn Minh Quang"
              />
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
                defaultValue="09876554321"
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
                defaultValue="nmquang@gmail.com"
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
              defaultValue="Thuy Duyen -Thai Thuy-Thai Binh"
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
          <div className={`${image ? "block" : "hidden "}   `}>
            <div className="flex  items-end gap-2 w-full">
              <img
                className="w-[100px] h-[100px] object-cover rounded-full"
                src={image}
                alt=""
              />
              <button
                className="border border-black rounded-md px-4 py-1 text-xs hover:border-red-500 hover:text-red-500"
                type="button"
                onClick={() => {
                  setImage(null);
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
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-x-6 m-auto">
        <Link href="/admin">
          <button className="text-sm w-[100px] hover:bg-red-500 hover:text-white hover:border-red-500 border px-3 py-2 rounded-md border-black font-semibold leading-6 text-gray-900">
            Quay Lại
          </button>
        </Link>
        <button className="rounded-md bg-indigo-600 px-3 w-[100px] py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ">
          Lưu
        </button>
      </div>
    </div>
  );
}
