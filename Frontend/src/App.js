import React from 'react'
import Footer from './Components/Footer';
import BackgroundVideo from './Components/BackgroundVideo';
import CustomNavbar from './Components/CustomNavbar';
import Admin from './Components/Admin';
import Slides from './Components/Slides';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import StaticNavbar from './Components/StaticNavbar';
import Products from './Components/Carosel';

import Advertise from './Components/Advertise';

import ContentAdver from './Components/ContentAdver';
import TopProduct from './Components/TopProduct';
import Boutique from './Boutique';
import AdminDashboard from './Components/AdminDashboard';
import EditProduct from './Components/EditProduct';
import ProductsGrid from './Components/ProductsGrid';
import { Carousel } from 'bootstrap';
import Carosel from './Components/Carosel';
import YourCart from './Components/Cart';
import CustomerDetail from './Components/CustomerDetail';
import Payment from './Components/Payment';
import PicText from './Components/PicText'
import Cart from './Components/Cart';
import ContactUs from './Components/ContactUs';
import Aboutus from './Components/Aboutus';
import Test from './Test';
import YourComponent from './Components/YourComponent';

import UserProducts from './Components/UserProducts';
import UserAdd from './Components/UserAdd';
import PracComp from './Components/PracComp';
import Fpractice from './Components/Fpractice';
import Admindetails from './Components/Admindetails';
import axios from 'axios';
import Login from './Components/Login';
import Signp from './Components/Signp';



function App() {

  axios.post('https://vintage-items-limited-api.vercel.app');
    return (

      <div >

      <Router>  
   
     <CustomNavbar/>
       <Routes>
          
          <Route path='/' element={<BackgroundVideo/>}/>
          
          <Route path='/UserAdd' element={<UserAdd/>}/>
          <Route path='/Shop' element={<TopProduct/>}/>
          <Route path='/Contact' element={<Footer/>}/>
          <Route path='/yourcart' element={<YourCart/>}/>
        
          <Route path='/AdminDashboard' element={<AdminDashboard />}/>
          <Route path='/AdminDashboard/edit' element={<AdminDashboard type="edit"/>}/>
          <Route path='/AdminDashboard/Admindetails' element={<AdminDashboard type="Admindetails"/>}/>
          <Route path='/AdminDashboard/productgrid' element={<AdminDashboard type="productgrid"/>}/>
          <Route path='/AdminDashboard/userProducts' element={<AdminDashboard type="userProducts"/>}/>
          <Route path='/Payment' element={<Payment/>}/>
          <Route path='/CustomerDetail' element={<CustomerDetail/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Contactus' element={<ContactUs/>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Signp' element={<Signp/>}/>
          <Route path='/Signuup' element={<Signp/>}/>
        </Routes>
        <Footer />
      </Router>





      </div>
     
    );

}

export default App;




