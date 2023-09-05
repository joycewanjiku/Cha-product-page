import React from "react";
import './style.css'
// import {FaPinterest,FaInstagram,FaTwitter,FaFacebook} from 'react-icons/fa'

const Footer=()=>{
return(
<div className="big">
    <div>
       <b>EcoConnect</b> 
       <p>Continue EcoConnect 2023 all rights reserved</p>
       <br />
       <b>Follow Us On</b>
       {/* <p className=""><FaPinterest/>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <FaInstagram/>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<FaTwitter/> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<FaFacebook/> &nbsp; &nbsp; &nbsp; &nbsp;</p> */}
    </div>
    <div>
        <b>Menu</b>
        <p>Home</p>
        <p>Offers</p>
        <p>Service</p>
        <p>About us</p>
    </div>
    <div>
<b>Information</b>
<p>Menu</p>
<p>Quality</p>
<p>Make a choice</p>
<p>Salad with vegetable</p>
<p>Fast Delivery</p>
<p>Subscribe</p>
    </div>
    <div>
        <b>Contact</b>
        <p>+123456789</p>
        <p>Explore</p>
        <p>Info@Foodish.Com</p>
        <p>1245,New York,USA</p>
    </div>
</div>
);
}
export default Footer