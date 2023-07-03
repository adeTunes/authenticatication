import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

/**
 * 
 * 1. Setup input with necessary values
 * 2. Handling the submission of the form
 *   a. crreated an handler funcition to send our details to the backend
 *   b. we got the necessary endpoint to send the data to
 *   c. because its a POST request, we decalred our method as POST and we passed the data gotten from the user (input fields) to our body i.e the body property inside the second argument of the fetch function
 */

function SignUp() {
  const initialValues = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const [details, setDetails] = useState(initialValues);

  const { push } = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const res = await axios("http://24.199.116.88:8000/api/v1/rest-auth/signup/")
    // const data = res.data
    try {
      const res = await fetch(
        "http://24.199.116.88:8000/api/v1/rest-auth/signup/",
        {
          method: "POST",
          body: JSON.stringify(details),
        //   headers: {
        //     "Content/Type": "application/json",
        //     "API-KEY": "chbdaudbk6tw76sra7s6afuyatr67ar7rwat9",
        //     "Authorization": "Bearer chbdcbskjdcebslcjbl"
        //   }
        }
      );
      const data = await res.json();
      console.log(data);
    //   setDetails(initialValues);
      push("/login")
    } catch (error) {
      console.log(error);
    }
  };

//   LOGIN 
//  SIGN Up
// Programmtic redirect
// creating context
// using context

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[40%] mx-auto gap-2"
      >
        <Link href="/">home</Link>
        <input
          value={details.first_name}
          onChange={(e) =>
            setDetails({ ...details, first_name: e.target.value })
          }
          type="text"
          placeholder="first name"
        />
        <input
          value={details.last_name}
          onChange={(e) =>
            setDetails({ ...details, last_name: e.target.value })
          }
          type="text"
          placeholder="last name"
        />
        <input
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          type="text"
          placeholder="email"
        />
        <input
          value={details.username}
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
          type="text"
          placeholder="username"
        />
        <input
          value={details.password}
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          type="password"
          placeholder="password"
        />
        <input
          value={details.confirm_password}
          onChange={(e) =>
            setDetails({ ...details, confirm_password: e.target.value })
          }
          type="password"
          placeholder="confirm password"
        />
        <button type="submit" className="bg-blue-500 text-white ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
