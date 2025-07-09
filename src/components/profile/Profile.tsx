"use client";
import { JWTDecode } from "@/utils/jwt";
import { LogOut, User } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { logOut } from "@/redux/features/auth/authSlice";

const Profile = () => {
  const { decoded } = JWTDecode();
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setShow(!show)}
        className="flex cursor-pointer items-center gap-1 border p-1 rounded-xl"
      >
        <User></User>
        <p>{decoded?.userName}</p>
      </div>
      {show && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute top-12 right-0 z-10 w-48 rounded-md border bg-white p-2 shadow-lg"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/profile/overview"
                className="cursor-pointer hover:bg-gray-100 p-2 rounded-md transition"
              >
                Manage Profile
              </Link>
              <Link
                href="/profile/appoinments"
                className="cursor-pointer hover:bg-gray-100 p-2 rounded-md transition"
              >
                View Appoinments
              </Link>
              <Link
                href="/profile/favourite"
                className="cursor-pointer hover:bg-gray-100 p-2 rounded-md transition"
              >
                Favourite Services
              </Link>
              <Link
                href="/profile/settings"
                className="cursor-pointer hover:bg-gray-100 p-2 rounded-md transition"
              >
                Settings
              </Link>

              <button
                onClick={() => {
                  dispatch(logOut());
                }}
                className="w-full text-left text-red-500 hover:bg-red-50 p-2 rounded-md flex items-center gap-2 transition"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Profile;
