import React, { useContext } from "react";
import EditRow from "./EditRow";
import SavedRow from "./SavedRow";
import { appContext } from "./Table";

export default function Row({ data }) {
  const { dispatch } = React.useContext(appContext);
  const [isEditEnable, setEditEnable] = React.useState(false);

  const deleteHandle = () => {
    console.log(data.id);
    dispatch({
      type: "DELETE_ROW",
      payload: data.id,
    });
  };
  const editHandle = (e) => {
    setEditEnable((prev) => {
      return !prev;
    });
  };
  return (
    <tbody>
      <td>{data.name}</td>
      <td>{data.address}</td>
      <td>{data.emailid}</td>
      <td>{data.phoneNumber}</td>
    </tbody>
  );
}
