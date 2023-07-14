import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../Actions/EmployeeAction';

const AddEmployee = () => {

    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [salary, setSalary] = useState("");
    const [department,setDepartment] = useState("");
    const [gender,setGender] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();

       var params = new FormData();
       params.append("ename",name)
       params.append("salary",salary);
       params.append("department",department);
       params.append("gender",gender);

       dispatch(addEmployee(params));

    };

    return (<>
    <form method='POST' onSubmit={handleSubmit}>
        <h1 style={{ color: "blue" }}>-Add Employee Page-</h1>

        <table border="0" className='table'>
            <thead>
            <tr>
                    <th>Name</th>
                    <th><input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input></th>
                </tr>
                <tr>
                    <th>Salary</th>
                    <th><input type="text" value={salary} onChange={(e)=>setSalary(e.target.value)}></input></th>
                </tr>
                <tr>
                    <th>Department</th>
                    <th><input type="text" value={department} onChange={(e)=>setDepartment(e.target.value)}></input></th>
                </tr>
                <tr>
                    <th>Gender</th>
                    <th><input type="text" value={gender} onChange={(e)=>setGender(e.target.value)}></input></th>
                </tr>
                <button style={{ backgroundColor: "blue", color: "white" }} className='button-class' type="submit" >Add Employee</button>
            </thead>
            
        </table>
        </form>
    </>)
}

export default AddEmployee;