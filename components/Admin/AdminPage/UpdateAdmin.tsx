"use client";
import Link from "next/link";
import * as React from "react";
import { HiPhoto } from "react-icons/hi2";
import { useState, useEffect } from "react"
import { getUserById } from "@/api/user";
import { IUser } from "@/interfaces";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export interface IUpdateAdminProps {

    data: IUser,
    setTabId: (value: number) => void
    getUser: () => void

}

export default function UpdateAdmin(props: IUpdateAdminProps) {
    const { setTabId, data,getUser } = props
    const [image, setImage] = useState<any>(null);
    const [imagePreview, setImagePreview] = useState<any>(process.env.NEXT_PUBLIC_BASE_URL + "/" + data?.avatar)



    const [formUpdate, setFormUpdate] = useState({
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        avatar: "",
        address: data?.address,
    })



    const handeChangeData = (e: any) => {
        const { name, value } = e.target;
        setFormUpdate((old: any) => {
            return {
                ...old,
                [name]: value,

            };
        });
    }


    const handleUpdate = async () => {
        const formData = new FormData();
        formData.append("name", formUpdate.name);
        formData.append("email", formUpdate.email);
        formData.append("phone", formUpdate.phone);
        formData.append("address", formUpdate.address);
        if (image) {
            formData.append("avatar", image);
        }
        await axios.patch(`http://localhost:8080/api/v1/users/${data?.user_id}`,
            formData,
        ).then((res) => {
            setTabId(0)
            getUser()
            toast.success('Cập nhật thành công')
        }).catch((e) => {
            toast.error(e.response.data.message)
        })
    }

    return (
        <div className="mx-auto max-w-270">

            <div className="grid grid-cols-5 gap-4">
                <div
                    className="border-b col-span-5 border-stroke
         "
                >
                    <h3 className="font-medium  ">Cập Nhật Thông Tin</h3>
                </div>
                <nav className="grid col-span-3 bg-white rounded-md gap-4 p-7">
                    <p className="text-black">{"sad"}</p>
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
                                value={formUpdate?.name}
                                onChange={handeChangeData}
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
                                value={formUpdate?.phone}
                                onChange={handeChangeData}
                                placeholder="SĐT..."

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
                                value={formUpdate?.email}
                                onChange={handeChangeData}

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
                            value={formUpdate?.address}
                            onChange={handeChangeData}
                            placeholder="Địa chỉ..."

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
                                            setImage(e.target.files![0])
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
                <button onClick={() => setTabId(0)} className="text-sm w-[100px] hover:bg-red-500 hover:text-white hover:border-red-500 border px-3 py-2 rounded-md border-black font-semibold leading-6 text-gray-900">
                    Quay Lại
                </button>
                <button onClick={handleUpdate} className="rounded-md bg-indigo-600 px-3 w-[100px] py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ">
                    Lưu
                </button>
            </div>
        </div>
    );
}