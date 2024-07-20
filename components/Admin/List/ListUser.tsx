'use client';
import ButtonCreate from "@/components/Admin/ButtonCreate";
import NoDataPage from "@/components/Pagination/NoDataPage";
import RootPagination from "@/components/Pagination/RootPagination";
import { IUser } from "@/interfaces";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
export interface ListCharacterProps {
    users: IUser[]
    query: any
    total: number
    searchParams: any
}

export default function ListUsers(props: ListCharacterProps) {
    const router = useRouter();
    const { users, query, total, searchParams } = props
    const [idsRemove, setIdsRemove] = useState<any>([]);
    useEffect(() => {router.refresh()}, []);


    const formatDateTime = (dateTime: any) => {
        return moment(dateTime).format("DD/MM/YYYY HH:mm:ss A");
    };

    const handleDelete = async (id: any) => {
        const confirm = window.confirm("Bạn có muốn xóa");
        if (confirm == false) {
            return;
        }
        const res = await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`
        );
        if (res.status == 200) {
            toast.success("Xóa thành công");
            router.refresh();
        }
    };
    const deleteMultipleRows = async (ids: any) => {
        try {
            const comfirm = window.confirm(
                "Bạn có muốn xóa những nhân vật đã chọn"
            );
            if (comfirm == false) {
                return;
            }
            await axios
                .delete(
                    `${process.env.NEXT_PUBLIC_API_URL
                    }/users/multiple?ids=${ids.toString()}`
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
    const onSelectAll = (event: any) => {
        let checked = event.target.checked;
        if (checked) {
            const temp = users.map((item: IUser) => item?.user_id);
            setIdsRemove(temp);
        } else {
            setIdsRemove([]);
        }
    };
    const [queryState, setQueryState] = useState<string>('1')
    useEffect(() => {
        if (queryState === '1') {
            router.push('?status=1')
        } else if (queryState === '0') {
            router.push('?status=0')
        }
    }, [queryState])
    return (
        <div className="rounded-sm border border-stroke bg-white text-sm ">
            <ButtonCreate deleteMultipleRows={deleteMultipleRows}
                IdsRemove={idsRemove} title="Danh Sách Người Dùng" urlLink="/admin/users/create" />

            {users.length === 0 || users == null ? <NoDataPage /> : <div>
                <ul className="grid grid-cols-14 w-full text-center gap-5  items-center p-4  border-gray-400  font-medium  ">
                    <li className="col-span-3 flex items-center gap-2  text-start">
                        <input onChange={onSelectAll} type="checkbox" name="" id="" />  Tài Khoản
                    </li>
                    <li className="col-span-2 text-start">Email</li>
                    <li className="col-span-2 text-start  ">Địa Chỉ</li>
                    <li className="col-span-2 ">
                        <select onChange={(e) => setQueryState(e.target.value)} className="outline-none m-auto border  px-2 p-1 rounded-md border-gray-400">
                            <option value="">Trạng Thái</option>
                            <option value={"1"}>Active</option>
                            <option value={"0"}>InActive</option>
                        </select>

                    </li>
                    <li className="col-span-1 ">Giới Tính</li>
                    <li className="col-span-1 ">Số ĐT</li>
                    <li className="col-span-1 ">Ngày Tạo</li>
                    <li className="col-span-1 ">Ngày Cập Nhật </li>
                    <li className="col-span-1  ">Action</li>
                </ul>
                {users.map((user: IUser, key: number) => (
                    <ul
                        className="grid grid-cols-14 gap-3 text-center  p-4 font-medium items-center border-t border-gray-400 py-2 "
                        key={key}
                    >
                        <li className="col-span-3 text-start gap-2 text-base flex items-center ">
                            <input
                                type="checkbox"
                                checked={idsRemove.includes(user?.user_id) ? true : false}
                                value={user?.user_id}
                                onChange={(e) => onClickCheckbox(e)}
                                name=""
                                id=""
                            />
                            <div className="flex items-center gap-2 ">
                                <img
                                    src={process.env.NEXT_PUBLIC_BASE_URL + "/" + user?.avatar}
                                    alt="Brand"
                                    className=" w-[50px] h-[50px] border border-black rounded-full   object-cover"
                                />
                                <p className=" col-span-2 w-[200px] truncate ">
                                    {user?.name}
                                </p>
                            </div>
                        </li>
                        <li className="col-span-2 text-start  truncate">{user?.email}</li>
                        <li className="col-span-2 text-start truncate">
                            {user.address}
                        </li>
                        <li className="col-span-2 ">
                            <p
                                className={`inline-flex rounded-lg  border bg-opacity-10 px-2 py-1 text-sm font-bold ${user.status === 1
                                    ? "border-green-500 text-green-500"
                                    : "border-red-500 text-red-500"
                                    }`}
                            >
                                {user.status === 1 ? "Active" : "Inactive"}
                            </p>
                        </li>
                        <li className="col-span-1">{user?.gender === 1 ? "Nam" : "Nữ"}</li>
                        <li className="col-span-1 underline">{user.phone}</li>
                        <li className="col-span-1 underline text-wrap ">
                            {formatDateTime(user.created_at)}
                        </li>
                        <li className="col-span-1 underline text-green-500 text-wrap ">
                            {formatDateTime(user.updated_at)}
                        </li>
                        <li className="flex items-center justify-evenly px-2 col-span-1">
                            <Link href={`/admin/users/update/${user.user_id}`}>
                                <button>
                                    <CiEdit size={25} />
                                </button>
                            </Link>
                            <button onClick={() => handleDelete(user.user_id)}>
                                <MdDeleteOutline color="red" size={25} />
                            </button>
                        </li>
                    </ul>
                ))}
                <RootPagination
                    total={total}
                    query={query.search ? query.search : ""}
                    page={query.page ? query.page : 1}
                    limit={query.limit ? query.limit : 10}
                />
            </div>}

        </div>
    );
};


