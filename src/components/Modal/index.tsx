import React, { FC, PropsWithChildren } from "react";

const Modal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
      style={{
        backdropFilter: "blur(2px)",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
