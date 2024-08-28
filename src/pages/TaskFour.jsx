import React, { useState } from "react"; 
// import { useRouter } from "next/router";
// import { setCookie } from "nookies";

const TaskFour = () => {
//   const [currentState, setCurrentState] = useState("Sign Up");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === "nabin" && password === "password") {
//       setCookie(null, "auth", "true", { path: "/taskfour" });
//       router.push("/dashboard");
//     } else {
//       alert("Invalid username or password");
//     }
//   };

  return (
    <div>TaskFour could't do</div>
    // <form
    //   onSubmit={handleLogin}
    //   className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    // >
    //   <div className="inline-flex items-center gap-2 mb-2 mt-10">
    //     <p className="prata-regular text-3xl">{currentState}</p>
    //     <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
    //   </div>
    //   {currentState === "Sign Up" && (
    //     <input
    //       type="email"
    //       className="w-full px-3 py-2 border border-gray-800"
    //       placeholder="Email"
    //       required
    //     />
    //   )}
    //   <input
    //     type="text"
    //     className="w-full px-3 py-2 border border-gray-800"
    //     value={username}
    //     placeholder="Name"
    //     onChange={(e) => setUsername(e.target.value)}
    //     required
    //   />
    //   <input
    //     type="password"
    //     className="w-full px-3 py-2 border border-gray-800"
    //     placeholder="Password"
    //     onChange={(e) => setPassword(e.target.value)}
    //     required
    //   />
    //   <div className="w-full flex justify-between text-sm mt-[-8px]">
    //     <p className="cursor-pointer">Forget Password ?</p>
    //     {currentState === "Login" ? (
    //       <p
    //         onClick={() => setCurrentState("Sign Up")}
    //         className="cursor-pointer"
    //       >
    //         Create Account
    //       </p>
    //     ) : (
    //       <p
    //         onClick={() => setCurrentState("Login")}
    //         className="cursor-pointer"
    //       >
    //         Already User!
    //       </p>
    //     )}
    //   </div>
    //   <button type="submit" className="bg-black text-white font-light px-8 py-2 mt-4">
    //     {currentState === "Login" ? "Sign In" : "Sign Up"}
    //   </button>
    // </form>
  );
};

export default TaskFour;
