"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

const ClientMember = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return {
        redirect: {
          destination: "/api/auth/signin?callbackUrl=/pages/clientMember",
          permanent: false,
        },
      };
    },
  });

  const router = useRouter();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/pages/member");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome, {session.user?.name || "User"}!
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Here’s a summary of your session and profile information.
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
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-400 transition"
          >
            Go to Home
          </button>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-400 transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientMember;
