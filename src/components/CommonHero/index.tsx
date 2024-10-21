import React, { FC } from "react";

interface Props {
  title: string;
  description: string;
  stretch?: boolean;
}

export const CommonHero: FC<Props> = ({ title, description, stretch }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[838px] text-center mt-32 xl:mt-40">
        <h1 className="text-3xl sm:text-4xl lg:text-[50px] xl:text-[56px] leading-tight lg:leading-[67.2px] font-semibold mb-4 text-studycrest-6">
          {title}
        </h1>
        <div className="flex justify-center mb-7">
          <p
            className={`w-full ${
              stretch ? "max-w-[512px]" : "max-w-[302px]"
            } text-center text-[15px] sm:text-base text-studycrest-3 font-normal leading-relaxed lg:leading-[25.92px]`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
