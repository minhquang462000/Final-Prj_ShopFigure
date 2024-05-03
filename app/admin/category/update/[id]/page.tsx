"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { getCategoryById } from "@/api/category";
import { useRouter } from "next/navigation";
export interface IpageProps {}

export default function page({ params }: { params: { id: string } }) {
  const [dataCategoryUpdate, setDataCategoryUpdate] = useState<any>({
    name: "",
    description: "",
    thumbnail: "",
    status: 1,
  });

  const fetchCategoriesById = async () => {
    const res = await getCategoryById(Number(params.id));
    setDataCategoryUpdate(res);
    setImage(process.env.NEXT_PUBLIC_BASE_URL + "/" + res?.thumbnail)
  };
  useEffect(() => {
    fetchCategoriesById();
  }, []);

  const [image, setImage] = useState<any>("");
  const [thumbnail, setThumbnail] = useState<any>(null);
  const animatedComponents = makeAnimated();
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataCategoryUpdate({
      ...dataCategoryUpdate,
      [e.target.name]: e.target.value,
    });
  };
  const router = useRouter();
  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("name", dataCategoryUpdate.name);
    formData.append("description", dataCategoryUpdate.description);

    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }
    formData.append("status", dataCategoryUpdate.status);
    await axios
      .patch(
        `${process.env.NEXT_PUBLIC_API_URL}/categories/${params.id}`,
        formData
      )
      .then((res) => {
        router.push("/admin/category");
        toast.success("Cập nhật thành công");
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };
  return (
    <main className=" h-screen p-4 px-5 overflow-y-auto">
      <ToastContainer />
      <h2 className="text-2xl mb-5 font-semibold leading-7 text-gray-900">
        Cập Nhật Danh Mục
      </h2>
      <div className="border-b grid grid-cols-2 gap-4 gap-x-8 border-gray-900/10 ">
        <div className="col-span-1  ">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Tên Danh Mục
          </label>
          <input
            id="name"
            name="name"
            onChange={(e) => handleOnchange(e)}
            defaultValue={dataCategoryUpdate?.name}
            type=""
            autoComplete="name"
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-[#26b9fe] outline-none placeholder:text-gray-400 "
          />
        </div>
        <div className="col-span-1 w-[300px]">
          <label
            htmlFor="status"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Trạng Thái Hoạt Động
          </label>
          <Select
            closeMenuOnSelect={true}
            name="status"
            onChange={(e: any) => handleOnchange(e)}
            defaultValue={{ value: "1", label: "Active" }}
            components={animatedComponents}
            options={[
              { value: "1", label: "Active" },
              { value: "0", label: "InActive" },
            ]}
          />
        </div>
        <div className="col-span-1  ">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Mô tả
          </label>
          <textarea
            defaultValue={dataCategoryUpdate?.description}
            onChange={(e: any) => handleOnchange(e)}
            name="description"
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
                    onChange={(e) => {
                      setImage(URL.createObjectURL(e.target.files![0]));
                      setThumbnail(e.target.files![0]);
                    }}
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
        <Link href="/admin/category">
          <button className="text-sm w-[100px] hover:bg-red-500 hover:text-white hover:border-red-500 border px-3 py-2 rounded-md border-black font-semibold leading-6 text-gray-900">
            Quay Lại
          </button>
        </Link>
        <button
          onClick={handleUpdate}
          className="rounded-md bg-indigo-600 px-3 w-[100px] py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 "
        >
          Lưu
        </button>
      </div>
    </main>
  );
}
