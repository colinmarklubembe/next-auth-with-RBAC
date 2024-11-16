import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <nav className="flex justify-between items-center w-full px-8 py-4">
        <div className="text-2xl font-bold tracking-wide">
          Next Auth Tutorial
        </div>
        <div className="flex items-center gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/pages/createUser", label: "Create User" },
            { href: "/pages/member", label: "Member" },
            { href: "/pages/clientMember", label: "Client Member" },
            { href: "/pages/public", label: "Public" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium hover:text-gray-300 transition-colors duration-200 no-underline hover:underline"
            >
              {item.label}
            </Link>
          ))}
          {session ? (
            <Link
              href="/api/auth/signout?callbackUrl=/"
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 no-underline"
            >
              Sign Out
            </Link>
          ) : (
            <Link
              href="/api/auth/signin"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 no-underline"
            >
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
