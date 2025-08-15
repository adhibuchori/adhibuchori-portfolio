import { useState } from "react";
import type { CertificationType } from "./CertificationType";

interface PaginationHookResult {
  currentPage: number;
  totalPages: number;
  paginatedItems: CertificationType[];
  handlePageChange: (newPage: number) => void;
}

export const useCertificationPagination = (
  items: CertificationType[],
  itemsPerPage: number
): PaginationHookResult => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const reversedItems: CertificationType[] = [...items].reverse();

  const totalPages: number = Math.ceil(reversedItems.length / itemsPerPage);
  const paginatedItems: CertificationType[] = reversedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number): void => {
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    handlePageChange,
  };
};
