import React, { FC } from "react";
import ErrorMessage from "@/components/ErrorMessage";
import Image from "next/image";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isRequired?: boolean;
  label?: string;
  error?: string;
  register?: any;
  icon?: string;
}

const TextArea: FC<Props> = ({
  isRequired,
  label,
  error,
  register,
  icon,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-base font-medium mb-2 pl-1">
          {label} {isRequired && <span className="text-rose-600">*</span>}
        </label>
      )}
      <div className="relative flex items-start">
        <textarea
          rows="5"
          className="flex m-0 text-black placeholder:text-gray-400 placeholder:text-sm px-4 py-3 resize-none rounded-md outline-none bg-white border-none"
          {...props}
          {...register}
        ></textarea>
        {icon && (
          <Image
            src={`${icon}`}
            alt="Contact icon"
            width={16}
            height={16}
            className="absolute right-3 top-5"
          />
        )}
      </div>
      {Boolean(error?.trim()) && (
        <ErrorMessage className="mt-[4px] p-0" message={error as string} />
      )}
    </div>
  );
};

export default TextArea;
