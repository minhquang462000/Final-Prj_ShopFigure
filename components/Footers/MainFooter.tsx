import * as React from 'react';
import { FaPhone, FaTelegramPlane } from 'react-icons/fa';
import zaloIcon from "@/public/icon/Icon_of_Zalo.svg.png"
import TwIcon from "@/public/icon/twtter.png"
import TTIcon from "@/public/icon/tiktok.png"
import YtIcon from "@/public/icon/youtobe.png"
import IsGIcon from "@/public/icon/Instagram.png"
import FbIcon from "@/public/icon/facebook.png"
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import bgIcon from "@/public/images/main.jpg"
import { PiMapPinFill } from 'react-icons/pi';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { IoIosShareAlt } from 'react-icons/io';
import imgFooter from "@/public/icon/footer_trustbadge.png"
export interface IAppProps {
}

export default function MainFooter(props: IAppProps) {
  return (
    <footer className='w-screen bg-[#202020]'>
      <nav className='w-[1280px]  mx-auto '>
        <section className='grid border-b-[3px]  items-center grid-cols-4 py-4'>
          <h2 className='font-medium'>ĐĂNG KÝ NHẬN TIN</h2>
          <div className='col-span-2 flex items-center pl-2 bg-white w-max'>
            <AiOutlineMail color='gray' className='text-[25px] mr-2' />
            <input className='outline-none text-black w-[250px] bg-transparent' type="email" name="" placeholder='Email' id="" />
            <button className='flex items-center gap-2 bg-[#9b9b9b] text-sm p-3'>
              <FaTelegramPlane />
              <p>ĐĂNG KÝ</p></button>

          </div>
          <div className='flex  gap-3'>
            <Image src={zaloIcon} alt="Vercel Logo" width={30} height={30} />
            <Image src={TTIcon} alt="Vercel Logo" width={30} height={30} />
            <Image src={TwIcon} alt="Vercel Logo" width={30} height={30} />
            <Image src={YtIcon} alt="Vercel Logo" width={30} height={30} />
            <Image src={IsGIcon} alt="Vercel Logo" width={30} height={30} />
            <Image src={FbIcon} alt="Vercel Logo" width={30} height={30} />
          </div>
        </section>
        <tr className='grid py-8 gap-8 grid-cols-4'>
          <td className='flex flex-col gap-3 text-sm'>
            <div className='bg-cover px-3 flex flex-col justify-evenly text-gray-200  ' style={{ backgroundImage: `url(${bgIcon.src})`, width: "100%", height: "140px" }}>
              <div className='w-12 h-12 border-2 border-[#26b9fe] rounded-full overflow-hidden '>
                <img className='w-full h-full' src="https://cdn.dribbble.com/users/1346761/screenshots/7041513/media/dee97a1b0d22229724cc6022675151b2.png?compress=1&resize=800x600" alt="" />
              </div>
              <h1 className='font-bold   italic hover:text-[#d70018]  w-max'>KING FIGURE</h1>
              <p className='font-bold  text-xs italic hover:text-[#d70018] w-max'> 46.200 người theo dõi</p>
              <div className='flex justify-between   text-gray-800 font-bold'>
                <button className='flex bg-gray-200 hover:bg-gray-300 px-2 text-xs rounded items-center'>
                  <RiFacebookBoxFill size={23} className='text-[#3a5897]' />
                  <p>Theo Dõi Trang</p>
                </button>
                <button className='flex bg-gray-200 hover:bg-gray-300   px-2 text-xs rounded items-center'  >
                  <IoIosShareAlt size={23} />
                  <p>Chia sẻ</p>
                </button>
              </div>
            </div>
            <h3>JH FIGURE - Mô hình anime chính hãng</h3>
            <span className='flex items-center gap-2'>
              <PiMapPinFill color='white' />
              306 Cộng Hòa, P13, Tân Bình, TP.HCM
            </span>
            <button className='flex hover:text-[#d70018] items-center gap-2'>
              <FaPhone color='white' />
              086 704 0620
            </button>
            <button className='flex hover:text-[#d70018] items-center gap-2'>
              <AiOutlineMail color='white' size={18} />
              0F2nQ@example.com
            </button>
          </td>
          <td className=''>
            <h3 className='mb-3 font-bold list-none'>CHÍNH SÁCH</h3>
            <ul className='flex pl-5 flex-col text-sm list-disc gap-3'>
              <li><button className='hover:text-[#d70018]'>Tìm kiếm</button></li>
              <li><button className='hover:text-[#d70018]'>Giới thiệu</button></li>
              <li><button className='hover:text-[#d70018]'>Chính sách giao hàng và đổi trả</button></li>
              <li> <button className='hover:text-[#d70018]'>Chính Sách bảo mật</button></li>
              <li><button className='hover:text-[#d70018]'>Điều khoản dịch vụ</button></li>
              <li><button className='hover:text-[#d70018]'>Liên hệ</button></li>
            </ul>
          </td>
          <td className=''>
            <h3 className='mb-3 font-bold list-none'>HƯỚNG DẪN</h3>
            <ul className='flex pl-5 flex-col text-sm list-disc gap-3'>
              <li><button className='hover:text-[#d70018]'>Danh mục Blog</button></li>
            </ul>
          </td>
          <td className=''>
            <h3 className='mb-3 font-bold list-none'>TỔNG ĐÀI HỖ TRỢ</h3>
            <ul className='flex  flex-col text-sm  gap-4'>
              <li>Gọi mua hàng: <span className='text-[#26b9fe] pl-1 italic cursor-pointer  hover:text-[#d70018]'>0987654321</span></li>
              <li>Gọi bảo hành: <span className='text-[#26b9fe] pl-1 italic  cursor-pointer hover:text-[#d70018]'>0987654321</span></li>
              <li>Gọi hợp tác kinh doanh ,mua sỉ: <span className='text-[#26b9fe] pl-1 italic cursor-pointer  hover:text-[#d70018]'>0987654321</span></li>
              <h3 className='font-medium text-lg'>PHƯƠNG THỨC THANH TOÁN</h3>
              <Image src={imgFooter} width={250} height={100} alt='abc' />
            </ul>
          </td>

        </tr>

      </nav>
    </footer>
  );
}
