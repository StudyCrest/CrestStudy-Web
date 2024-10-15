"use client";

import React, { ReactNode, Suspense } from "react";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import ModalProvider from "@/context/ModalContext";

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <ModalProvider>
      <Header />
      <Suspense fallback={<Loading />}>
        <main>{children}</main>
      </Suspense>
    </ModalProvider>
  );
};

export default ClientLayout;
