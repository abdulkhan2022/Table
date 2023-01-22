import React, { Fragment } from 'react'

export default function SavedRow({data, editHandle, isEditEnable, deleteHandle}) {
  
  return (<Fragment>
    <td>{data.name}</td>
    <td>{data.address}</td>
    <td>{data.emailid}</td>
    <td>{data.phoneNumber}</td>
    

    </Fragment>
  )
}
