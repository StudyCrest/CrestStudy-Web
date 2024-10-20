import { FC } from "react";

interface Props {
  title: string;
}

export const TitleTag: FC<Props> = ({ title }) => {
  return (
    <p className="bg-studycrest-11 text-studycrest-3 font-medium text-xs uppercase mb-4 leading-[13.44px] rounded-3xl py-2 px-4">
      {title}
    </p>
  );
};
