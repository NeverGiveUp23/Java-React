import axios from "axios";
import StudentService from "../services/StudentService";
import React, { useState } from "react";
const StudentForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit2 = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/api/students",
            {name, email},
            {headers: {
                'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                props.onCreate()
            })
            .catch(err => console.log(err))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        StudentService.createStudent({ name, email })
            .then(res => {
                props.onCreate()
                // setName("")
                // setEmail("")
            })
            .catch(err => console.log(err))
    }


    return(
        <div>
            <h1>Create A Student</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Name</p>
                    <input onChange={e => setName(e.target.value)} className='form-control'/>
                </div>
                <div>
                    <p>Email</p>
                    <input onChange={e => setEmail(e.target.value)} className='form-control'/>
                </div>
                <button className='btn btn-success'>Add</button>
            </form>
        </div>
    )
}
export default StudentForm;