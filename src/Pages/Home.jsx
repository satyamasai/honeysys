import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import DataLab from "../Components/DataLab/DataLab";
import Form from "../Components/Form/Form";
import ProductTable from "../Components/ProductTable/ProductTable";
import "./Home.css";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [caroselData, setCarouselData] = useState([]);

  const getAllData = async () => {
    await axios
      .get("http://localhost:8000/products")
      .then((response) => {
        setAllData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);

  console.log(caroselData, "cdata");
  return (
    <div className="home">
      <div className="left_div">
        <Form />
      </div>
      {/*   Right div for table carousel */}
      <div className="right_div">
        <div className="table_div">
          <ProductTable data={allData} />
        </div>
        <div className="carousel_div">
          <Carousel data={allData} />
        </div>

        <div className="datalab_div">
        <DataLab data={allData} />
      </div>
      </div>
      {/*   ------------------------------ */}
    </div>
  );
};

export default Home;
