"use client";

import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Image from "next/image";
import Button from "@/components/Button";
import TextField from "@/components/Input/TextField";
import { joinWaitlist } from "@/services/waitlist/waitlist.service";
import ErrorMessage from "@/components/ErrorMessage";
import { useModalContext } from "@/context/ModalContext";
import WaitlistSubmission from "@/components/Modal/WaitlistSubmission";

interface WaitlistFormValues {
  email: string;
}

export default function Waitlist() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormValues>();
  const { setModalContent } = useModalContext();

  // Join waitlist function
  const handleJoinWaitlist = async (data: WaitlistFormValues) => {
    try {
      await joinWaitlist(data);
      toast.success("Registration successful!", {
        position: "top-right",
        style: {
          background: "#ffffff",
          color: "#637A87",
        },
      });
      reset();
      setModalContent(<WaitlistSubmission />);
    } catch (error: any) {
      toast.error(error.message || "Registration failed!", {
        position: "top-right",
      });
    }
  };

  return (
    <section className="bg-white pb-20 xl:pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section: Text */}
        <div className="lg:w-1/2 w-full text-left mt-28 lg:mt-32">
          <h2 className="text-studycrest-primary font-medium text-sm uppercase mb-4 leading-[16.8px] dropping-soon rounded py-2 px-3 w-[142px] h-[33px]">
            It's Today!!!
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] leading-tight lg:leading-[62.4px] font-semibold mb-4 text-studycrest-6">
            Topic: Study Hacks for Academic Excellence
          </h1>
          <p className="text-base text-studycrest-3 font-normal mb-2 leading-relaxed lg:leading-[25.92px]">
            <span className="font-bold text-black">Date:</span> Saturday 30th
            November, 2024
          </p>
          <p className="text-base text-studycrest-3 font-normal mb-4 leading-relaxed lg:leading-[25.92px]">
            <span className="font-bold text-black">Time:</span> 7PM
          </p>
          <p className="text-base text-studycrest-3 font-normal mb-6 leading-relaxed lg:leading-[25.92px]">
            Join our exclusive webinar,{" "}
            <span className="font-bold text-black">
              Study Hacks for Academic Excellence,
            </span>{" "}
            and discover proven techniques to boost your academic performance.
            Learn from top achievers, gain actionable tips, and take your
            studies to the next level.
          </p>
          <p className="text-sm text-studycrest-4 mb-3 font-semibold uppercase leading-[21.76px]">
            Don&#39;t miss out—register now and unlock your full potential!
          </p>

          <form
            onSubmit={handleSubmit(handleJoinWaitlist)}
            className="min-h-[120px]"
            id="waitlistform"
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
                title="Submit"
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
            src="/assets/webinar.png"
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
