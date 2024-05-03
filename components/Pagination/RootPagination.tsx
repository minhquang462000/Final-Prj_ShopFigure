import { ICategory } from "@/interfaces";
import * as React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

export interface IRootPaginationProps {
  data: any;
  page: number;
  limit: number;
  setPage: (value: number) => void;
}
export default function RootPagination(props: IRootPaginationProps) {
  const { data, page, limit, setPage } = props;
  const renderPagination = () => {
    const pagination = [];
    const nextPage = page + 1 > data.lastPage ? null : page + 1;
    const prevPage = page - 1 < 1 ? null : page - 1;

    // console.log("test--->", nextPage ?? 1);

    pagination.push(
      <li className={` ${prevPage === null && "opacity-30"}`}>
        <button
          onClick={() => setPage(prevPage ?? 1)}
          className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 `}
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
      </li>
    );
    for (let i = 1; i <= data.lastPage; i++) {
      pagination.push(
        <li key={i}>
          <button
            onClick={() => setPage(i)}
            className={`flex items-center ${
              page == i
                ? "text-white bg-[#26b9fe] hover:bg-[#26c4fe]"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700  bg-white"
            } justify-center px-3 h-8 leading-tight  border border-gray-300 `}
          >
            {i}
          </button>
        </li>
      );
    }
    pagination.push(
      <li className={` ${nextPage === null && "opacity-30"}`}>
        <button
          onClick={() => setPage(nextPage ?? data.lastPage)}
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </li>
    );
    return pagination;
  };
  return (
    <nav className="w-full border-t-[1px]" aria-label="Page navigation example">
      <ul className="flex p-10 items-center justify-center -space-x-px h-5 text-sm font-bold">
        {renderPagination()}
      </ul>
    </nav>
  );
}
