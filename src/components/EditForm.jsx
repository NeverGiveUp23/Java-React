import React from 'react'
import { useEffect, useState } from 'react';
import StudentService from "../services/StudentService";


const EditForm = (props) => {
    const { id } = props
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    useEffect(() => {
        StudentService.getOneStudent(id)
            .then(res => {
                setName(res.data.name)
                setEmail(res.data.email)
            })
            .catch()
    }, [id])

    const handleSubmitService = (e) => {
        e.preventDefault();
        StudentService.updateStudent({ id, name, email })
            .then(res => {
                props.onUpdate();
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmitService}>
                <div className="row mb-3" >
                    <label className="col-sm-1 col-form-label">Name</label>
                    <div className="col-sm-4">
                        <input onChange={e => setName(e.target.value)} className="form-control" value={name} />
                    </div>
                    <label className="col-sm-1 col-form-label">Email</label>
                    <div className="col-sm-4">
                        <input onChange={e => setEmail(e.target.value)} className="form-control" value={email} />
                    </div>
                    <div className="col-sm-2">
                        <button className='btn btn-warning'> Confirm</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default EditForm