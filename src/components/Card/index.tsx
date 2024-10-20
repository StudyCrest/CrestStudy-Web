import { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
}

export const Card: FC<Props> = ({ title, description, image }) => {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src={image}
          alt="CrestStudy App Steps"
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-studycrest-13 text-xl font-semibold leading-[29.28px] pb-2">
        {title}
      </h2>
      <p className="pb-3 text-studycrest-12 text-base font-normal leading-[22.72px]">
        {description}
      </p>
    </div>
  );
};
