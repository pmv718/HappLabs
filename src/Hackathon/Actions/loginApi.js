import { employeeData } from "../Components/employeeList";
const data = require("../Components/employeeList");
function login(input, callback) {
  const employeeListArr = data[0].employeeList;
  console.log("api", input);
  const userId = input;
  if (isNaN(parseInt(userId))) {
    callback("Please enter a valid employee id", false);
  } else {
      for(let i = 0; i < employeeListArr.length ; i++) {
      if (employeeListArr[i].empid == userId) {
        window.location.href = "/hacks"
        callback("Login success", true);
        break;
      } else callback("Invalid credentials", true);
    }
  }
}
export default login;
