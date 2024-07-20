'use client';
import { ICategory, IFilter, IProduct } from "@/interfaces";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import ButtonCreate from "../ButtonCreate";
import NoDataPage from "@/components/Pagination/NoDataPage";
import SlideProductAdmin from "../Slide/SlideProductAdmin";
import { FaRegEye } from "react-icons/fa";
import { addDotToNumber } from "@/helpers/addDotToNumber";
import { useRouter } from "next/navigation";
import RootPagination from "@/components/Pagination/RootPagination";

export interface IListProductProps {
    products: IProduct[]
    query: any
    total: number
    searchParams: any
}
export default function ListProduct(props: IListProductProps) {
    const { products, query, total, searchParams } = props
    const router = useRouter();
    useEffect(() => {
        router.refresh()
    }, [])
    // const totalPage = 
    const [idsRemove, setIdsRemove] = useState<any>([]);
    const formatDateTime = (dateTime: any) => {
        return moment(dateTime).format("DD/MM/YYYY HH:mm:ss A");
    };

    const handleDelete = async (id: any) => {
        const confirm = window.confirm("Bạn có muốn xóa");
        if (confirm == false) {
            return;
        }
        const res = await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
        );
        if (res.status == 200) {
            toast.success("Xóa thành công");
            router.refresh();
        }
    };
    const deleteMultipleRows = async (ids: any) => {
        try {
            const comfirm = window.confirm("Bạn có muốn xóa những danh mục đã chọn");
            if (comfirm == false) {
                return;
            }
            await axios
                .delete(
                    `${process.env.NEXT_PUBLIC_API_URL
                    }/products/multiple?ids=${ids.toString()}`
                )
                .then((res) => {
                    toast.success("Xóa thành công");
                    setIdsRemove([]);
                    router.refresh();
                });

        } catch (error) {
            console.error("Error deleting rows:", error);
        }
    };

    const onClickCheckbox = (event: any) => {
        let checked = event.target.checked;
        let value = event.target.value;
        if (checked) {
            setIdsRemove([...idsRemove, Number(value)]);
        } else {
            let index = idsRemove.indexOf(value);
            const temp = [...idsRemove];
            temp.splice(index, 1);
            setIdsRemove(temp);
        }
    };
    const [queryState, setQueryState] = useState<string>('1')
    const onSelectAll = (event: any) => {
        let checked = event.target.checked;
        if (checked) {
            const temp = products.map((item: IProduct) => item?.product_id);
            setIdsRemove(temp);
        } else {
            setIdsRemove([]);
        }
    };
    return (
        <div className="rounded-sm text-xs text-wrap border py-2 w-full text-center ">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <ButtonCreate
                IdsRemove={idsRemove}
                deleteMultipleRows={deleteMultipleRows}
                title="Danh Sách Sản Phẩm"
                urlLink="/admin/product/create"
            />
            {products.length == 0 || products == null ? <NoDataPage /> : <div className="p-4">
                <ul className="grid grid-cols-16 text-sm items-center  w-full text-center py-2 font-medium  ">
                    <li className="col-span-5 flex gap-2   items-center">
                        <input onChange={onSelectAll} type="checkbox" name="" id="" />
                        Tên Sản Phẩm
                    </li>

                    <li className="col-span-2  ">Thể Loại</li>
                    <li className="col-span-2 ">Thông Tin</li>

                    <li className="col-span-1 ">Nhân Vật</li>
                    <li className="col-span-1 ">Thương Hiệu</li>
                    <li className="col-span-1 ">Seri</li>

                    <li className="col-span-1 ">
                        <select onChange={(e) => setQueryState(e.target.value)} className="outline-none m-auto border  py-1 rounded-md border-gray-400">
                            <option value="">Trạng Thái</option>
                            <option value={"1"}>Active</option>
                            <option value={"0"}>InActive</option>
                        </select>
                    </li>
                    <li className="col-span-1 ">Ngày Tạo</li>
                    <li className="col-span-1 ">Ngày Cập Nhật </li>
                    <li className="col-span-1 ">Action</li>
                </ul>

                {products.map((product: IProduct, key: number) => (
                    <ul
                        className="grid grid-cols-16 gap-2 font-medium items-center border-t text-sm border-gray-400 py-2 "
                        key={key}
                    >
                        <li className="col-span-5 flex gap-4    items-center">
                            <input
                                type="checkbox"
                                checked={idsRemove.includes(product?.product_id) ? true : false}
                                value={product?.product_id}
                                onChange={(e) => onClickCheckbox(e)}
                                name=""
                                id=""
                            />
                            <div className="flex gap-8 items-center">
                                <SlideProductAdmin data={product?.images} />
                                <p className=" text-start text-wrap truncate ">
                                    {product.name}
                                </p>
                            </div>
                        </li>
                        <li className="col-span-2   flex flex-wrap gap-1 ">
                            {" "}
                            {product?.categories.map((item: ICategory, index: number) => (
                                <p
                                    className=" p-1 rounded-md border w-full truncate max-w-max border-black "
                                    key={index}
                                >
                                    {item.name}
                                </p>
                            ))}
                        </li>
                        <li className="col-span-2 justify-evenly items-start   flex flex-col gap-2  font-bold ">
                            <span className="flex gap-2 items-center">
                                {" "}
                                Giá Sp:
                                <p className=" font-light italic">{addDotToNumber(product.price)}.đ</p>
                            </span>
                            <span className="flex gap-2 items-center">
                                Số lượng:
                                <p className=" font-light italic">{product.quantity}</p>
                            </span>
                            <span className="flex gap-1  items-center">
                                Giảm giá:{" "}
                                <p className="bg-red-500 w-max  font-light italic text-white rounded-md  px-1">
                                    {product.discount === null ? `0%` : `${product.discount}%`}
                                </p>
                            </span>
                        </li>

                        <li className="col-span-1  ">
                            <p className="p-1 rounded-md border w-full truncate   border-black max-w-max m-auto">
                                {product?.character?.name}
                            </p>
                        </li>
                        <li className="col-span-1  ">
                            <p className="p-1 rounded-md border w-full truncate   border-black max-w-max m-auto">
                                {product?.brand?.name}
                            </p>
                        </li>
                        <li className="col-span-1  ">
                            <p className="p-1 rounded-md border w-full truncate  border-black max-w-max m-auto">
                                {product?.series?.name}
                            </p>
                        </li>
                        <li className="col-span-1 ">
                            <p
                                className={`inline-flex rounded-lg  border bg-opacity-10 px-2 py-1  font-bold ${product.status === 1
                                    ? "border-green-500 text-green-500"
                                    : "border-red-500 text-red-500"
                                    }`}
                            >
                                {product.status === 1 ? "Active" : "Inactive"}
                            </p>
                        </li>
                        <li className="col-span-1 text-wrap ">{formatDateTime(product?.created_at)}</li>
                        <li className="col-span-1 text-wrap text-green-500">
                            {formatDateTime(product?.updated_at)}
                        </li>
                        <li className="col-span-1 text-wrap items-center justify-center flex gap-2 ">
                            {" "}
                            <Link href={`/admin/product/update/${product?.product_id}`}>
                                {" "}
                                <button>
                                    <CiEdit size={20} />
                                </button>
                            </Link>
                            <button onClick={() => handleDelete(product?.product_id)}>
                                <MdDeleteOutline color="red" size={20} />
                            </button>
                            <Link href={`/admin/product/view/${product?.product_id}`}>
                                <button>
                                    <FaRegEye className="text-green-500" size={20} />
                                </button>
                            </Link>
                        </li>
                    </ul>
                ))}
                <RootPagination
                    total={total}
                    page={query.page ? query.page : 1}
                    query={query.search ? query.search : ""}
                    limit={query.limit ? query.limit : 10}
                />
            </div>}

        </div>
    );
}
