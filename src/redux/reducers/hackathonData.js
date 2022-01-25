import { initialState } from "../initialState";
import * as HackCrud from "../constants/hackathonCRUD";

export default function HackathonData(state = initialState, action) {
console.log(action,"red");
  switch (action.type) {
    case HackCrud.ADD_HACKS: {
      return { ...state,
      hackathonArr: action.payload.newHacks
    }
    }
    default:
      return state;
  }
}
