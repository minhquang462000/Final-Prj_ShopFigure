import ButtonCreate from "@/components/Admin/ButtonCreate";
import Image from "next/image";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white text-sm ">
      <ButtonCreate title="Danh Sách Danh Mục" urlLink="/admin/category/create"/>
      <th className="grid grid-cols-10 w-full text-center gap-5  p-4  border-gray-400  font-medium  ">
        <td className="col-span-2 flex items-center gap-2  text-start">
          {" "}
          <input type="checkbox" name="" id="" /> Tên Danh Mục
        </td>
        <td className="col-span-2 text-start">Mô Tả</td>
        <td className="col-span-2 text-center  ">Ảnh Bìa</td>
        <td className="col-span-1 ">Trạng Thái</td>
        <td className="col-span-1 ">Ngày Tạo</td>
        <td className="col-span-1 ">Ngày Cập Nhật </td>
        <td className="col-span-1  ">Action</td>
      </th>
      <tr
        className="grid grid-cols-10 gap-3 text-center  gap-5 p-4 font-medium items-center border-t border-gray-400 py-2 "
        // key={key}
      >
        <td className="col-span-2 text-start gap-2 text-base flex items-center ">
          <input type="checkbox" name="" id="" />
          Truyện Tranh
        </td>
        <td className="col-span-2 text-start  text-sm font-light">
          Mô tả abc abc bacb acb acb acb ac acb a c bbbc abc ac acb acb acb acb
          acb acb{" "}
        </td>
        <td className="col-span-2 m-auto w-[200px] h-[100px] overflow-hidden ">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIAFqLjp6i0fT5KXWyQuG0hs-9ah-Au18rFx97gxfyQ&s"
            }
            alt="thumbnail"
            className=" w-full h-full  object-cover"
          />
        </td>
        <td className="col-span-1 ">
          {/* <p
            className={`inline-flex rounded-lg  border bg-opacity-10 px-2 py-1 text-sm font-bold ${
              packageItem.status === 1
                ? "border-green-500 text-green-500"
                : "border-red-500 text-red-500"
            }`}
          >
            {packageItem.status === 1 ? "Active" : "Inactive"}
          </p> */}
          <p className="border border-green-500 text-green-500 px-2 py-1">
            Active
          </p>
        </td>
        <td className="col-span-1 underline text-wrap ">2022-11-11 : 11:11</td>
        <td className="col-span-1 underline text-green-500 text-wrap ">
          2022-11-11 : 11:11
        </td>
        <td className="flex items-center justify-evenly px-2 col-span-1">
          <Link href={`/admin/users/update`}>
            <button>
              <CiEdit size={25} />
            </button>
          </Link>
          <button>
            <MdDeleteOutline color="red" size={25} />
          </button>
        </td>
      </tr>
    </div>
  );
};

export default TableThree;
