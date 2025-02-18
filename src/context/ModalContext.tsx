"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Modal from "@/components/Modal";

interface ContextOptions {
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const ModalContext = React.createContext<ContextOptions | null>(null);

const ModalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const pathname = usePathname();

  useEffect(() => {
    if (modalContent) setModalContent(null);
  }, [pathname]);

  return (
    <ModalContext.Provider value={{ setModalContent }}>
      {modalContent ? <Modal>{modalContent}</Modal> : null}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModalContext: () => ContextOptions = () => {
  const context = React.useContext(ModalContext);
  if (!context)
    throw new Error("Modal context can only be used within modal provider");
  return context;
};
