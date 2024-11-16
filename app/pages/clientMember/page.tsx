"use client";
import { useSession } from "next-auth/react";

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

  return (
    <div>
      <h1>Client Member Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default ClientMember;
