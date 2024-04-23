import * as React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export interface IAvatarAdminProps {}

export default function AvatarAdmin(props: IAvatarAdminProps) {
  const [showOption, setShowOption] = React.useState(false);
  return (
    <div
    onClick={() => setShowOption(!showOption)} 
    className="flex gap-3 cursor-pointer items-center ">
      <span className="text-end text-lg font-medium">
        <p>Nguyễn Minh Quang</p>
        <p>Admin</p>
      </span>
      <img
      className="w-[50px] h-[50px] object-cover rounded-full"
        src="https://mir-s3-cdn-cf.behance.net/projects/404/2d5247173291955.Y3JvcCwxMDgwLDg0NCwwLDU5MA.png"
        alt=""
      />
      <button className="text-2xl" >
        {" "}
        {showOption ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </button>
    </div>
  );
}
