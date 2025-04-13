"use server"
import "./Home.css";
import Card from "./Card";

import { ImageFile } from "./Image";
import DashboardChart from "./Chart";
const page = () => {
  return (
    <div className=" container h-[100vh]  block   relative  top-24 ">
      <Card />
  
      <div className="">
        <DashboardChart/>
      </div> 
    </div>
  );
};

export default page;
