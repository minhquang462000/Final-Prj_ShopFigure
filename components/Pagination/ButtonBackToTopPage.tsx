'use client'
import { useEffect, useState } from "react";
import { TiArrowUpOutline } from "react-icons/ti";

export interface IButtonBackToTopPageProps {
}

export default function ButtonBackToTopPage(props: IButtonBackToTopPageProps) {
    const [isVisible, setIsVisible] = useState(false);
    // Kiểm tra vị trí cuộn trang
    const toggleVisibility = () => {
        if (window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    // Cuộn lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        <div className={`w-full trasition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button onClick={scrollToTop} className='hover:scale-110 fixed bottom-16  border  rounded-lg shadow w-12 h-12 shadow-black bg-white border-gray-500  z-50 right-10 flex items-center justify-center transition-all duration-300'>
                <TiArrowUpOutline color="gray" size={25} />
            </button>
        </div>
    );
}
