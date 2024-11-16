"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Denied = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-200 to-pink-400 flex items-center justify-center text-white">
      <div className="max-w-lg mx-auto p-8 bg-white text-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-500 text-center mb-6">
          Access Denied
        </h1>
        <p className="text-lg text-center mb-6">
          You do not have permission to access this page. It seems that your
          account does not have the necessary privileges to view this content.
        </p>

        <div className="flex justify-center gap-6">
          <button
            onClick={handleGoBack}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-400 transition duration-200"
          >
            Go Back
          </button>
          <button
            onClick={handleHome}
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-400 transition duration-200"
          >
            Go to Home
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            If you think this is a mistake, please contact support for
            assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Denied;
