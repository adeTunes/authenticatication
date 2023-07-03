import React, { useContext, useState } from "react";
import { AuthContext, ContextType } from "./_app";
import { useRouter } from "next/router";

function SignUp() {
  const initialValues = {
    email: "",
    password: "",
  };
  const [details, setDetails] = useState(initialValues);
  const { setUser } = useContext(AuthContext) as ContextType;
  const {push} = useRouter()
  const [error, setError] = useState("")

  // FORM DATA NOT JSON

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", details.email);
    formData.append("password", details.password);
    try {
      const res = await fetch(
        "http://24.199.116.88:8000/api/v1/rest-auth/signin/",
        {
          method: "POST",
          body: formData, // JSON.stringify(details)
        //   headers: {
        //     "Content-Type": "multipart/form-data"
        //   }
        }
      );
      const data = await res.json();
      if (data?.error) {
        setError(data?.error);
        return;
      }
      setUser(data);
      localStorage.setItem("my-user", JSON.stringify(data))
      push("/dashboard")
    } catch (error) {
      console.log("error-response", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[40%] mx-auto gap-2"
      >
        <input
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          type="text"
          placeholder="email"
        />
        <input
          value={details.password}
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          type="password"
          placeholder="password"
        />
        <button type="submit" className="bg-blue-500 text-white ">
          Submit
        </button>
        <p className="text-red-500 text-lg">{error}</p>
      </form>
    </div>
  );
}

export default SignUp;
