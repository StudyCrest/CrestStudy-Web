import React, { FC } from "react";
import ErrorMessage from "@/components/ErrorMessage";
import Image from "next/image"; // Import Next.js Image component

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  isRequired?: boolean;
  label?: string;
  error?: string;
  register?: any;
  icon?: string;
}

const TextField: FC<Props> = ({
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
      <div className="relative flex items-center">
        <input
          className="min-h-[20px] text-black flex m-0 placeholder:text-gray-400 placeholder:text-sm px-4 py-2 pr-10 rounded-md outline-none bg-white border border-gray-300 focus:border-blue-300 transition-all w-full"
          {...props}
          {...register}
        />
        {icon && (
          <Image
            src={`${icon}`}
            alt="Contact icon"
            width={16}
            height={16}
            className="absolute right-3"
          />
        )}
      </div>
      {Boolean(error?.trim()) && (
        <ErrorMessage className="pl-1 pt-[6px] p-0" message={error as string} />
      )}
    </div>
  );
};

export default TextField;

// import React, { FC } from "react";
// import ErrorMessage from "@/components/ErrorMessage";

// interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
//   isRequired?: boolean;
//   label?: string;
//   error?: string;
//   register?: any;
// }

// const TextField: FC<Props> = ({
//   isRequired,
//   label,
//   error,
//   register,
//   ...props
// }) => {
//   return (
//     <div className="flex flex-col w-full">
//       {label && (
//         <label className={`text-base font-medium mb-2`}>
//           {label} {isRequired && <span className="text-rose-600">*</span>}
//         </label>
//       )}
//       {
//         <input
//           className={
//             "min-h-[20px] text-black flex m-0 placeholder:text-gray-400 placeholder:text-sm px-4 py-1  rounded-md outline-none bg-white border border-gray-300 focus:border-blue-300 transition-all"
//           }
//           {...props}
//           {...register}
//         />
//       }
//       {Boolean(error?.trim()) && (
//         <ErrorMessage className="pl-1 pt-[6px] p-0" message={error as string} />
//       )}
//     </div>
//   );
// };

// export default TextField;
