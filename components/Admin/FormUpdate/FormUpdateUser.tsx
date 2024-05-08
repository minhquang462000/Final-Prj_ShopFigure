"use client";
import { IUser } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { HiPhoto } from "react-icons/hi2";
import Select from "react-select"
import makeAnimated from "react-select/animated"
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import ButtonChangeActive from "@/components/Pagination/ButtonChangeActive";

export interface IpageProps {
    data: IUser
}

export default function FormUpdateUser(props: IpageProps) {
    const { data } = props
    const router = useRouter()
    const [formUpdate, setFormUpdate] = useState({
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        avatar: "",
        address: data?.address,
        gender: data?.gender,
    })


    useEffect(() => {
        setFormUpdate(data)
        setImage(process.env.NEXT_PUBLIC_BASE_URL + "/" + data?.avatar);
    }, [])

    const handeChangeData = (e: any) => {
        const { name, value } = e.target;
        setFormUpdate((old: any) => {
            return {
                ...old,
                [name]: value,

            };
        });
    }

    const [image, setImage] = useState<any>("");
    const [avatar, setAvatar] = useState<any>(null);
    const [status, setStatus] = useState<any>(data?.status);

    const animatedComponents = makeAnimated();
    const handleUpdate = async () => {
        const formData = new FormData();
        formData.append("name", formUpdate.name);
        formData.append("email", formUpdate.email);
        formData.append("phone", formUpdate.phone);
        formData.append("address", formUpdate.address);
        formData.append("gender", formUpdate.gender.toString());
        formData.append("status", status.toString());
        if (avatar) {
            formData.append("avatar", avatar);
        }
        await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/users/${data?.user_id}`,
            formData,
        ).then((res) => {
            if (data?.role === 0) {
                router.push(`/admin/accountAdmin/${data?.user_id}`)
            } else {
                router.push(`/admin/users`)
            }
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
                                placeholder="SĐT..."
                                value={formUpdate?.phone}
                                onChange={handeChangeData}
                            />
                        </div>
                    </div>
                    <div className="">
                        <label className="mb-3 block text-sm font-medium " htmlFor="phone">
                            Giới tính
                        </label>
                        <select onChange={handeChangeData} defaultValue={data?.gender} className="w-[300px] rounded-md outline-none bg-transparent border ring-1 focus:ring-[#26b9fe] p-2" name="gender" id="">
                            <option value="">Gioi tinh</option>
                            <option value="1">Nam</option>
                            <option value="0">Nu</option>
                        </select>
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
                            placeholder="Địa chỉ..."
                            value={formUpdate?.address}
                            onChange={handeChangeData}
                        />
                    </div>
                    {data?.role === 0 ? <p className="p-3 py-1 m-auto font-medium border border-red-500 w-max rounded-lg">Admin</p> : <div className={`col-span-1 w-[300px]`}>
                        <label
                            htmlFor="status"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Trạng Thái Hoạt Động
                        </label>

                        <ButtonChangeActive status={status} setStatus={setStatus} />

                    </div>}

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
                                        onChange={(e) => {
                                            setImage(URL.createObjectURL(e.target.files![0]))
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
                <Link href={data?.role === 1 ? "/admin/users" : `/admin/accountAdmin/${data?.user_id}`}>
                    <button className="text-sm w-[100px] hover:bg-red-500 hover:text-white hover:border-red-500 border px-3 py-2 rounded-md border-black font-semibold leading-6 text-gray-900">
                        Quay Lại
                    </button>
                </Link>
                <button onClick={handleUpdate} className="rounded-md bg-indigo-600 px-3 w-[100px] py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ">
                    Lưu
                </button>
            </div>
        </div>
    );
}
