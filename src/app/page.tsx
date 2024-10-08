"use client";

import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Image from "next/image";
import Button from "@/components/Button";
import TextField from "@/components/Input/TextField";
import { joinWaitlist } from "@/services/waitlist/waitlist.service";
import ErrorMessage from "@/components/ErrorMessage";

interface WaitlistFormValues {
  email: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormValues>();

  // Join waitlist function
  const handleJoinWaitlist = async (data: WaitlistFormValues) => {
    try {
      const response = await joinWaitlist(data);
      toast.success(`${response?.message}`, {
        position: "top-right",
        style: {
          background: "#ffffff",
          color: "#637A87",
        },
      });
      reset(); // Reset the form after successful submission
    } catch (error: any) {
      toast.error(error.message || "Failed to join waitlist.", {
        position: "top-right",
      });
    }
  };

  return (
    <section className="bg-white pb-20 xl:pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section: Text */}
        <div className="lg:w-1/2 w-full text-left mt-28 lg:mt-52">
          <h2 className="text-studycrest-primary font-medium text-sm uppercase mb-4 leading-[16.8px] dropping-soon rounded py-2 px-3 w-[142px] h-[33px]">
            Dropping Soon!!!
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] leading-tight lg:leading-[62.4px] font-semibold mb-4 text-studycrest-6">
            Study Better, Track Progress, and Ace your exams with ease.
          </h1>
          <p className="text-base text-studycrest-3 font-normal mb-6 leading-relaxed lg:leading-[25.92px]">
            Get ready to transform the way you study! Our innovative platform is
            designed to make learning more efficient and fun — everything you
            need to stay on top of your academic game is just around the corner.
          </p>
          <p className="text-sm text-studycrest-4 mb-3 font-semibold uppercase leading-[21.76px]">
            Get notified when we launch
          </p>

          <form
            onSubmit={handleSubmit(handleJoinWaitlist)}
            className="min-h-[120px]"
          >
            <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4 border border-studycrest-2 bg-studycrest-1 rounded-xl p-3 w-full">
              <TextField
                type="email"
                placeholder="Enter your email address"
                className="border border-studycrest-9 rounded-md py-[14px] px-4 focus:outline-none w-full lg:w-[260px] xl:w-[373px]"
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />

              <Button
                title="Join the waitlist"
                extraStyle="w-full"
                loading={isSubmitting}
                disabled={isSubmitting}
              />
            </div>
            {errors.email && (
              <ErrorMessage
                className="pl-1 pt-[6px] p-0"
                message={errors.email.message as string}
              />
            )}
          </form>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-[40%] w-full hidden lg:block mt-44">
          <Image
            src="/assets/heroimage.svg"
            alt="CrestStudy app preview"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
      <Toaster />
    </section>
  );
}
