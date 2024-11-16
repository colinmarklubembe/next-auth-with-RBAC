import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);

  return (
    <header className="bg-gray-600 text-white">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My Site</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/pages/createUser">Create User</Link>
          <Link href="/pages/member">Member</Link>
          <Link href="/pages/clientMember">Client Member</Link>
          <Link href="/pages/denied">Denied</Link>
          <Link href="/pages/public">Public</Link>

          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Sign Out</Link>
          ) : (
            <Link href="/api/auth/signin">Sign In</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
