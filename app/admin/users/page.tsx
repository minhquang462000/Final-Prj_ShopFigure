import Image from "next/image";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const packageData: any = [
  {
    name: "Free package",
    price: 0.0,
    address: `ThuyDuyen-ThaiThuy-ThaiBinh HaNoi SaiGon`,
    status: 1,
    logo: "https://tse3.mm.bing.net/th?id=OIP.G9WoQEGv01moqs8jc2lB2gHaLg&pid=Api&P=0&h=220",
  },
  {
    logo: "https://tse3.mm.bing.net/th?id=OIP.G9WoQEGv01moqs8jc2lB2gHaLg&pid=Api&P=0&h=220",
    name: "Standard Package",
    price: 59.0,
    address: `ThuyDuyen-ThaiThuy-ThaiBinh HaNoi SaiGon`,
    status: 0,
  },
  {
    logo: "https://tse3.mm.bing.net/th?id=OIP.G9WoQEGv01moqs8jc2lB2gHaLg&pid=Api&P=0&h=220",
    name: "Business Package",
    price: 99.0,
    address: `ThuyDuyen-ThaiThuy-ThaiBinh HaNoi SaiGon`,
    status: 0,
  },
  {
    logo: "https://tse3.mm.bing.net/th?id=OIP.G9WoQEGv01moqs8jc2lB2gHaLg&pid=Api&P=0&h=220",
    name: "Standard Package",
    price: 59.0,
    address: `ThuyDuyen-ThaiThuy-ThaiBinh HaNoi SaiGon`,
    status: 1,
  },
];

const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white text-sm ">
      <div className="p-4 flex justify-between font-medium items-center w-full ">
        <h1 className="text-xl  underline">Danh sách người dùng</h1>
        <Link href={"/admin/users/create"}>
          <button className="w-max flex items-center    gap-2 border-gray-600 hover:text-white transition-all duration-300 hover:border-red-500 hover:bg-red-500  rounded-xl p-2 border   ">
            <FaPlus />
            Thêm mới
          </button>
        </Link>
      </div>
      <th className="grid grid-cols-14 w-full text-center  p-4  border-gray-400  font-medium  ">
        <td className="col-span-3  text-start">Tài Khoản</td>
        <td className="col-span-2 text-start">Email</td>
        <td className="col-span-3 text-start  ">Địa Chỉ</td>
        <td className="col-span-1 ">Trạng Thái</td>
        <td className="col-span-1 ">Giới Tính</td>
        <td className="col-span-1 ">Số ĐT</td>
        <td className="col-span-1 ">Ngày tạo</td>
        <td className="col-span-1 ">Ngày cập nhật </td>
        <td className="col-span-1  ">Action</td>
      </th>
      {packageData.map((packageItem: any, key: any) => (
        <tr
          className="grid grid-cols-14 gap-3 text-center  p-4 font-medium items-center border-t border-gray-400 py-2 "
          key={key}
        >
          <td className="col-span-3 text-start gap-2 text-base flex items-center ">
            <img
              src={packageItem.logo}
              alt="Brand"
              className=" w-[50px] h-[50px] border border-black rounded-full   object-cover"
            />
            <p className=" col-span-2 w-[200px] truncate ">
              {packageItem.name}
            </p>
          </td>
          <td className="col-span-2 text-start  truncate">Email</td>
          <td className="col-span-3 text-start truncate">
            {packageItem.address}
          </td>
          <td className="col-span-1 ">
            <p
              className={`inline-flex rounded-lg  border bg-opacity-10 px-2 py-1 text-sm font-bold ${
                packageItem.status === 1
                  ? "border-green-500 text-green-500"
                  : "border-red-500 text-red-500"
              }`}
            >
              {packageItem.status === 1 ? "Active" : "Inactive"}
            </p>
          </td>
          <td className="col-span-1">Nam</td>
          <td className="col-span-1 underline">0987654321</td>
          <td className="col-span-1 underline text-wrap ">
            2022-11-11 : 11:11
          </td>
          <td className="col-span-1 underline text-green-500 text-wrap ">
            2022-11-11 : 11:11
          </td>
          <td className="flex items-center justify-evenly px-2 col-span-1">
            <button>
              <CiEdit size={25} />
            </button>
            <button>
              <MdDeleteOutline color="red" size={25} />
            </button>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default TableThree;
