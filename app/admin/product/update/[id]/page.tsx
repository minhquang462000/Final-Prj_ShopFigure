"use client";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useEffect, useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import { ToastContainer } from "react-toastify";
import Link from "next/link";

export interface IpageProps {}

export default function page(props: IpageProps) {
  const [images, setImages] = useState<File[]>([]);
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //convert `FileList` to `File[]`
      const _files = Array.from(e.target.files);
      setImages(_files);
    }
  };
  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    gender: "1",
    positionId: "",
  });
  const animatedComponents = makeAnimated();
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
       Cập Nhật Sản Phẩm
      </h2>
      <div className="border-b pb-8 grid grid-cols-3 gap-4 gap-x-8 border-gray-900/10 ">
        <div className="col-span-2  ">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Tên Sản Phẩm
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
        <div className="col-span-3">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
           Ảnh Hiển Thị
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
                  <span>Upload a file</span>

                  <input
                    id="image"
                    name="image"
                    type="file"
                    multiple
                    onChange={handleFileSelected}
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
          <div className="grid grid-cols-3 gap-5 relative  w-full   pt-5">
            <button
              onClick={() => setImages([])}
              className={`px-10 p-2 text-end w-max bg-red-500 rounded-xl col-span-3 justify-self-end  text-white font-bold ${
                images.length === 0 && "hidden"
              }`}
            >
              X
            </button>
            {images.map((image) => {
              const src = URL.createObjectURL(image);
              return (
                <div className=" relative col-span-1 h-[200px] ">
                  <img
                    className="object-cover h-full w-full rounded-md"
                    src={src}
                    alt=""
                  />
                  <button
                    className="absolute -top-2 -right-2  text-white bg-red-600 p-2 px-4 rounded-xl"
                    type="button"
                    onClick={() => setImages(images.filter((i) => i !== image))}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-2  ">
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
           Mô Tả
          </label>
          <textarea
            name=""
            id=""
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset h-[100px] ring-gray-300 focus:ring-[#26b9fe] outline-none placeholder:text-gray-400 "
          />
        </div>
        <div></div>
        <div className="col-span-1">
          <label
            htmlFor="address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Giá Sản Phẩm
          </label>
          <input
            type="text"
            onChange={(e) => handleOnchange(e)}
            name="address"
            id="address"
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-[#26b9fe] outline-none ring-gray-300 placeholder:text-gray-400 "
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Số Lượng
          </label>
          <input
            type="text"
            onChange={(e) => handleOnchange(e)}
            name="phone"
            id="phone"
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-[#26b9fe] outline-none ring-gray-300 placeholder:text-gray-400 "
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
          Giảm Giá
          </label>
          <input
            type="text"
            onChange={(e) => handleOnchange(e)}
            name="phone"
            id="phone"
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-[#26b9fe] outline-none ring-gray-300 placeholder:text-gray-400 "
          />
        </div>
        <div className="col-span-2 ">
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Danh Mục
          </label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            name="category"
            isMulti
            options={[
              { value: "1", label: "Nam" },
              { value: "0", label: "Nu" },
            ]}
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="status"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
           Trạng Thái Hoạt Động
          </label>
          <Select
            closeMenuOnSelect={true}
            
            name="status"
            components={animatedComponents}
            options={[
              { value: "1", label: "Active" },
              { value: "0", label: "InActive" },
            ]}
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="character"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nhân Vật
          </label>
          <Select
            closeMenuOnSelect={true}
            name="character"
            components={animatedComponents}
            options={[
              { value: "1", label: "Nam" },
              { value: "0", label: "Nu" },
            ]}
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="brand"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Thương Hiệu
          </label>
          <Select
            closeMenuOnSelect={true}
            
            name="brand"
            components={animatedComponents}
            options={[
              { value: "1", label: "Nam" },
              { value: "0", label: "Nu" },
            ]}
          />
        </div>

        <div className="col-span-1">
          <label
            htmlFor="series"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Series
          </label>
          <Select
            closeMenuOnSelect={true}
            name="series"
            components={animatedComponents}
            options={[
              { value: "1", label: "Nam" },
              { value: "0", label: "Nu" },
            ]}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-x-6 m-auto">
        <Link href="/admin/product">
          <button className="text-sm w-[100px] hover:bg-red-500 hover:text-white hover:border-red-500 border px-3 py-2 rounded-md border-black font-semibold leading-6 text-gray-900">
            Quay Lại
          </button>
        </Link>
        <button className="rounded-md bg-indigo-600 px-3 w-[100px] py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ">
         Lưu Sp
        </button>
      </div>
    </main>
  );
}
