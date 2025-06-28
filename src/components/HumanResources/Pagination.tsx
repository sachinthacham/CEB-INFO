import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function getPageNumbers(current: number, total: number) {
  const delta = 2;
  const range = [];
  for (
    let i = Math.max(2, current - delta);
    i <= Math.min(total - 1, current + delta);
    i++
  ) {
    range.push(i);
  }
  if (current - delta > 2) range.unshift("...");
  if (current + delta < total - 1) range.push("...");
  range.unshift(1);
  if (total > 1) range.push(total);
  return range;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = getPageNumbers(currentPage, totalPages);
  return (
    <div className="flex justify-center items-center gap-2 mt-8 select-none">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-blue-200 bg-white text-blue-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-50 transition"
        aria-label="Previous page"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      {pageNumbers.map((num, idx) =>
        num === "..." ? (
          <span key={"ellipsis-" + idx} className="px-1 text-blue-300 text-lg">
            …
          </span>
        ) : (
          <button
            key={num}
            onClick={() => onPageChange(Number(num))}
            className={`w-9 h-9 mx-0.5 rounded-full border flex items-center justify-center font-semibold transition-all duration-150 text-base
              ${
                currentPage === num
                  ? "bg-blue-700 text-white border-blue-700 shadow-md"
                  : "bg-white text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-400 hover:scale-105"
              }
            `}
            disabled={currentPage === num}
            aria-current={currentPage === num ? "page" : undefined}
          >
            {num}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-blue-200 bg-white text-blue-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-50 transition"
        aria-label="Next page"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
