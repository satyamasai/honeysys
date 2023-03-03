import axios from "axios";
import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [des, setDes] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(e.target);
    const data = {
      name,
      brand,
      description: des,
      image_URL: url,
      price,
      carousel:isChecked
    };
    // console.log(isChecked);
   await axios.post("http://localhost:8000/products",data)
    .then(res=>{console.log(res.status)
    window.location.reload()
    })
    .catch(err=>console.log(err))
  };
  console.log();

  return (
    <div className="form_div">
      <form className="form" onSubmit={handleSubmit}>
        <label for="fname">Product name:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="pname"
        />
        <br />
        <label for="bname">Brand:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setBrand(e.target.value)}
          id="bname"
          name="bname"
        />
        <br />

        <label for="url">Product url:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setUrl(e.target.value)}
          id="url"
          name="url"
        />

        <br />
        <label for="price">Price:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          id="price"
          name="price"
        />

        <br />

        <label for="des">Product description :</label>
        <br />
        <input
          type="text"
          onChange={(e) => setDes(e.target.value)}
          id="des"
          name="des"
        />
        <br />
        <br />
        <label for="carousel"> Carousel</label>

        <br />
        <input
          onChange={(e) => setIsChecked(e.target.checked)}
          type="checkbox"
          id="carousel"
          name="carousel"
          value={true}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
