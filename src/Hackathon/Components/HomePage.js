import { useState, useEffect } from "react";
import "../Css/hacks.css";
import { useDispatch, useSelector } from "react-redux";

export default function HackathonHome() {
  const [todo, setTodo] = useState([
    "Explore hackthon",
    "What's your hackathon idea"
  ]);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const redirect = (e) => {
    if (e.target.id === 0) {
      window.href.location = "/view";
    } else {
     window.location.href = "/addhacks"
    }
  };
  return (
    <div className="hackathonMainDiv">
      <h1>Welcome to HappLabs Hackathon </h1>
      <div className="hackathonDescriptionDiv">
        Hi user, this space lets you explore umpteen hackathon ideas, which you
        can brainstorm and practice to improve your Tech knowledge.You can also
        contribute by adding your own ideas to the hackathon and let the world
        know the genius inside you.
      </div>
      <div className="hackathonOptionsDiv">
        <ul>
          {todo.map((item, index) => {
            return (
              <li id={index} className="hackathonOptionsList" onClick={redirect}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
