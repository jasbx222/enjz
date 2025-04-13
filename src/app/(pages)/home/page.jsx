"use server"
import "./Home.css";
import Card from "./Card";

import Chart from "./Chart";
import { ImageFile } from "./Image";
const page = () => {
  return (
    <div className=" container h-[100vh]  block   relative  top-24 ">
      <Card />
      <ImageFile />
      {/* <div className=" hidden md:block">
        <Chart />
      </div> */}
    </div>
  );
};

export default page;
