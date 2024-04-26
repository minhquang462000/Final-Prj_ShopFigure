"use client";

import ButtonCreate from "@/components/Admin/ButtonCreate";
import SlideProductAdmin from "@/components/Admin/Slide/SlideProductAdmin";
import Link from "next/link";

// Import Swiper React components

const productData: any = [
  {
    image: [
      "https://product.hstatic.net/200000462939/product/10002_e9904efa9aab45fc9672f0c6e145e974_grande.jpg",
      "https://product.hstatic.net/200000462939/product/10003_301359d555e0443cbebee77f013b4097_grande.jpg",
      "https://product.hstatic.net/200000462939/product/10005_558736ac52cc453bb88a479e88e07468_grande.jpg",
      "https://product.hstatic.net/200000462939/product/10009_c38e0400f5b64bc29e9aff37ebc4429f_grande.jpg",
    ],
    name: "Apple Watch Series 7",
    category: ["Electronics", "Watch", "Smart Watch"],
    price: 296,
    quantity: 22,
    profit: 45,
    status: 1,
  },
  {
    image: [
      "https://product.hstatic.net/200000462939/product/10002_e9904efa9aab45fc9672f0c6e145e974_grande.jpg",
      "https://product.hstatic.net/200000462939/product/10003_301359d555e0443cbebee77f013b4097_grande.jpg",
      "https://product.hstatic.net/200000462939/product/10005_558736ac52cc453bb88a479e88e07468_grande.jpg",
      "https://product.hstatic.net/200000462939/product/10009_c38e0400f5b64bc29e9aff37ebc4429f_grande.jpg",
    ],
    name: "Macbook Pro M1",
    category: ["Electronics", "Watch", "Smart Watch"],
    price: 546,
    quantity: 12,
    profit: 125,
    status: 0,
  },
  {
    image: [
      "https://product.hstatic.net/200000462939/product/10002_e9904efa9aab45fc9672f0c6e145e974_grande.jpg",
      "https://product.hstatic.nt/200000462939/product/10003_301359d555e0443cbebee77f013b4097_grande.jpg",
      "https://product.hstatic.net/200000462939/product/10005_558736ac52cc453bb88a479e88e07468_grande.jpg",
      "https://product.hstatic.net/200000462939/product/10009_c38e0400f5b64bc29e9aff37ebc4429f_grande.jpg",
    ],
    name: "Dell Inspiron 15",
    category: ["Electronics", "Watch", "Smart Watch"],
    price: 443,
    quantity: 64,
    profit: 247,
    status: 1,
  },
  {
    image: [
      "https://product.hstatic.net/200000462939/product/10002_e9904efa9aab45fc9672f0c6e145e974_grande.jpg",
      "https://product.hstatic.net/200000462939/product/10003_301359d555e0443cbebee77f013b4097_grande.jpg",
      "https://product.hstatic.net/200000462939/product/10005_558736ac52cc453bb88a479e88e07468_grande.jpg",
      "https://product.hstatic.net/200000462939/product/10009_c38e0400f5b64bc29e9aff37ebc4429f_grande.jpg",
    ],
    name: "HP Probook 450",
    category: ["Electronics", "Watch", "Smart Watch"],
    price: 499,
    quantity: 72,
    profit: 103,
    status: 0,
  },
];

import * as React from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus, FaRegEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export interface IAppProps {}

export default function page(props: IAppProps) {
  return (
    <div className="rounded-sm text-xs text-wrap border py-2 w-full text-center ">
      <ButtonCreate
        title="Danh Sách Sản Phẩm"
        urlLink="/admin/product/create"
      />
      <th className="grid grid-cols-16 text-sm  w-full text-center py-2 font-medium  ">
        <td className="col-span-5 flex gap-2   items-center">
          <input type="checkbox" name="" id="" />
          Tên Sản Phẩm
        </td>

        <td className="col-span-2  ">Thể Loại</td>
        <td className="col-span-2 ">Thông Tin</td>

        <td className="col-span-1 ">Nhân Vật</td>
        <td className="col-span-1 ">Thương Hiệu</td>
        <td className="col-span-1 ">Seri</td>

        <td className="col-span-1 ">Trạng Thái </td>
        <td className="col-span-1 ">Ngày Tạo</td>
        <td className="col-span-1 ">Ngày Cập Nhật </td>
        <td className="col-span-1 ">Action</td>
      </th>

      {productData.map((product: any, key: number) => (
        <tr
          className="grid grid-cols-16 gap-2 font-medium items-center border-t text-sm border-gray-400 py-2 "
          key={key}
        >
          <td className="col-span-5 flex gap-4    items-center">
            <input type="checkbox" name="" id="" />
            <div className="flex gap-8 items-center">
              <SlideProductAdmin data={product.image} />
              <p className=" text-start text-wrap truncate ">
                {product.name} zxczxcz asdzsad sdasd sdas sdsa sdas sadas adas
                adasd asdas
              </p>
            </div>
          </td>
          <td className="col-span-2   flex flex-wrap gap-1 ">
            {" "}
            {product.category.map((item: any, index: number) => (
              <span
                className=" p-1 rounded-md border  border-black "
                key={index}
              >
                {item}
              </span>
            ))}
          </td>
          <td className="col-span-2 justify-evenly items-start   flex flex-col gap-2  font-bold ">
            <span className="flex gap-2 items-center">
              {" "}
              Giá Sp:
              <p className=" font-light italic">{product.price}.đ</p>
            </span>
            <span className="flex gap-2 items-center">
              Số lượng:
              <p className=" font-light italic">{product.quantity}</p>
            </span>
            <span className="flex gap-1  items-center">
              Giảm giá:{" "}
              <p className="bg-red-500 w-max  font-light italic text-white rounded-md  px-1">
                -10%
              </p>
            </span>
          </td>

          <td className="col-span-1  ">
            <p className="p-1 rounded-md border   border-black w-max m-auto">
              Nhân vật
            </p>
          </td>
          <td className="col-span-1  ">
            <p className="p-1 rounded-md border   border-black w-max m-auto">
              Thương hiệu
            </p>
          </td>
          <td className="col-span-1  ">
            <p className="p-1 rounded-md border   border-black w-max m-auto">
              Onpiece
            </p>
          </td>
          <td className="col-span-1 ">
            <p
              className={`inline-flex rounded-lg  border bg-opacity-10 px-2 py-1  font-bold ${
                product.status === 1
                  ? "border-green-500 text-green-500"
                  : "border-red-500 text-red-500"
              }`}
            >
              {product.status === 1 ? "Active" : "Inactive"}
            </p>
          </td>
          <td className="col-span-1 text-wrap ">2022-11-11 : 11:11</td>
          <td className="col-span-1 text-wrap text-green-500">
            2022-11-11 : 11:11
          </td>
          <td className="col-span-1 text-wrap items-center justify-center flex gap-2 ">
            {" "}
            <Link href={`/admin/product/update/${product.id}`}>
              {" "}
              <button>
                <CiEdit size={20} />
              </button>
            </Link>
            <button>
              <MdDeleteOutline color="red" size={20} />
            </button>
            <Link href={`/admin/product/detail/${product.id}`}>
              <button>
                <FaRegEye className="text-green-500" size={20} />
              </button>
            </Link>
          </td>
        </tr>
      ))}
    </div>
  );
}
