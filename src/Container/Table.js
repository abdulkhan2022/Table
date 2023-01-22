import React from "react";
import AddRowForm from "./AddRowForm";
import Row from "./Row";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(),
    name: "Abdul Rahman",
    address: "Telaiya Dam, Koderma",
    emailid: "abdulrahmankhan1448@gmail.com",
    phoneNumber: 8319425125,
  },
  {
    id: nanoid(),
    name: "Kaish Mohammad Khan",
    address: "Barkakana, Ramghar",
    emailid: "khankaish10@gmail.com",
    phoneNumber: 9876543210,
  },
  {
    id: nanoid(),
    name: "Gulam Murtaza Khan",
    address: "Telaiya Dam Koderma jharkhand",
    emailid: "khankaish10@gmail.com",
    phoneNumber: 9854625852,
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ROW":
      return [...state, action.payload];
      case 'DELETE_ROW':
        return state.filter((rows)=>{
            return rows.id !== action.payload
        })
  }
};
export const appContext = React.createContext();

export default function Table() {
  const [data, dispatch] = React.useReducer(reducer, initialState);
  return (
    <appContext.Provider value={{ data: data, dispatch }}>
      <div>
        <table>
          <thead>
            <th>Name</th>
            <th>Address</th>
            <th>Email Id</th>
            <th>Phone Number</th>
          </thead>
          {data.map((data) => {
            return <Row data={data} />;
          })}
          <AddRowForm />
        </table>
      </div>
    </appContext.Provider>
  );
}
