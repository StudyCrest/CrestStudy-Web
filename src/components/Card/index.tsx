import { FC } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  description: string;
  image: string;
}

export const Card: FC<Props> = ({ title, description, image }) => {
  const pathname = usePathname();

  return (
    <div className="text-center">
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
      <div className="flex justify-center">
        <p
          className={`${
            pathname === "/about" ? "w-[420px]" : "w-[311px]"
          } pb-3 text-studycrest-12 text-[15px] sm:text-base font-normal leading-[22.72px]`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
