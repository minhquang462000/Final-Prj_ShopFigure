import { ICategory } from "@/interfaces";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

export interface IRootPaginationProps {
  page: number;
  limit: number;
  query: string | undefined;
  total: number;
}
export default function RootPagination(props: IRootPaginationProps) {
  const { page, limit, total, query } = props;
  const totalPage = Math.ceil(total / Number(limit))
  const nextPage = page + 1 > totalPage ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;
  const renderPagination = () => {
    if (totalPage <= 10)
      return Array.from({ length: totalPage }, (_, index) => (
        <li key={index}>
          <Link href={`?p=${index + 1}&q=${query}`}>
            <button

              className={`flex items-center ${page == index + 1
                ? "text-white bg-[#26b9fe] hover:bg-[#26c4fe]"
                : " hover:bg-gray-100 hover:text-gray-700  bg-white"
                } justify-center px-4 h-12 leading-tight  border border-gray-300 `}
            >
              {index + 1}
            </button></Link>
        </li>
      ));

    let pages = [page];
    let results: string[] = [];
    const firstPages = [1, 2];
    const lastPages = [totalPage - 1, totalPage];
    let i = 1;
    const doneSides: string[] = [];

    while (pages.length < 7) {
      const left = page - i;

      if (left <= 0 || firstPages.includes(left)) {
        if (!doneSides.includes("left")) {
          const filter = pages.filter((item) => !firstPages.includes(item));
          pages = [...firstPages, ...filter];
          doneSides.push("left");
        }
      } else {
        pages = [left, ...pages];
      }

      const right = page + i;

      if (right > totalPage || lastPages.includes(right)) {
        if (!doneSides.includes("right")) {
          const filter = pages.filter((item) => !lastPages.includes(item));
          pages = [...filter, ...lastPages];
          doneSides.push("right");
        }
      } else {
        if (!pages.includes(right)) {
          pages = [...pages, right];
        }
      }

      i++;
    }

    results = pages.map((item) => item.toString());

    if (!doneSides.includes("left")) {
      results = [
        ...firstPages.map((item) => item.toString()),
        "...",
        ...pages.map((item) => item.toString()),
      ];
    }

    if (!doneSides.includes("right")) {
      results = [
        ...results.map((item) => item.toString()),
        "...",
        ...lastPages.map((item) => item.toString()),
      ];
    }

    return results.map((item, index) => {
      if (item === "...") {
        return (
          <li
            key={index}
            className={`flex px-3 h-12 leading-tight cursor-wait border-gray-300  items-end py-2 border  page-item text-primarySecond`}
          >
            {item}
          </li>
        );
      }

      return (
        <li key={index}>
          <Link href={`?p=${parseInt(item)}&q=${query}`}>
            <button

              className={`flex items-center ${parseInt(item) === page
                ? "text-white bg-[#26b9fe] hover:bg-[#26c4fe]"
                : " hover:bg-gray-100 hover:text-gray-700  bg-white"
                } justify-center px-4 h-12 leading-tight  border border-gray-300 `}
            >
              {item}
            </button></Link>
        </li>
      );
    });
  };
  return (
    <nav className="w-full text-gray-600 border-t-[1px]" aria-label="Page navigation example">
      <ul className="flex  p-10 items-center justify-center -space-x-px h-10 text-lg font-bold">
        <li className={` ${prevPage === null && "opacity-30"}`}>
          <Link href={`?p=${prevPage ?? 1}&q=${query}`}>
            <button

              className={`flex items-center justify-center px-3 h-12 ms-0 leading-tight  bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 `}
            >
              <MdOutlineKeyboardDoubleArrowLeft />
            </button></Link>
        </li>
        {renderPagination()}
        <li className={` ${nextPage === null && "opacity-30"}`}>
          <Link href={`?p=${nextPage ?? totalPage}&q=${query}`}>
            <button
              className="flex items-center justify-center px-3 h-12 leading-tight  bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              <MdOutlineKeyboardDoubleArrowRight />
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
