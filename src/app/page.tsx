"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="m-56">
      <div className="max-w-sm bg-white border justify-center align-center mx-auto border-blue-600 rounded-lg shadow">
        <div className="p-5">
          <Link href="/tracker">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Muhamad Hafid Kurnianton
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 ">
            Taking data with the Axios library and storing the data in Redux,
            the application can display the current age of each user and the age
            of each user in the next 10 years using the date-fns library,
          </p>
          <Link
            href="/tracker"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Go Here
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
