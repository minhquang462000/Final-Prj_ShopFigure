'use client';
import { getAllCharacter } from "@/api/character";
import ButtonCreate from "@/components/Admin/ButtonCreate";
import NoDataPage from "@/components/Pagination/NoDataPage";
import RootPagination from "@/components/Pagination/RootPagination";
import { ICharacter, IFilter, ISeries } from "@/interfaces";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import THeadTableOne from "../THeadTableOne";
import { useRouter } from "next/navigation";


export interface  ListSeriesProps {
    series: ISeries[]
    query: any
    total: number
    searchParams: any
}

export default function ListSeries(props: ListSeriesProps) {
    const {series , query, total , searchParams} = props
   const router = useRouter()
    const [idsRemove, setIdsRemove] = useState<any>([]);
    const [page, setPage] = useState(query.page ? Number(query.page) : 1);
    useEffect(() => {
      router.refresh();
    }, []);
    const formatDateTime = (dateTime: any) => {
      return moment(dateTime).format("DD/MM/YYYY HH:mm:ss A");
    };
  
    const handleDelete = async (id: any) => {
      const confirm = window.confirm("Bạn có muốn xóa");
      if (confirm == false) {
        return;
      }
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/series/${id}`
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
            `${
              process.env.NEXT_PUBLIC_API_URL
            }/series/multiple?ids=${ids.toString()}`
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
        const temp = series.map((item: ISeries) => item?.series_id);
        setIdsRemove(temp);
      } else {
        setIdsRemove([]);
      }
    };
  return (
    <div className="rounded-sm border border-stroke bg-white text-sm ">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      <ButtonCreate
        deleteMultipleRows={deleteMultipleRows}
        IdsRemove={idsRemove}
        title="Danh Sách Series"
        urlLink="/admin/series/create"
      />
      {series.length == 0 || series == null ? (
        <NoDataPage />
      ) : (
        <div>
        <THeadTableOne onSelectAll={onSelectAll} searchParams={searchParams}/>
          {series.map((series: ISeries, key: number) => (
            <ul
              className="grid grid-cols-10  text-center  gap-5 p-4 font-medium items-center border-t border-gray-400 py-2 "
              key={key}
            >
              <li className="col-span-1 text-start gap-2 text-base flex items-center ">
              <input
              type="checkbox"
              checked={
                idsRemove.includes(series?.series_id) ? true : false
              }
              value={series?.series_id}
              onChange={(e) => onClickCheckbox(e)}
              name=""
              id=""
            />
                {series?.name}
              </li>
              <li className="col-span-3 text-wrap max-h-[100px] overflow-hidden line-clamp-5 truncate text-start  text-sm font-light">
                {series?.description}
              </li>
              <li className="col-span-2 m-auto w-[200px] h-[100px] overflow-hidden ">
                <img
                  src={
                    process.env.NEXT_PUBLIC_BASE_URL + "/" + series?.thumbnail
                  }
                  alt="thumbnail"
                  className=" w-full h-full  object-cover"
                />
              </li>
              <li className="col-span-1 ">
                <p
                  className={`inline-flex rounded-lg  border bg-opacity-10 px-2 py-1 text-sm font-bold ${
                    series?.status === 1
                      ? "border-green-500 text-green-500"
                      : "border-red-500 text-red-500"
                  }`}
                >
                  {series?.status === 1 ? "Active" : "Inactive"}
                </p>
              </li>
              <li className="col-span-1 underline text-wrap ">
                {formatDateTime(series?.created_at)}
              </li>
              <li className="col-span-1 underline text-green-500 text-wrap ">
                {formatDateTime(series?.updated_at)}
              </li>
              <li className="flex items-center justify-evenly px-2 col-span-1">
                <Link href={`/admin/series/update/${series?.series_id}`}>
                  <button>
                    <CiEdit size={25} />
                  </button>
                </Link>
                <button onClick={() => handleDelete(series?.series_id)}>
                  <MdDeleteOutline color="red" size={25} />
                </button>
              </li>
            </ul>
          ))}
          <RootPagination
           total={total}
            setPage={setPage}
            page={query.page ? query.page : 1}
            limit={query.limit ? query.limit : 10}
          />
        </div>
      )}
    </div>
  );
}
