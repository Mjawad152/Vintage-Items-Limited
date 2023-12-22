import React from 'react'
import './AdminDashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import EditProduct from './EditProduct';
import ProductsGrid from './ProductsGrid';
import UserProducts from "./UserProducts";
import { Link, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import { RxDashboard } from "react-icons/rx";
import ceoImage from '../ceopic.jpg';
import { MdMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Admindetails from './Admindetails';
export default function ProductEdit(props) {
  return (
    <>
    <div style={{height:"100%",width:"100%",position:'relative',marginTop:"130px"}}>
        <div className="grid-container">
        
        
        <div className="upper-row" style={{ display: "flex",  }}>
        <div className='container' style={{display:"flex,",alignSelf:"end",color:"black",}}><h3>  Vintage Items Limited</h3></div>
 
</div>


      <div className="left-column"  >
      <h3>Admin Dashboard</h3>

        <div >
          
          <h2 style={{color:'white'}}> </h2>
          <div className='dash'>
            <button type="button" className="btn btn-primary btn-lg" style={{color:'black',backgroundColor:"#dce4ee",border:"none"}}>  <Link  class="dropdown-item" to="/AdminDashboard/Admindetails"> <span ><MdMessage /></span>Dashboard</Link></button>
          <button type="button" className="btn btn-primary btn-lg" style={{color:'black',backgroundColor:"#dce4ee",border:"none"}}> <Link class="dropdown-item" to="/AdminDashboard/edit"><RxDashboard /> Add Products</Link></button>
            <button type="button" className="btn btn-primary btn-lg" style={{color:'black',backgroundColor:"#dce4ee",border:"none"}}><Link class="dropdown-item" to="/AdminDashboard/productgrid"><RiAdminFill /> Admin Product</Link></button>
            <button type="button" className="btn btn-primary btn-lg" style={{color:'black',backgroundColor:"#dce4ee",border:"none"}}><Link class="dropdown-item" to="/AdminDashboard/userProducts"><FaUsers /> User Products</Link> </button>
            <button type="button" className="btn btn-primary btn-lg" style={{color:'black',backgroundColor:"#dce4ee",border:"none"}}><MdMessage /> Messages</button>
            <button type="button" className="btn btn-primary btn-lg" style={{color:'black',backgroundColor:"#dce4ee",border:"none"}}><IoMdNotifications /> Notification</button>
            <button type="button" className="btn btn-primary btn-lg" style={{color:'black',backgroundColor:"#dce4ee",border:"none"}}><IoSettingsOutline /> Setting</button>


          
      <div className="card align-items-start" style={{marginLeft:"6px",marginTop:"5rem"}} >
        <div className="d-flex align-items-center">
          <div className="banner-image">
            <img
              src={ceoImage}
              alt="Admin Avatar"
              style={{ height: "100px", width: "100px",  }}
            />
          </div>
          <div className="ms-2">
            <h5 className="card-title">Admin</h5>
            <p className="card-text">Welcome</p>
          </div>
        </div>
      </div>
   
          </div>
        </div>









      </div>
      < div className="right-column" style={{height:'100%',width:'100%'}}>
      {props.type=="Admindetails" &&<Admindetails/>}
        {props.type=="edit" &&<EditProduct/>}
        {props.type=="productgrid" &&<ProductsGrid/>}
        {props.type=="userProducts" &&<UserProducts/> }
      


      </div>
    </div>
    </div>
  
    </>

  
  )
}



