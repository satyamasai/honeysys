import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./ProductTable.css"
const ProductTable = (props) => {
// const [products,setProducts]= useState([]);


// useEffect(() => {
//     axios.get('http://localhost:8000/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

// console.log(products)
  return (

        <table>
          <thead>
            <tr>
            <th>Id</th>
            <th>Image</th>
              <th>Product Name</th>
              <th>Brand Name</th>
              <th>Product Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {props.data?.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className='p_image'><img src={product.image_URL} alt="P_image"/></td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default ProductTable