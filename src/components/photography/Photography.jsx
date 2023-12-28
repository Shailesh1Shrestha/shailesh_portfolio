import React from "react";
import Photos from "./Photos";
import photo4 from "../../assets/photo4.jpg";
import photo6 from "../../assets/photo6.jpg";
import photo3 from "../../assets/photo5.jpg";

function Photography() {
  return (
    <div className="lg:px-12 px-4 my-32 bg-bgShade py-32 " id="photography">
      <div className="text-headingColor mb-20">
        <p className="text-xl font-semibold mb-5">Photography</p>
        <h2 className="md:text-5xl text-4xl font-bold">My Photography</h2>

        <div className="flex mx-4"> 
          <div className="image-resize hover:-translate-y-2">
            <img src={photo4} alt="" />
          </div>

          <div className="image-resize hover:-translate-y-2">
            <img src={photo6} alt="" />
          </div>
      
        </div>
        <div className="w-2/4 image-resize hover:-translate-y-2">
            <img src={photo3} alt="" />
          </div>
      </div>

      {/* <Photos /> */}
    </div>
  );
}

export default Photography;
