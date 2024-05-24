import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { toast } from "react-toastify";
import { PrimaryButton } from "./Buttons/PrimaryButton";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?(\d.*){3,}$/, "Phone number is not valid")
    .required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters long")
    .required("Message is required"),
});

const ContactForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.fullName,
            email: values.email,
            phone: values.phone,
            message: values.message,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }
        toast.success("Message sent successfully!");
        formik.resetForm();
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <div className="hidden md:flex justify-center lg:mt-[22px] lg:mb-[46px] items-center">
        <Image src="/svg/Logo.svg" alt="ISE Logo" width={86} height={40} />
      </div>{" "}
      <form className="" onSubmit={formik.handleSubmit}>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          className="border border-gray-300 rounded mb-6 w-full h-12 px-3"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          onBlur={formik.handleBlur}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
        )}

        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="border border-gray-300 rounded w-full  mb-6 h-12 px-3"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}

        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="border border-gray-300 rounded w-full  mb-6 h-12 px-3"
          onChange={formik.handleChange}
          value={formik.values.phone}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="text-red-500 text-sm">{formik.errors.phone}</div>
        )}

        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="border border-gray-300 rounded w-full  mb-6 h-12 px-3 py-2"
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500 text-sm">{formik.errors.message}</div>
        )}

        <PrimaryButton
          disabled={!formik.isValid || formik.isSubmitting}
          type="submit"
          className="w-full h-14  bg-myblue-100 items-center justify-center  text-white py-2 md:mr-14 px-4 rounded t font-semibold"
          title="Submit"
        />
      </form>
    </>
  );
};

export default ContactForm;
