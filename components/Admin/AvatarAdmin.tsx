import Link from "next/link";
import * as React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export interface IAvatarAdminProps {}

export default function AvatarAdmin(props: IAvatarAdminProps) {
  const [showOption, setShowOption] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        wrapperRef.current &&
        !wrapperRef.current!.contains(event.target) &&
        showOption
      ) {
        setShowOption(false);
      }
      
    
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOption, wrapperRef ]);
  return (
    <div
   
    className="flex gap-3 cursor-pointer items-center  relative">
      <span className="text-end text-lg font-medium">
        <p>Nguyễn Minh Quang</p>
        <p>Admin</p>
      </span>
      <img
      className="w-[50px] h-[50px] object-cover rounded-full"
        src="https://mir-s3-cdn-cf.behance.net/projects/404/2d5247173291955.Y3JvcCwxMDgwLDg0NCwwLDU5MA.png"
        alt=""
      />
      <button className="text-2xl"
       onClick={() => setShowOption(!showOption)}  >
        
        {" "}
        {showOption ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      
      </button>
     <Link href={'/'}> <button ref={wrapperRef} className={`flex hover:text-[#29b6fe] hover:underline ${!showOption &&"hidden"} absolute -bottom-14 shadow shadow-gray-400 bg-white right-0 items-center gap-2 text-base border border-black rounded-lg p-3`}>
        <FaHome />Trở về trang chủ</button></Link>
    </div>
  );
}
