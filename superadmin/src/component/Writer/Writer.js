import React from 'react'
import {Table} from "react-bootstrap"

function Writer() {
  return (
    <div className='Writer--list--page'>
        <h3 style={{float:"left",marginLeft:"8rem", color:"white"}}>Writer List</h3>
        <div className='writer--table'>
            <Table  striped bordered hover style={{color:"white", marginLeft:"8rem"}}>
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Contacts</th>
                        <th>Date of Birth</th>
                        <th>Total Poetry</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </Table>
        </div>
    </div>
  )
}

export default Writer