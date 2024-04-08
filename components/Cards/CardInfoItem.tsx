import * as React from 'react';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { LiaHandHoldingUsdSolid, LiaShippingFastSolid } from 'react-icons/lia';

export interface ICardInfoItemProps {
}

export default function CardInfoItem (props: ICardInfoItemProps) {
  return (
    <div className="col-span-1  bg-white pb-8  rounded-md p-3">
            <tr className="flex flex-col  rounded-t-lg border pb-4 gap-3">
              <td className="flex w-full bg-[#38bf57] py-2 px-3 text-white font-bold">
                {" "}
                Cam kết bán hàng
              </td>
              <td className="flex items-center px-3 gap-2">
                {" "}
                <IoCheckmarkDoneCircleOutline className="w-1/5" size={28} />
                <span className="w-4/5"> Hàng chính hãng</span>
              </td>
              <td className="flex items-center px-3 gap-2">
                {" "}
                <LiaHandHoldingUsdSolid className="w-1/5" size={28} />
                <span className="w-4/5">Bảo hành lỗi NSX</span>
              </td>
              <td className="flex items-center px-3 gap-2">
                {" "}
                <LiaShippingFastSolid className="w-1/5" size={28} />
                <span className="w-4/5">
                  {" "}
                  FREE SHIPPING toàn quốc đơn hàng trên 400K
                </span>
              </td>
              <td className="flex items-center px-3 gap-2">
                <GiEarthAfricaEurope className="w-1/5" size={28} />
                <span className="w-4/5">
                  {" "}
                  International Shipping now available
                </span>
              </td>
            </tr>
            <tr className="flex flex-col mt-4  rounded-t-lg border pb-4 gap-3">
              <td className="flex w-full bg-[#38bf57] py-2 px-3 text-white font-bold">
                {" "}
                Lưu ý khi mua hàng
              </td>
              <td className="flex  w-full px-3 gap-2">
                {" "}
                <IoIosCheckmarkCircle
                  className="w-[10%] mt-2"
                  size={20}
                  color="green"
                />
                <span className="w-[90%]">
                  {" "}
                  Khách đọc kỹ ngày phát hành (dự kiến) của sản phẩm
                </span>
              </td>
              <td className="flex  w-full px-3 gap-2">
                {" "}
                <IoIosCheckmarkCircle
                  className="w-[10%] mt-2"
                  size={20}
                  color="green"
                />
                <span className="w-[90%]">
                  {" "}
                  Hàng đặt trước giá có thể thay đổi, khách hãy inbox để xác
                  nhận giá trước khi đặt mua
                </span>
              </td>
              <td className="flex  w-full px-3 gap-2">
                {" "}
                <IoIosCheckmarkCircle
                  className="w-[10%] mt-2"
                  size={20}
                  color="green"
                />
                <span className="w-[90%]">
                  {" "}
                  Mỗi nguồn hàng có chính sách bảo hành khác nhau, tham khảo tại
                  đây
                </span>
              </td>
            </tr>
          </div>
  );
}
