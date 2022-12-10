import React from "react";
import "./styles.css";
import {links} from  "../../assets/images nav-bar.js"

export default function Lnav({selectedItem,setSelectedItem}){
  
    return(
    <div className="outer-lnav">
  {links.map((item,index)=>(
    <div key={index} 
    onClick={()=>setSelectedItem(index)}
    className={`Lnav-div  ${selectedItem == index && "SelectLnav-div"} `}>
 <img  src={item.imgSrc} className= "Lnav-item-img" ></img>
 <p className= "Lnav-label"> {item.label}</p>
 </div>
  ))}  
 
</div>
    );

}