'use client';
import { getAllCharacter } from "@/api/character";
import ButtonCreate from "@/components/Admin/ButtonCreate";
import NoDataPage from "@/components/Pagination/NoDataPage";
import RootPagination from "@/components/Pagination/RootPagination";
import { ICharacter, IFilter } from "@/interfaces";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

export default function page() {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [idsRemove, setIdsRemove] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const formatDateTime = (dateTime: any) => {
    return moment(dateTime).format("DD/MM/YYYY HH:mm:ss A");
  };
  const fetchCharacters = async () => {
    const query = { page: page, limit: limit, search: search };
    const res = await getAllCharacter(query as IFilter);
    setDataCharacters(res.data);
    setData(res);
  };
  useEffect(() => {
    fetchCharacters();
  }, [page, limit]);
  const handleDelete = async (id: any) => {
    const confirm = window.confirm("Bạn có muốn xóa");
    if (confirm == false) {
      return;
    }
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/characters/${id}`
    );
    if (res.status == 200) {
      toast.success("Xóa thành công");
      fetchCharacters();
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
          }/characters/multiple?ids=${ids.toString()}`
        )
        .then((res) => {
          toast.success("Xóa thành công");
          setIdsRemove([]);
          fetchCharacters();
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
      const temp = dataCharacters.map((item: ICharacter) => item?.character_id);
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
        title="Danh Sách Nhân Vật"
        urlLink="/admin/character/create"
      />
      {dataCharacters.length == 0 ? (
        <NoDataPage />
      ) : (
        <div>
          <th className="grid grid-cols-10 w-full text-center gap-5  p-4  border-gray-400  font-medium  ">
            <td className="col-span-2 flex items-center gap-2  text-start">
              {" "}
              <input onChange={onSelectAll} type="checkbox" name="" id="" /> Tên Nhân Vật
            </td>
            <td className="col-span-2 text-start">Mô Tả</td>
            <td className="col-span-2 text-center  ">Ảnh Bìa</td>
            <td className="col-span-1 ">Trạng Thái</td>
            <td className="col-span-1 ">Ngày Tạo</td>
            <td className="col-span-1 ">Ngày Cập Nhật </td>
            <td className="col-span-1  ">Action</td>
          </th>
          {dataCharacters.map((character: ICharacter, key: number) => (
            <tr
              className="grid grid-cols-10 gap-3 text-center  gap-5 p-4 font-medium items-center border-t border-gray-400 py-2 "
              key={key}
            >
              <td className="col-span-2 text-start gap-2 text-base flex items-center ">
              <input
                  type="checkbox"
                  checked={idsRemove.includes(character?.character_id) ? true : false}
                  value={character?.character_id}
                  onChange={(e) => onClickCheckbox(e)}
                  name=""
                  id=""
                />
                {character?.name}
              </td>
              <td className="col-span-2 text-start  text-sm font-light">
                {character?.description}
              </td>
              <td className="col-span-2 m-auto w-[200px] h-[100px] overflow-hidden ">
                <img
                   src={
                    process.env.NEXT_PUBLIC_BASE_URL + "/" + character?.thumbnail
                  }
                  alt="thumbnail"
                  className=" w-full h-full  object-cover"
                />
              </td>
              <td className="col-span-1 ">
                <p
                  className={`inline-flex rounded-lg  border bg-opacity-10 px-2 py-1 text-sm font-bold ${
                    character?.status === 1
                      ? "border-green-500 text-green-500"
                      : "border-red-500 text-red-500"
                  }`}
                >
                  {character?.status === 1 ? "Active" : "Inactive"}
                </p>
              </td>
              <td className="col-span-1 underline text-wrap ">
                {formatDateTime(character?.created_at)}
              </td>
              <td className="col-span-1 underline text-green-500 text-wrap ">
                {formatDateTime(character?.updated_at)}
              </td>
              <td className="flex items-center justify-evenly px-2 col-span-1">
                <Link
                  href={`/admin/character/update/${character?.character_id}`}
                >
                  <button>
                    <CiEdit size={25} />
                  </button>
                </Link>
                <button onClick={() => handleDelete(character?.character_id)}>
                  <MdDeleteOutline color="red" size={25} />
                </button>
              </td>
            </tr>
          ))}
          <RootPagination
            data={data}
            setPage={setPage}
            page={page}
            limit={limit}
          />
        </div>
      )}
    </div>
  );
}
