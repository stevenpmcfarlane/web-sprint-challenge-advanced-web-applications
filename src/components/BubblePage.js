import React, { useEffect, useState } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  getColorData = () => {
    //needs an authorization header to pass the middleware function in the server
    const token = JSON.parse(localStorage.getItem("token"));
    axiosWithAuth()
      .get("/api/colors")
      .then((res) => {
        console.log(res);
        //set data to state - but only the objects for the U.S. and State of Hawaii,
        //and only for regular gasoline
        this.setColorList({
          colorList: res.data.data, //double check
          // .filter((price) => {
          //   return (
          //     price.location === "US" || price.location === "State of Hawaii"
          //   );
          // })
          // .filter((price) => {
          //   return price.type === "Gasoline - regular";
          // }), // write the algorithm to get only the data we want
        });
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
