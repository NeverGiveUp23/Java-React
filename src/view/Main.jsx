import React, {useState, useEffect} from "react";
import StudentForm from "../components/StudentForm";
import StudentService from "../services/StudentService";
import Dashboard from "../components/dashboard";



const Main = () => {
    const [students, setStudents] = useState([]);
    const [refresh, setRefresh] = useState(true)

    const updateList = ()=>{
        setRefresh(!refresh);
    }

    useEffect(()=>{
        StudentService.getStudents()
            .then(res=>{
                setStudents(res.data)
                updateList()
            })
            .catch(err=>console.log(err.response))
    },[refresh])

    const filterList = (id)=>{
        const filterStudent = students.filter((eachStu, i)=> eachStu.id !== id)
        setStudents(filterStudent)
    }




    return (
        <div className='container mt-5'>
            <Dashboard students={students} onUpdate={updateList} />
            <StudentForm onCreate={updateList}/>
        </div>
    )
}

export default Main