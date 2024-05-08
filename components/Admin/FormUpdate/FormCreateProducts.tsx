"use client";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useEffect, useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { IBrand, ICategory, ICharacter, ISeries } from "@/interfaces";
import { useRouter } from "next/navigation";

export interface IpageProps {
  categories: ICategory[]
  brands: IBrand[]
  characters: ICharacter[]
  series: ISeries[]
}

export default function FormCreateProducts(props: IpageProps) {
  const { categories, brands, characters, series } = props
  const [images, setImages] = useState<File[]>([]);
  // const [imageUploads, setImageUploads] = useState([]);
  const [dataProduct, setDataProduct] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    discount: 0,
    brand: "",
    character: "",
    series: "",
    categories: [],
    characteristics: "",
  });
  // console.log("dataProduct------>", dataProduct);
  
  // const [test, setTest] = useState();
  // console.log("test------>", test);
  const [selectedCategory, setSelectedCategory] = useState<any[]>([]);
const handleSelectCategory =(e: any) => {
  // console.log("test--e------>", e);
  let value = e.map((item: any) => item.value)
   setSelectedCategory(value);
}
  
// console.log("test------>", selectedOptions);

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //convert `FileList` to `File[]`
      const _files = Array.from(e.target.files);
      setImages(_files);
    }
  };

  const animatedComponents = makeAnimated();
  const handleOnchange = (e: any) => {
    const { name, value } = e.target;
    setDataProduct({
      ...dataProduct,
      [name]: value,
    });
  };
  const router= useRouter()
  const handleCreateProduct = async () => {
    if (images.length === 0 || dataProduct.name  === "" || dataProduct.price ==="" || dataProduct.description ==="" || dataProduct.quantity ==="" || dataProduct.brand  ===""|| dataProduct.character  ===""|| dataProduct.series ==="") {
      toast.error("Vui lòng điền đầy đủ thông tin");
      // console.log("quantity--->", dataProduct.quantity);
      // console.log("discount--->", dataProduct.discount);
      
      
      return
      
    }
    const formData = new FormData();
    formData.append("name", dataProduct.name);
    formData.append("price", dataProduct.price.toString());
    formData.append("description", dataProduct.description);
    formData.append("quantity", dataProduct.quantity);
    formData.append("discount", dataProduct.discount.toString());
    formData.append("brand", dataProduct.brand);
    formData.append("character", dataProduct.character);
    formData.append("series", dataProduct.series);
   formData.append('categories', selectedCategory.join(','));
    formData.append("characteristics", dataProduct.characteristics);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/products`, formData)
      .then((res) => {
        toast.success("Thêm sản phẩm thành công");
        router.push("/admin/product");
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };
  return (
    <main className=" h-screen p-4 px-5 overflow-y-auto">
      <ToastContainer />
      <h2 className="text-2xl mb-5 font-semibold leading-7 text-gray-900">
        Thêm Mới Sản Phẩm
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
            onChange={handleOnchange}
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
            {images.map((image: File, index: number) => {
              const src = URL.createObjectURL(image);
              return (
                <div key={index} className=" relative col-span-1 h-[200px] ">
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
           itemID="description"
           name="description"
           onChange={handleOnchange}
           id="description"
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset h-[100px] ring-gray-300 focus:ring-[#26b9fe] outline-none placeholder:text-gray-400 "
          />
        </div>
        <div className="col-span-1  ">
          <label
            htmlFor="characteristics"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Đặc điểm
          </label>
          <textarea
            name="characteristics"
           onChange={handleOnchange}
            itemID="characteristics"
            id="characteristics"
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
            onChange={handleOnchange}
            name="price"
            id="address"
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
            onChange={handleOnchange}
            name="quantity"
            id="quantity"
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
            type="text"
            onChange={handleOnchange}
            name="discount"
            id="discount"
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
            placeholder="Danh Mục..."
            options={categories}
     
            onChange={(e: any) => handleSelectCategory(e)}
          />
        </div>
        <div></div>
        <div className="col-span-1">
          <label
            htmlFor="character"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nhân Vật
          </label>
          <Select
            closeMenuOnSelect={true}
            name="series"
            components={animatedComponents}
            placeholder="Nhân Vật..."
            options={characters}
            onChange={(e: any) => setDataProduct({ ...dataProduct, character: e.value })}
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
            name="series"
            placeholder="Thương Hiệu..."
            components={animatedComponents}
            options={brands}
           onChange={(e: any) => setDataProduct({ ...dataProduct, brand: e.value })}
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
            placeholder="Series..."
            components={animatedComponents}
            options={series}
          onChange={(e: any) => setDataProduct({ ...dataProduct, series: e.value })}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-x-6 m-auto">
        <Link href="/admin/product">
          <button className="text-sm w-[100px] hover:bg-red-500 hover:text-white hover:border-red-500 border px-3 py-2 rounded-md border-black font-semibold leading-6 text-gray-900">
            Quay Lại
          </button>
        </Link>
        <button onClick={handleCreateProduct} className="rounded-md bg-indigo-600 px-3 w-[100px] py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ">
          Lưu Sp
        </button>
      </div>
    </main>
  );
}
