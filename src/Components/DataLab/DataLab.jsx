import React from "react";
import "./DataLab.css";
let temp=[]
const DataLab =(props) => {
   const data= props.data
   temp = data.filter((el) => el.carousel == false);

  return (
    <div className="data_lab">
    { temp.map((el)=>(

        <div className="card">
        
        <img src={el.image_URL} alt="p_image"/>
        <p>Name : {el.name}</p>
        <p>Brand : {el.brand}</p>
        <p>Price : {el.price}</p>
       
        
        </div>

  ))}
   
    </div>
  );
};

export default DataLab;
