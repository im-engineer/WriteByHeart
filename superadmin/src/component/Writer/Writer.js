import React,{useState, useEffect} from 'react'
import {Table} from "react-bootstrap";
import { writersList } from '../../service/authService';
import "./Writer.css"
function Writer() {
    const [writerList, setWriterList] = useState([])

    useEffect(() => {
        const list = async() => {
            try {
                const result = await writersList();
                setWriterList(result.data.result)
              } catch (error) {
                // Handle error
                console.log(`error : ${error}`);
              }
        }
        list();
    },[])
  return (
    <div className='Writer--list--page'>
        <h3 style={{float:"left",marginLeft:"8rem", color:"white"}}>Writer List</h3>
        <div >
            <Table  striped bordered hover className='writer--table' style={{color:"white", marginLeft:"8rem"}}>
                <thead >
                    <tr>
                        <th>No. of writers</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Contacts</th>
                        <th>Date of Birth</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
              {writerList.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.fullname}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.gender}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.dob}</td>
                    <td>{data.status}</td>
                  </tr>
                )
              })}
            </tbody>
            </Table>
        </div>
    </div>
  )
}

export default Writer