import React, { useContext } from "react";
import { AuthContext, ContextType } from "./_app";
import Link from "next/link";

function Dashboaard() {
  const { user } = useContext(AuthContext) as ContextType;
  return (
    <div>
      <strong>
        <Link href="/proofile">Go to profile</Link>
      </strong>
      Welome {user?.user?.first_name} {user?.user?.last_name}
      <p>here is your profile:</p>
      <img
        src={user?.user?.photo_url?.substring(62)}
        className="w-[40px] h-[40px] rounded-full object-cover"
        alt=""
      />
    </div>
  );
}

export default Dashboaard;