import * as React from "react";

export interface IDescriptionItemProps {}

export default function DescriptionItem(props: IDescriptionItemProps) {
  return (
    <div className="col-span-3">
      <nav>
      <h1>MÔ TẢ SẢN PHẨM</h1>
      <h2>
        Mô hình chính hãng Tokisaki Kurumi Zafkiel - Date A Live IV | Taito
      </h2>
      <p>
        Tokisaki Kurumi từ series Date A Live IV được chuyển thể thành mô hình
        "Artist MasterPiece+ Zafkiel" với kích thước ấn tượng. Sản phẩm của
        Taito không chỉ nổi bật về chất lượng mà còn về thiết kế độc đáo, tái
        hiện chân thực nhân vật Kurumi với chiếc đồng hồ Zafkiel biểu tượng.
      </p>
      <p>
        Bản mô hình này thu hút mọi ánh nhìn bởi vẻ ngoài bí ẩn, quyến rũ của
        Kurumi, cùng với đó là sự chú trọng tỉ mỉ đến từng chi tiết.
      </p>
      </nav>
      <button>
        <span>+</span>
        <p>Xem thêm</p>
      </button>
    </div>
  );
}
