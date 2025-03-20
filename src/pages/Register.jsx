import axios from "axios";
import { useEffect, useState } from "react";

export const Register = () => {
  const [, setRegister] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function getRegister() {
      const register = await axios.get(
        `https://nt-devconnector.onrender.com/api/users`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setRegister(register.data);
    }
    getRegister();
  }, []);

  console.log(register);


  return <div>

{register.map((register) => {
      return (
        <div className="w-[450px] mx-auto border-4 mt-[30px] text-center pt-[15px] pb-[15px] ">
          <h1>{register.name}</h1>
          <h2>{register.email}</h2>
          <h2>{register.password}</h2>
        </div>
      )
    })}
   
  </div>

};




















// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   let [fullname, setFullname] = useState("");
//   let [email, setemail] = useState("");
//   let [password, setpassword] = useState("");
//   let navigate = useNavigate();

//   async function handleSubmit(e) {
//     try {
//       e.preventDefault();
//       console.log(fullname, email, password);

//       let response = await axios.post(
//         `https://nt-devconnector.onrender.com/api/users${id}`,
//         { fullname, email, password }
//       );

//       localStorage.setItem("accessToken", response.data.accessToken);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//       navigate("/profile");

//       console.log(response.data.accessToken);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div>
      
     
//     </div>
//   );
// };

// export default Register;

// /*

// <form action="" onSubmit={handleSubmit}>
//         <label>
//           <span>Full name</span>
//           <input type="text" onChange={(e) => setFullname(e.target.value)} />
//         </label>
//         <label>
//           <span>Email</span>
//           <input type="text" onChange={(e) => setemail(e.target.value)} />
//         </label>
//         <label>
//           <span>Password</span>
//           <input type="text" onChange={(e) => setpassword(e.target.value)} />
//         </label>

//         <button>submit</button>
// <form>
// */