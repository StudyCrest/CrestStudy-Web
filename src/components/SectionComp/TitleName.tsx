import { FC } from "react";

interface Props {
  title: string;
  extraStyle?: string;
}

export const TitleName: FC<Props> = ({ title, extraStyle }) => {
  return (
    <h2
      className={`text-[40px] font-semibold text-studycrest-6 leading-[48.8px] pb-3 ${extraStyle}`}
    >
      {title}
    </h2>
  );
};
