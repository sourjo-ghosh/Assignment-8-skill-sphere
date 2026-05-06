"use client";

import Link from "next/link";
import { authClient } from "../lib/auth-client";
import Image from "next/image";
import { ArrowRight } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

const updateProfilePage = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  //   console.log(session);
  const userName = session?.user?.name; // "Joy Ghosh"
  const createdAt = session?.session?.createdAt; // "Joy Ghosh"
  //   console.log(createdAt);
  const userEmail = session?.user?.email; // "joyg03426@gmail.com"
  const userPhoto = session?.user?.image; // photo URL
  const onSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    const formData = new FormData(form);
    // Handle form submission logic here
    // const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const image = formData.get("photoUrl");
    const updatedName = name?.trim() || userName;
    const updatedImage = image?.trim() || userPhoto;
    // const { data, error } = await authClient.signUp.email({
    //   name: name, // required
    //   email: email, // required
    //   password: password, // required
    //   image: image,
    // });
    try {
      const { data, error } = await authClient.updateUser({
        name: updatedName,
        image: updatedImage,
      });
      if (data) {
        toast.success("Profile updated successfully!");
        setTimeout(() => {
          router.refresh();
          router.push("/user-profile");
        }, 1500);
      }
      if (error) {
        toast.error(error.message);
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />
      <div className=" min-h-100 w-11/12 mx-auto flex justify-center items-center">
        <div className="bg-[#F8F7FF] rounded-2xl w-200 h-auto p-6 my-5 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={userPhoto}
              alt={userName}
              width={100}
              height={100}
              className="object-cover p-2 border rounded-full border-blue-700"
            ></Image>
            <div className="flex justify-start flex-col">
              <p className="mt-3 text-black text-2xl font-semibold">
                {userName}
              </p>
              <p className="text-black text-xl font-semibold">{userEmail}</p>
              <p className=" text-gray-600 text-sm font-medium">
                Enrolled{" "}
                {new Date(createdAt).toLocaleDateString("en-BD", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
          {/* <button className="mt-5 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
            <Link href={`/update-profile`}>Update Profile</Link>
          </button> */}

          <div>
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
              <button
                type="submit"
                className="flex justify-center items-center gap-3 w-full bg-[#004AC6] rounded-xl cursor-pointer p-3 mt-5 text-white"
              >
                <ArrowRight /> Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default updateProfilePage;
