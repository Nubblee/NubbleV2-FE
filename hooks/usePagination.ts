import { useCallback, useState } from "react";

export interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalPages: number;
}

export default function usePagination({
  currentPage,
  pageSize,
  totalPages,
}: PaginationProps) {
  const [page, setPagination] = useState({
    currentPage,
    totalPages,
    pageSize,
  });

  const setPage = useCallback((page: number) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: page,
    }));
  }, []);

  const setPaginatedData = useCallback((data: PaginationProps) => {
    setPagination(data);
  }, []);

  return {
    page,
    setPage,
    setPaginatedData,
  };
}
