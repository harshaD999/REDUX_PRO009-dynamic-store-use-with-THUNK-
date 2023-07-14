import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateProduct, addProduct, updateProduct } from '../Actions/ProductAction';



const AddProduct = () => {


  let operation = useSelector((state)=>state.product.operation);
  let sinlgedata = useSelector((state)=>state.product.sinlgedata);
  let isactioncompleted = useSelector((state)=>state.product.isactioncompleted);



  const dispatch = useDispatch();
  
  const [pid, setPid] = useState("");
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  useEffect(()=>{
    if(sinlgedata!=null)
    {
      setName(sinlgedata["pname"]);
      setQty(sinlgedata["qty"]);
      setPrice(sinlgedata["price"]);
      setPid(sinlgedata["pid"]);
    }
  },[sinlgedata]);

  useEffect(()=>{
      setPid("");
      setName("");
      setQty("");
      setPrice("");
  },[isactioncompleted]);

  const handleSubmit = (e) => {
    e.preventDefault();

    var params = new FormData();
    params.append("pname", name);
    params.append("qty", qty);
    params.append("price", price);
  
     dispatch(addProduct(params));
  };

  // Update Product Method
  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    var params = new FormData();
    params.append("pname", name);
    params.append("qty", qty);
    params.append("price", price);
    params.append("pid", pid);
  
    dispatch(updateProduct(params));


  };

  
  return (<>
    {(operation=="insert")?<form method='POST' onSubmit={handleSubmit}>
      <h1 style={{ color: "red" }}>-Add Product Page-</h1>
      <table border="0" className='table'>
        <thead>
          <tr>
            <th>Product Name</th>
            <th><input type="text" value={name} onChange={(e) => setName(e.target.value)}></input></th>
          </tr>
          <tr>
            <th>Product Qty</th>
            <th><input type="text" value={qty} onChange={(e) => setQty(e.target.value)}></input></th>
          </tr>
          <tr>
            <th>Product Price</th>
            <th><input type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input></th>
          </tr>
        </thead>
        <button style={{ backgroundColor: "blue", color: "white" }} className='button-class' type="submit" >Add Product</button>
      </table>
    </form>:<form method='POST' onSubmit={handleUpdateSubmit}>
      <h1 style={{ color: "red" }}>-Update Product Page-</h1>
      <table border="0" className='table'>
        <thead>
          <tr>
            <th>Product Name</th>
            <th><input type="text" value={name} onChange={(e) => setName(e.target.value)}></input></th>
          </tr>
          <tr>
            <th>Product Qty</th>
            <th><input type="text" value={qty} onChange={(e) => setQty(e.target.value)}></input></th>
          </tr>
          <tr>
            <th>Product Price</th>
            <th><input type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input></th>
          </tr>
        </thead>
        <button style={{ backgroundColor: "blue", color: "white" }} className='button-class' type="submit" >Update Product</button>
      </table>
    </form>}

  </>)
}

export default AddProduct;