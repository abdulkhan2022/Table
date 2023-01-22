import React, { Fragment } from 'react'

export default function EditRow({data, isEditEnable , deleteHandle ,editHandle}) {
    const[localData , setLocalData] = React.useState({
        name: "",
        address: "",
        emailid: "",
        phoneNumber: '',
      })
      const editHandleTwo = ()=>{

      }
    return (
    <Fragment>
      <td>
        <input
          className="inputForNewRow"
          type="text"
          placeholder="Type your Name..."
          value={data.name}
          name="name"
          required
          ></input>
      </td>
      <td>
        <input
          required
          className="inputForNewRow"
          type="text"
          placeholder="Type your Address..."
          value={data.address}
          name="address"
          ></input>
      </td>
      <td>
        <input
          required
          className="inputForNewRow"
          type="text"
          placeholder="Type your emailid..."
          value={data.emailid}
          name="emailid"
          ></input>
      </td>
      <td>
        <input
          className="inputForNewRow"
          required
          type="number"
          placeholder="Type your phone Number..."
          value= {data.phoneNumber}
          name="phoneNumber"
        ></input>
      </td>
      
    </Fragment>
  )
}
