import * as React from "react";
import { CiFolderOff } from "react-icons/ci";

export interface INoDataPageProps {}

export default function NoDataPage(props: INoDataPageProps) {
  return (
    <div className="w-[90%] flex text-gray-400 flex-col border m-auto my-5 rounded-xl justify-center items-center h-max text-center p-10 ">
      <CiFolderOff size={100} className="mb-2" />
      <p className="underline text-xl font-light italic">Không có dữ liệu</p>
    </div>
  );
}
