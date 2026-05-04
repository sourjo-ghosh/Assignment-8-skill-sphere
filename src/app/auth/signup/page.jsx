"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Square, SquareCheck } from "@gravity-ui/icons";
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const onSubmit = async (e) => {
    const router = useRouter();
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const image = formData.get("photoUrl");
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
    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: image,
    });
   
    
    if(data){
      authClient.signOut()
      router.push("/auth/login")
    } else { 
    toast.error(error.message);
    }
  };
  return (
    <div className="w-11/12 mx-auto min-h-125">
      <div className="flex justify-center items-center flex-col border-t-7 border-[#004AC6] mt-5 bg-[#E1E2ED]/60 p-8 rounded-2xl">
        <h1 className="text-[#004AC6] font-bold text-3xl">SkillSphere</h1>
        <p className="text-[#434655] text-lg">
          Create your account to start leaning
        </p>
        <form className="mt-8" onSubmit={onSubmit}>
          <div className="flex flex-col justify-start gap-1">
            <label
              id="name"
              className="text-[#191B23] text-[15px] font-medium w-80"
            >
              Full name
            </label>
            <input
              name="name"
              type="text"
              required
              className="outline-[#004AC6] bg-white p-2 rounded-2xl"
              placeholder="Jhon Doe"
            />
          </div>
          <div className="flex flex-col justify-start gap-1 mt-3">
            <label
              id="photoUrl"
              className="text-[#191B23] text-[15px] font-medium w-80"
            >
              Photo URL
            </label>
            <input
              type="url"
              name="photoUrl"
              className="outline-[#004AC6] bg-white p-2 rounded-2xl"
              placeholder="Your photo url"
            />
          </div>
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
            {passwordErrors && (
              <p className="text-red-500 text-sm mt-1">{passwordErrors}</p>
            )}
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
            <p className="text-[#434655] text-[13px]">
              Must be at least 8 characters long.
            </p>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center gap-3 w-full bg-[#004AC6] rounded-xl cursor-pointer p-3 mt-5 text-white"
          >
            <ArrowRight /> Register
          </button>
          <p className="mt-4 text-[16px] text-[#434655]">
            Already have an account?
            <span className="text-[#004AC6]">
              <Link href={"/auth/login"}>Login</Link>
            </span>
          </p>
        </form>
        {/* <div className="p-2 mt-6 flex flex-col justify-center items-center">
            <p>Or</p>
            <button className="flex justify-center items-center gap-3 w-full border text-[15px] border-[#004AC6] rounded-xl cursor-pointer py-2 px-4 mt-3 text-black">
                <BsGoogle/>
                Login with Google
            </button>
        </div> */}
      </div>
    </div>
  );
};

export default SignupPage;
