import { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  noWrap?: boolean;
}

const Feature: FC<Props> = ({ title, description, image, noWrap }) => {
  return (
    <div className="bg-custom-gradient p-6 rounded-lg">
      <h2 className="text-studycrest-13 text-xl font-semibold leading-[29.28px] pb-2">
        {title}
      </h2>
      <p
        className={`${
          noWrap && "sm:max-w-[372px]"
        } pb-3 text-studycrest-12 text-[15px] sm:text-base font-normal leading-[22.72px]`}
      >
        {description}
      </p>
      <Image
        src={image}
        alt="CrestStudy app"
        width={350}
        height={350}
        className="rounded-lg"
      />
    </div>
  );
};

export default Feature;
