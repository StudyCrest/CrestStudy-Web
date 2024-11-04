"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { CommonHero } from "@/components/CommonHero";
import TextField from "@/components/Input/TextField";
import { submitEnquiry } from "@/services/contact/contact.service";
import { useModalContext } from "@/context/ModalContext";
import SubmitEnquiry from "@/components/Modal/SubmitEnquiry";
import TextArea from "@/components/Input/TextArea";
import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";

interface ContactUsFormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactUsFormValues>();
  const { setModalContent } = useModalContext();

  // Submit Enquiry form
  const handleSubmitEnquiry = async (data: ContactUsFormValues) => {
    try {
      const response = await submitEnquiry(data);
      toast.success(`${response?.message}`, {
        position: "top-right",
        style: {
          background: "#ffffff",
          color: "#637A87",
        },
      });
      reset();
      // setModalContent(<SubmitEnquiry />);
    } catch (error: any) {
      toast.error(error.message || "Failed to submit enquiry.", {
        position: "top-right",
      });
    }
  };

  return (
    <section className="pb-40">
      {/* Hero Section */}
      <section className="bg-studycrest-11 max-h-full lg:max-h-full pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CommonHero
            title="Contact Us"
            description="Our goal is to provide you with the best possible support and assistance. Don't hesitate to reach out with any questions or concerns"
            stretch={true}
          />
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-20 relative -top-36 min-h-full">
        <div className="bg-studycrest-20 shadow-main flex justify-between py-6 pl-8 pr-3 rounded-2xl">
          <div className="mt-10">
            <h2 className="text-studycrest-6 font-bold text-[28px] leading-[33.6px]">
              Enquiry Form
            </h2>
            <p className="text-studycrest-3 font-normal text-base leading[22.72px] py-3 w-[461px]">
              Kindly fill this form with the correct details and we would get
              back to you as soon as possible.
            </p>

            <form className="mt-3" onSubmit={handleSubmit(handleSubmitEnquiry)}>
              <div className="lg:w-[260px] xl:w-[461px] h-[112px]">
                <TextField
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  icon="/assets/user.svg"
                  className="border border-studycrest-9 rounded-md py-[14px] px-4 focus:outline-none w-full"
                  register={register("fullName", {
                    required: "Full Name is required",
                  })}
                />
                {errors.fullName && (
                  <ErrorMessage
                    className="pl-1 pt-[6px] p-0"
                    message={errors.fullName.message as string}
                  />
                )}
              </div>

              <div className="lg:w-[260px] xl:w-[461px] h-[112px]">
                <TextField
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email address"
                  icon="/assets/sms.svg"
                  className="border border-studycrest-9 rounded-md py-[14px] px-4 focus:outline-none w-full"
                  register={register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <ErrorMessage
                    className="pl-1 pt-[6px] p-0"
                    message={errors.email.message as string}
                  />
                )}
              </div>

              <div className="lg:w-[260px] xl:w-[461px] h-[112px]">
                <TextField
                  label="Subject"
                  type="text"
                  placeholder="Enter the subject of your message"
                  icon="/assets/sms.svg"
                  className="border border-studycrest-9 rounded-md py-[14px] px-4 focus:outline-none w-full"
                  register={register("subject", {
                    required: "Subject is required",
                  })}
                />
                {errors.subject && (
                  <ErrorMessage
                    className="pl-1 pt-[6px] p-0"
                    message={errors.subject.message as string}
                  />
                )}
              </div>

              <div className="lg:w-[260px] xl:w-[461px] h-[215px]">
                <TextArea
                  label="Message"
                  placeholder="Enter your message"
                  icon="/assets/message.svg"
                  className="border border-studycrest-9 rounded-md py-[14px] px-4 focus:outline-none w-full"
                  register={register("message", {
                    required: "Subject is required",
                  })}
                />
                {errors.message && (
                  <ErrorMessage
                    className="pl-1 pt-[6px] p-0"
                    message={errors.message.message as string}
                  />
                )}
              </div>

              <Button
                title="Submit"
                extraStyle="w-full"
                loading={isSubmitting}
                disabled={isSubmitting}
              />
            </form>
          </div>
          <div>
            <Image
              src="/assets/contact.svg"
              alt="Contact us image"
              width={550}
              height={715}
              className="rounded-lg mr-4 cursor-pointer"
            />
          </div>
        </div>
      </section>
      <Toaster />
    </section>
  );
}
