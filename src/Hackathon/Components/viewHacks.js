import "../Actions/loginApi";
import { useState } from "react";
import loginApi from "../Actions/loginApi";
export default function Login() {
  const [hackathonItems, setItems] = useState([
    {
      technology: "",
      problem_statement: "",
      title: ""
    }
  ]);
  let tempHacks = [];
  let item = {};
  const addHacks = (e) => {
    let hackKey = e.target.id;
    let hackValue = e.target.value;
    item[hackKey] = hackValue;
  };
  const createHack = () => {
    let flag = true;
    Object.keys(item).map((ObjKey, index) => {
      console.log(item[ObjKey] == "", "index");
      if (!item[ObjKey]) {
        alert("Please fill all the fields");
        flag = false;
      } else if (index === 2 && flag) {
        tempHacks.push(item);
        setItems(tempHacks);
        alert("Your hackathon is created");
      }
    });
  };
  return (
    <div className="addHacksDiv">
      <h2>Create your own hackathon</h2>
      <div>
        <p>Please enter the following details to add your hackathon</p>
        Title : <input type="text" id="title" onChange={addHacks} required />
        Programming Language :{" "}
        <input id="technology" type="text" onChange={addHacks} required />
        Problem Statement :{" "}
        <input
          id="problem_statement"
          type="text"
          onChange={addHacks}
          required
        />
      </div>
      <div>
        <button type="submit" onClick={createHack}>
          Create
        </button>
      </div>
    </div>
  );
}
