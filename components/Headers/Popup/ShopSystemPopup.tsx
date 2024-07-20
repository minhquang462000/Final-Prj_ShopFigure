'use client'
import { useEffect, useRef, useState } from 'react';
import { GrMapLocation } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';

export interface IPopupShopSystemProps {
}

export default function ShopSystemPopup(props: IPopupShopSystemProps) {
  const wrapperRefShopSystem = useRef<HTMLDivElement>(null);
  const [openShopSystem, setOpenShopSystem] = useState(false);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        wrapperRefShopSystem.current &&
        !wrapperRefShopSystem.current!.contains(event.target) &&
        openShopSystem
      ) {
        setOpenShopSystem(false);
      }

    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openShopSystem, wrapperRefShopSystem]);
  return (
    <div ref={wrapperRefShopSystem} className="w-full  relative ">
      <button
        onClick={() => setOpenShopSystem(!openShopSystem)}
        className="flex items-center  gap-2 "
      >
        <GrMapLocation size={30} />
        <span className="flex flex-wrap items-center ">
          <span>Hệ thống </span>
          <span>cửa hàng</span> <IoIosArrowDown size={15} />
        </span>
      </button>
      <div
        className={`w-4 h-4  bg-white absolute top-12 z-10 shadow-md shadow-black   right-14 rotate-45 ${!openShopSystem && "hidden"
          }`}
      ></div>
      <div

        className={`absolute  gap-2 p-4 py-2 shadow-sm shadow-black top-14 bg-white text-center z-20 -right-16  text-black w-[450px] transition-opacity duration-500 ${!openShopSystem && "hidden"
          }`}
      >
        <h2 className="text-lg">TÌM CỬA HÀNG GẦN BẠN</h2>
        <div>
          <input
            type="text"
            className="border mb-3 p-2 outline-none w-full bg-transparent"
            placeholder=" Tỉnh hoặc thành phố"
          />
          <input
            type="text"
            className="border mb-3 p-2 outline-none w-full bg-transparent"
            placeholder=" Quận hoặc huyện"
          />
        </div>
      </div>
    </div>
  );
}
