import Link from "next/link";
import React from "react";

const Nav = () => {
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
        </div>
      </nav>
    </header>
  );
};

export default Nav;
