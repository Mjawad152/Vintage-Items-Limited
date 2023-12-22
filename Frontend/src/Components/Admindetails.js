import React, { useEffect, useState } from 'react';
import { getData } from '../Services/api';
import { getItems } from '../Services/api';
import "./Admindetails.css"
const Admindetails = () => {
  const [data, setData] = useState([]);
  const [ndata, setNdata] = useState([]);

  useEffect(() => {
    
      fetchData();
  }, []);

  const fetchData = async () => {
      try {
         
          const userDetail = await getData();
          console.log("rinng or not")
          
          setData(userDetail);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const items = await getItems();
      setNdata(items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };





  return (
    

<div className="grid-container" style={{width:"100%"}}>

      <div className="grid-item" >  <table className="custom-table">
       
      <thead>
        <tr>
          <th>Tracking Number</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Stock</th>
          <th>Type</th>
          <th>Available Units</th>
          <th>Build Year </th>
          <th>Sale Price</th>
          <th>Bought Price</th>
          <th>Images</th>
        </tr>
      </thead>
      <tbody>
     {ndata.map((item) => (
          <tr >
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td> {item.category}</td>
            <td> {item.description}</td>
            <td>{item.stock}</td>
            <td>{item.type}</td>
            <td>{item.available}</td>
            <td>{item.buildyear}</td>
            <td>{item.price}</td>
            <td>{item.admprice }</td>
            <td><img src={item.image} alt="" style={{width:"40px",height:"40px"}} /></td>
          </tr>
        ))} 
      </tbody>
    </table></div>
     

    </div>

  
  );
};
export default Admindetails;