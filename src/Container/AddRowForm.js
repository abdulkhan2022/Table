import React from "react";
import { appContext } from "./Table";
import { nanoid } from "nanoid";


export default function AddRowForm() {
  const { dispatch } = React.useContext(appContext);
  const [formData, setFormData] = React.useState({
    name: "",
    address: "",
    emailid: "",
    phoneNumber: "",
  });
  const formChangeaHandle = (event) => {
    setFormData((prev) => {
      return { ...prev, nanoid:nanoid() ,[event.target.name]: event.target.value };
    });
  };
  const saveButtonHandel = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ROW",
      payload: formData,
    });
    setFormData({
        name: "",
        address: "",
        emailid: "",
        phoneNumber: "",
      });
  };
  return (
    <tbody>
      <td>
        <input
          className="inputForNewRow"
          type="text"
          placeholder="Type your Name..."
          value={formData.name}
          name="name"
          onChange={formChangeaHandle}
          required
          ></input>
      </td>
      <td>
        <input
          required
          className="inputForNewRow"
          type="text"
          placeholder="Type your Address..."
          value={formData.address}
          name="address"
          onChange={formChangeaHandle}
          ></input>
      </td>
      <td>
        <input
          required
          className="inputForNewRow"
          type="text"
          placeholder="Type your emailid..."
          value={formData.emailid}
          name="emailid"
          onChange={formChangeaHandle}
          ></input>
      </td>
      <td>
        <input
          className="inputForNewRow"
          required
          type="number"
          placeholder="Type your phone Number..."
          value={formData.phoneNumber}
          name="phoneNumber"
          onChange={formChangeaHandle}
        ></input>
      </td>
      <td>
        <button className="saveButton" onClick={saveButtonHandel}>
          Save
        </button>
      </td>
    </tbody>
  );
}
