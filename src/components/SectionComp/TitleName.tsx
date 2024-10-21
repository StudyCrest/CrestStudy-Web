import { FC } from "react";

interface Props {
  title: string;
  extraStyle?: string;
}

export const TitleName: FC<Props> = ({ title, extraStyle }) => {
  return (
    <h2
      className={`text-[24px] sm:text-[26px] lg:text-[40px] font-semibold text-studycrest-6 sm:leading-[48.8px] pb-2 sm:pb-3 ${extraStyle}`}
    >
      {title}
    </h2>
  );
};
