"use client";

import { authClient } from "@/app/lib/auth-client";
import { Square, SquareCheck } from "@gravity-ui/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { BsGoogle } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
// import Form from 'next/form'

const loginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const router = useRouter();
  const onSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    const formData = new FormData(form);
    // const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    if (password.length < 8) {
      setPasswordErrors("Password must be at least 8 characters long.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailErrors("Please enter a valid email address.");
      return;
    }
    if (password.toLowerCase().includes("password")) {
      setPasswordErrors("Password should not contain the word 'password'.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordErrors(
        "Password should contain at least one uppercase letter.",
      );
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordErrors(
        "Password should contain at least one lowercase letter.",
      );
      return;
    }
    if (!/[0-9]/.test(password)) {
      setPasswordErrors("Password should contain at least one number.");
      return;
    }

    try {
      const { data, error } = await authClient.signIn.email({
        email: email,
        password: password,
      });
      if (data) {
        toast.success("Login successful! Redirecting...");
        setTimeout(() => router.push("/"), 1500);
      }
      if (error) {
        toast.error(error.message || "Login Failed");
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
    //   const { data, error } = await authClient.signIn.email({
    //     email: email, // required
    //     password: password, // required
    //     // callbackURL: "https://example.com/callback",
    //   });
    //   if (data) {
    //     toast.success("Login successful! Redirecting...");
    //     setTimeout(() => {
    //       router.push("/"); // Change this to your desired redirect URL
    //     }, 1500); // Redirect after 1.5 seconds to show the toast message
    //   }
    //   if (error) {
    //     toast.error(error.message || "Login Failed");
    //   }
  };
  return (
    <>
    <ToastContainer position="top-right" autoClose={1500} />
    <div className="w-11/12 mx-auto min-h-125">
      <div className="flex justify-center items-center flex-col border-t-7 border-[#004AC6] mt-5 bg-[#E1E2ED]/60 p-8 rounded-2xl">
        <div className="bg-[#004AC6] p-4 rounded-full my-3">
          <FaGraduationCap size={80} color="white" />
        </div>
        <h1 className="text-black font-bold text-3xl">Welcome Back</h1>
        <p className="text-[#434655] text-lg mt-2">
          Log in to continue to SkillSphere
        </p>
        <form className="mt-8" onSubmit={onSubmit}>
          <div className="flex flex-col justify-start gap-1 mt-3">
            <label
              id="email"
              className="text-[#191B23] text-[15px] font-medium w-80"
              >
              Email Address
            </label>
            <input
              name="email"
              type="email"
              required
              className="outline-[#004AC6] bg-white p-2 rounded-2xl"
              placeholder="jhon@example.com"
              />
            {emailErrors && (
              <p className="text-red-500 text-sm mt-1">{emailErrors}</p>
            )}
          </div>
          <div className="mt-3 flex flex-col justify-start gap-1">
            <label
              id="password"
              className="text-[#191B23] text-[15px] font-medium w-80"
              >
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="outline-[#004AC6] bg-white p-2 rounded-2xl"
              placeholder="Enter Your Password"
              />
            <div className="text-black text-[15px]">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                >
                {showPassword ? (
                  <div className="flex justify-center items-center gap-2">
                    <SquareCheck /> Hide Password
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-2">
                    <Square /> Show Password
                  </div>
                )}
              </button>
            </div>
          </div>
          {passwordErrors && (
            <p className="text-red-500 text-sm mt-1">{passwordErrors}</p>
          )}
          <button
            type="submit"
            className="flex justify-center items-center gap-3 w-full bg-[#004AC6] rounded-xl cursor-pointer p-3 mt-5 text-white"
            >
            Login
          </button>
        </form>
        <div className="p-2 mt-6 flex flex-col justify-center items-center">
          <p>Or</p>
          <button
            onClick={() =>
              authClient.signIn.social({
                provider: "google",
              })
            }
            className="flex justify-center items-center gap-3 w-full border text-[15px] border-[#004AC6] rounded-xl cursor-pointer py-2 px-4 mt-3 text-black"
            >
            <BsGoogle />
            Login with Google
          </button>
          <p className="mt-4 text-[16px] text-[#434655]">
            Don't have an account?
            <span className="text-[#004AC6]">
              <Link href={"/auth/signup"}>Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
            </>
  );
};

export default loginPage;
