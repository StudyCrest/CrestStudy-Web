"use client";

import React, { ReactNode, Suspense } from "react";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import ModalProvider from "@/context/ModalContext";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <ModalProvider>
      <Header />
      <Suspense fallback={<Loading />}>
        <main>{children}</main>
      </Suspense>
      {pathname != "/waitlist" && <Footer />}
    </ModalProvider>
  );
};

export default ClientLayout;
