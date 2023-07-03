import React, { useContext } from "react";
import { AuthContext, ContextType } from "./_app";

function Proofile() {
  const { user,company } = useContext(AuthContext) as ContextType;
  return <div>
    first name: {user?.user?.first_name}
    last name: {user?.user?.last_name}
    email: {user?.user?.email}
    <strong>Your company: {company}</strong>
  </div>;
}

export default Proofile;
