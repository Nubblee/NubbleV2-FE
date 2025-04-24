"use client";

import { useCallback, useState } from "react";

export default function useModal() {
  const [isOpen, setOpen] = useState(false);

  const handleOpenModal = useCallback(() => setOpen(true), []);
  const handleCloseModal = useCallback(() => setOpen(false), []);

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
}
