"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "../../redux/store";
import { getResources } from "@/redux/slices/mainSlice";
import { differenceInYears } from "date-fns";

// Components
import { CardWithList } from "../../components";

// types
import { User } from "../../types/user-list";

export default function Home() {
  const [visibleUsers, setVisibleUsers] = useState<number>(10);
  // Initialize useDispatch to dispatch Redux actions
  const dispatch = useDispatch();

  // Select the 'cardDetails' data from the Redux store using useSelector
  const { cardDetails, loading } = useSelector((state) => state.cards);
  const users = cardDetails.users;

  // useEffect hook to dispatch 'getResources' action when the component mounts
  useEffect(() => {
    dispatch(getResources());
    const handleScroll = () => {
      // Jika pengguna telah mencapai bagian bawah halaman
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        handleLoadMore();
      }
    };

    // Tambahkan event listener untuk mendeteksi peristiwa scroll
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  // the age of each user in the next 10 years
  const calculateAge = (birthDate: number) => {
    const age = differenceInYears(new Date(), new Date(birthDate));
    return age;
  };

  const handleLoadMore = () => {
    setVisibleUsers((prevVisibleUsers) => prevVisibleUsers + 20);
  };

  if (!users || users.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    ); // Handle case when data is not available
  }

  return (
    <main className="container mx-auto mt-8">
      <div className="w-full p-4 rounded-lg shadow sm:p-8 bg-white mb-12">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 ">
            Age Tracker
          </h5>
          <button
            onClick={handleLoadMore}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View all
          </button>
        </div>
        <div className="flow-root">
          {users.slice(0, visibleUsers).map((user: User, index: number) => (
            <CardWithList
              key={index}
              photos={user.image}
              username={user.firstName}
              email={user.email}
              umur={calculateAge(user.birthDate)}
              masadepan={calculateAge(user.birthDate) + 10}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
