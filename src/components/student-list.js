import React,{useEffect, useState} from "react";
import axiosform from "axios";
import { Table } from "react-bootstrap"
import student-tablerow from "student-tablerow.js"

const StudentList = () => {
    const [student,setStudent] = useState([])
    useEffect(() => {
        axios
        .get("https://localhost:4000/student")
        .then(({data}) => {
            setStudent(data);
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
    const DataTable = () => {
        return student.map((res,i) => {
            return <student-tablerow obj={res} key={i}/>
        })
    }
    return(
        <div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roll</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    )
}
export default StudentList