"use client";
import axios from "axios";
import {  useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { IProduct } from "@/interfaces";
import ButtonChangeActive from "@/components/Pagination/ButtonChangeActive";
import { useRouter } from "next/navigation";

export interface IFormUpdate {
    data: IProduct
}

export default function FormUpdateProduct(props: IFormUpdate) {
    const { data } = props
    const [images, setImages] = useState<File[]>([]);
    const [status, setStatus] = useState(1)
    const [imagePreview, setImagePreview] = useState<string[]>(data?.images);
    // const [imageUploads, setImageUploads] = useState([]);
    const [dataProduct, setDataProduct] = useState<any>({
        name: data?.name,
        price: data?.price,
        description: data?.description,
        quantity: data?.quantity,
        discount: data?.discount,
        characteristics: data?.characteristics,
    });
    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            //convert `FileList` to `File[]`
            const _files = Array.from(e.target.files);
            setImages(_files);
        }
       
        
    };
    // console.log("images--->", images.length);
    // useEffect(() => { setDataProduct(data), setImagePreview(data.images) }, [])

    const handleOnchange = (e: any) => {
        const { name, value } = e.target;
        setDataProduct({
            ...dataProduct,
            [name]: value,
        });
    };
    const router = useRouter();
    const handleUpdateProduct = async () => {
        const formData = new FormData();
        formData.append("name", dataProduct.name);
        formData.append("price", dataProduct.price.toString());
        formData.append("description", dataProduct.description);
        formData.append("quantity", dataProduct.quantity.toString());
        formData.append("discount", dataProduct.discount.toString());
        formData.append("characteristics", dataProduct.characteristics);
       if (images.length > 0) {
        for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i]);
        }
       }
        await axios
            .patch(`${process.env.NEXT_PUBLIC_API_URL}/products/${data?.product_id}`, formData)
            .then((res) => {
                toast.success("Cập nhật sản phẩm thành công");
                router.back();
                
            })
            .catch((e) => {
                toast.error(e.response.data.message);
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
                        defaultValue={data?.name}
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
                            className={`px-10 p-2 text-end w-max bg-red-500 rounded-xl col-span-3 justify-self-end  text-white font-bold ${images.length === 0 && "hidden"
                                }`}
                        >
                            X
                        </button>
                        {(images.length > 0 ? images : imagePreview).map((image: any , index: number) => {
                            const src = images.length > 0 ? URL.createObjectURL(image) : `${process.env.NEXT_PUBLIC_BASE_URL}/${image}`;
                            return (
                                <div key={index} className=" relative col-span-1 h-[200px] ">
                                    <img
                                        className="object-cover h-full w-full rounded-md"
                                        src={src}
                                        alt=""
                                    />
                                    <button
                                        className={`absolute -top-2 -right-2  text-white bg-red-600 p-2 px-4 rounded-xl ${images.length === 0 && "hidden"}`}
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
                        name="description"
                        onChange={(e) => handleOnchange(e)}
                        defaultValue={data?.description}
                        id=""
                        className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset h-[100px] ring-gray-300 focus:ring-[#26b9fe] outline-none placeholder:text-gray-400 "
                    />
                </div>
                <div className="col-span-1  ">
                    <label
                        htmlFor="characteristics"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Mô Tả
                    </label>
                    <textarea
                        name="characteristics"
                        onChange={(e) => handleOnchange(e)}
                        defaultValue={data?.characteristics}
                        id=""
                        className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset h-[100px] ring-gray-300 focus:ring-[#26b9fe] outline-none placeholder:text-gray-400 "
                    />
                </div>

                <div className="col-span-1">
                    <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Giá Sản Phẩm
                    </label>
                    <input
                        type="text"
                        onChange={(e) => handleOnchange(e)}
                        name="price"
                        id="price"
                        defaultValue={data?.price}
                        className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-[#26b9fe] outline-none ring-gray-300 placeholder:text-gray-400 "
                    />
                </div>
                <div className="col-span-1">
                    <label
                        htmlFor="quantity"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Số Lượng
                    </label>
                    <input
                        type="text"
                        onChange={(e) => handleOnchange(e)}
                        name="quantity"
                        id="quantity"
                        defaultValue={data?.quantity}
                        className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-[#26b9fe] outline-none ring-gray-300 placeholder:text-gray-400 "
                    />
                </div>
                <div className="col-span-1">
                    <label
                        htmlFor="discount"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Giảm Giá
                    </label>
                    <input
                        type="discount"
                        onChange={(e) => handleOnchange(e)}
                        name="discount"
                        defaultValue={data?.discount}
                        id="discount"
                        className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-[#26b9fe] outline-none ring-gray-300 placeholder:text-gray-400 "
                    />
                </div>
              
                <div className="col-span-1">
                    <label
                        htmlFor="status"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Trạng Thái Hoạt Động
                    </label>
                  <ButtonChangeActive status={status} setStatus={setStatus}/>
                </div>
            </div>

            <div className="mt-3 flex items-center justify-center gap-x-6 m-auto">
                <Link href="/admin/product">
                    <button className="text-sm w-[100px] hover:bg-red-500 hover:text-white hover:border-red-500 border px-3 py-2 rounded-md border-black font-semibold leading-6 text-gray-900">
                        Quay Lại
                    </button>
                </Link>
                <button onClick={handleUpdateProduct} className="rounded-md bg-indigo-600 px-3 w-[100px] py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ">
                    Lưu Sp
                </button>
            </div>
        </main>
    );
}
