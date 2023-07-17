import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import '../App.css';
import { DeleteProducts, editProduct, getProducts } from '../Actions/ProductAction';

const ViewProducts = () => {

    //Take Varible From Product Reducers
    let { loading, data, error } = useSelector((state) => state.product);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])


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



    //HandleDelet Method----------    
    const handleDelete = (pid) => {
        dispatch(DeleteProducts(pid));
    };



    //Handle Edit Method----------    
    const handleEdit = (pid) => {
        dispatch(editProduct(pid));
    };


    
    //return Strat Here:-----------
    return (<>

        <h1 style={{ color: "red" }}>-View Product Page-</h1>

        <table className='table' border='0'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((obj, index) => {
                    return <tr>
                        <td>{obj.pid}</td>
                        <td>{obj.price}/-</td>
                        <td>{obj.pname}</td>
                        <td>{obj.added_datetime}</td>
                        <td><button style={{ backgroundColor: "lightslategrey", color: "white", fontWeight: "bolder" }} type="button" onClick={(e) => handleDelete(obj.pid)}>X</button>
                            <button style={{ backgroundColor: "lightslategrey", color: "white", fontWeight: "bolder" }} type="button" onClick={(e) => handleEdit(obj.pid)}>Edit</button></td>
                    </tr>
                })}
            </tbody>
        </table>

    </>)
}

export default ViewProducts;