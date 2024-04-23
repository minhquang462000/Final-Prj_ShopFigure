
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
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
    <div className="rounded-sm border border-stroke bg-white ">
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="w-full p-4">
            <tr className="bg-gray-2 text-center w-full border-b p-4 flex justify-between dark:bg-meta-4">
              <th className="w-[50px]  ">
                Avatar
              </th>
              <th className="w-[15%] truncate  ">
                Tên người dùng
              </th>
              <th className="w-[25%] truncate">
                Địa chỉ
              </th>
              <th className="w-[10%]">
              Trạng thái
              </th>
              <th className="w-[7%]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {packageData.map((packageItem, key) => (
              <tr className="flex justify-between  text-center items-center border-b p-4" key={key}>
                <td className=" w-[50px] h-[50px] border border-black overflow-hidden rounded-full  ">
                <img src={packageItem.logo} alt="Brand" className=" w-full h-full  object-cover" />
                </td>
                <td className="w-[15%] truncate ">
                {packageItem.name}
                </td>
                <td className="w-[25%] truncate">
                {packageItem.address}
                </td>
                <td className="w-[10%]">
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
                <td className="flex items-center justify-between px-2 w-[7%]">
                <button><CiEdit  size={25}/></button>
                   <button><MdDeleteOutline color="red" size={25}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
