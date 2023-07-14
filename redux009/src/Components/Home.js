import React from 'react';
import ViewProducts from './ViewProducts';
import ViewEmployee from './ViewEmployee';
import AddProduct from './AddProduct';
import AddEmployee from './AddEmployee';
const Home = () => {



    return (<>

        <div className='container'>
            <h1 className='text-center' style={{fontSize:"50px",fontWeight:"bolder",fontFamily:"revert",color:"maroon"}}>#HOME#</h1>
            <div className='row d-flex text-center'>
            <div className='col-6'>
                    <AddProduct />
                </div>
                <div className='col-6'>
                   <AddEmployee/>
                </div>
                <div className='col-6'>
                    <ViewProducts />
                </div>
                <div className='col-6'>
                   <ViewEmployee/>
                </div>
            </div>
        </div>


    </>)
}

export default Home