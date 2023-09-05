import React, { PropsWithChildren } from "react";

export interface ButtonProps {
  onClick?: () => void;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  children,
}) => (
  <button
    className="px-4 py-2 rounded-xl border-2 border-gray-400 bg-gray-gray100"
    onClick={onClick}
  >
    <div className="flex w-full items-center justify-between gap-4">
      {children}
    </div>
  </button>
);
