import "../Actions/loginApi";
import { useState } from "react";
import loginApi from '../Actions/loginApi';
export default function Login() {
  const [empid, setEmpId] = useState("");
  const setEmployeeId = (e) => {
    if (e.target.value) {
      setEmpId(e.target.value);
    }
  };
  const getEmpId = () => {
    let flagEmp = true;
    let msg = "";
    loginApi(empid,(message,flag)=>{
     flagEmp = flag
     msg = message
    })
    flagEmp ? alert(msg) : "";
  }
  return (
    <div>
      <h2>Login to HappLabs Hackathon</h2>
      <div>
        <p>Please enter your employee Id for authentication</p>
        Employee Id : <input type="text" onChange={setEmployeeId}/>
      </div>
      <div>
        <button type="submit" onClick={getEmpId}>Submit</button>
      </div>
    </div>
  );
}
