import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

const Member = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/pages/member");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-yellow-100 text-gray-800">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Server Session Details
        </h1>
        <p className="text-center text-gray-600 mb-12">
          You are currently authenticated via a server session.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Profile Details
          </h2>
          <p className="text-gray-600">
            <strong>Email:</strong> {session.user?.email || "Not provided"}
          </p>
          <p className="text-gray-600">
            <strong>Role:</strong> {session.user?.role || "Not assigned"}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Session Details
          </h2>
          <p className="text-gray-600">
            <strong>Expires:</strong>{" "}
            {session?.expires
              ? new Date(session.expires).toLocaleString()
              : "Unknown"}
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-400 transition"
          >
            Go to Home
          </Link>
          <Link
            href="/api/auth/signout?callbackUrl=/"
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-400 transition"
          >
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Member;
