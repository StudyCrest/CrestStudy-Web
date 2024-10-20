import { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
}

const Feature: FC<Props> = ({ title, description, image }) => {
  return (
    <div className="bg-custom-gradient p-6 rounded-lg">
      <h2 className="text-studycrest-13 text-xl font-semibold leading-[29.28px] pb-2">
        {title}
      </h2>
      <p className="pb-3">{description}</p>
      <Image
        src={image}
        alt="CrestStudy app"
        width={400}
        height={400}
        className="rounded-lg"
      />
    </div>
  );
};

export default Feature;
