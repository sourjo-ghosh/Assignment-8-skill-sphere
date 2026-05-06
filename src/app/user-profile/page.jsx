"use client";

import Link from "next/link";
import { authClient } from "../lib/auth-client";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { PersonFill } from "@gravity-ui/icons";


const UserProfile = () => {
  const { data: session } = authClient.useSession();
//   console.log(session);
  const userName = session?.user?.name; // "Joy Ghosh"
  const createdAt = session?.session?.createdAt; // "Joy Ghosh"
//   console.log(createdAt);
  const userEmail = session?.user?.email; // "joyg03426@gmail.com"
  const userPhoto = session?.user?.image; // photo URL
  return (
    <div className=" min-h-100 w-11/12 mx-auto flex justify-center items-center">
      <div className="bg-[#F8F7FF] rounded-2xl w-200 h-auto p-6 my-5 flex flex-col justify-center items-center">
        <Image
          src={userPhoto}
          alt={userName}
          width={150}
          height={150}
          className="object-cover p-2 border rounded-full border-blue-700"
        ></Image>
        <p className="mt-3 text-black text-2xl font-bold flex gap-2 justify-center items-center">
            <PersonFill/>
            {userName}</p>
        <p className="text-black text-xl font-semibold flex gap-2 justify-center items-center">
            <TfiEmail/>
            {userEmail}</p>
        <p className=" text-gray-600 text-sm font-medium">
          Enrolled{" "}
          {new Date(createdAt).toLocaleDateString("en-BD", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <button className="mt-5 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
          <Link href={`/update-profile`}>Update Profile</Link>
        </button>

        <div></div>
      </div>
    </div>
  );
};

export default UserProfile;
