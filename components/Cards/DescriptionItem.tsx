import * as React from "react";
import { FaPlusCircle } from "react-icons/fa";

export interface IDescriptionItemProps { }

export default function DescriptionItem(props: IDescriptionItemProps) {
  const [showAllDescription, setShowAllDescription] = React.useState(false);
  return (
    <div className={`col-span-3 rounded-md flex flex-col justify-between bg-white p-4 h-max `}>
      <nav className={` w-full mb-16 `}>
        <h2 className="text-xl  font-bold mb-6">MÔ TẢ SẢN PHẨM</h2>
        <h2 className="text-2xl font-medium mb-3 line-clamp-2">
          Mô hình chính hãng Tokisaki Kurumi Zafkiel - Date A Live IV | Taito sjdhasjkdhsjahd sjdha sjkdha sajkdh
        </h2>
        <span className={`overflow-hidden flex flex-col gap-3  ${!showAllDescription ? "h-[300px] " : "max-h-max"}`}>
       
          <p className={`${!showAllDescription && "line-clamp-3"}`}>
            Tokisaki Kurumi từ series Date A Live IV được chuyển thể thành mô hình
            "Artist MasterPiece+ Zafkiel" với kích thước ấn tượng. Sản phẩm của
            Taito không chỉ nổi bật về chất lượng mà còn về thiết kế độc đáo, tái
            hiện chân thực nhân vật Kurumi với chiếc đồng hồ Zafkiel biểu tượng.
            Tokisaki Kurumi từ series Date A Live IV được chuyển thể thành mô hình
            "Artist MasterPiece+ Zafkiel" với kích thước ấn tượng. Sản phẩm của
            Taito không chỉ nổi bật về chất lượng mà còn về thiết kế độc đáo, tái
            hiện chân thực nhân vật Kurumi với chiếc đồng hồ Zafkiel biểu tượng.
            Tokisaki Kurumi từ series Date A Live IV được chuyển thể thành mô hình
            "Artist MasterPiece+ Zafkiel" với kích thước ấn tượng. Sản phẩm của
            Taito không chỉ nổi bật về chất lượng mà còn về thiết kế độc đáo, tái
            hiện chân thực nhân vật Kurumi với chiếc đồng hồ Zafkiel biểu tượng.
            Tokisaki Kurumi từ series Date A Live IV được chuyển thể thành mô hình
            "Artist MasterPiece+ Zafkiel" với kích thước ấn tượng. Sản phẩm của
            Taito không chỉ nổi bật về chất lượng mà còn về thiết kế độc đáo, tái
            hiện chân thực nhân vật Kurumi với chiếc đồng hồ Zafkiel biểu tượng.
            Tokisaki Kurumi từ series Date A Live IV được chuyển thể thành mô hình
            "Artist MasterPiece+ Zafkiel" với kích thước ấn tượng. Sản phẩm của
            Taito không chỉ nổi bật về chất lượng mà còn về thiết kế độc đáo, tái
            hiện chân thực nhân vật Kurumi với chiếc đồng hồ Zafkiel biểu tượng.
          </p>
          <p>
            Bản mô hình này thu hút mọi ánh nhìn bởi vẻ ngoài bí ẩn, quyến rũ của
            Kurumi, cùng với đó là sự chú trọng tỉ mỉ đến từng chi tiết.
          </p>
          <p>
            Đừng bỏ lỡ cơ hội sở hữu mô hình độc đáo này. Mô hình này shop hỗ trợ <span className="px-1 text-[#26b9fe] cursor-pointer hover:text-[#ff5252]">ship quốc tế</span>, khách hàng an tâm mua sắm với
             <span className="px-1 text-[#26b9fe] cursor-pointer hover:text-[#ff5252]">chính sách giao hàng và đổi trả sản phẩm</span>. Nếu có câu hỏi về sản phẩm xin vui lòng inbox hoặc xem 
             <span className="px-1 text-[#26b9fe] cursor-pointer hover:text-[#ff5252]">câu hỏi thường gặp</span> để biết thêm chi tiết và đặt hàng ngay hôm nay!
          </p>
        </span>

      </nav>
      <button onClick={() => setShowAllDescription(!showAllDescription)} className="flex text-end py-2 w-full justify-center gap-2 items-center font-medium bg-gray-100 rounded-md">
        <FaPlusCircle />
        <p >{showAllDescription ? "Thu gọn" : "Xem thêm"}</p>
      </button>
    </div>
  );
}
