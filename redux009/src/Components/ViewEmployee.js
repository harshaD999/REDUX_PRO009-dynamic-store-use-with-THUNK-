import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import '../App.css';
import { DeleteEmployee, EditEmployee, getEmployee } from '../Actions/EmployeeAction';

const ViewEmployee = () => {


    let { loading, data, error } = useSelector((state) => state.employee);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployee());
    }, [dispatch]);

    // if (loading) {
    //     return (<>
    //         <h2>Loading...</h2>
    //     </>);
    // }

    if (error != "") {
        return (<>
            <h2>{error}</h2>
        </>);
    }

    const handleDelet = (eid) => {
        dispatch(DeleteEmployee(eid));
    }
    const handleEdit = (eid) => {
        dispatch(EditEmployee(eid));
    }
    

    return (<>

        <h1 style={{ color: "blue" }}>-View Employee Page-</h1>

        <table className='table' border='0'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Salary</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((obj, index) => {
                    return <tr>
                        <td>{obj.eid}</td>
                        <td>{obj.salary}</td>
                        <td>{obj.department}</td>
                        <td>{obj.gender}</td>
                        <td>
                            <button style={{ backgroundColor: "lightslategrey", color: "white", fontWeight: "bolder" }} type="button" onClick={(e)=>handleDelet(obj.eid)}>x</button>
                        
                            <button style={{ backgroundColor: "lightslategrey", color: "white", fontWeight: "bolder" }} type="button" onClick={(e)=>handleEdit(obj.eid)}>Edit</button>                       
                        </td>
                    </tr>
                })}
            </tbody>
        </table>

    </>)
}

export default ViewEmployee;