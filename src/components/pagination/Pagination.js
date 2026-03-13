"use client";

import Button from "../ui/Button";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {

  if (totalPages <= 1) return null;

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    console.log("currentPage"),  
    <div className="flex flex-wrap items-center justify-center gap-2 mt-10">

      {/* Previous Button */}
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          className={
            page === currentPage
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }
        >
          {page}
        </Button>
      ))}

      {/* Next Button */}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>

    </div>
  );
}