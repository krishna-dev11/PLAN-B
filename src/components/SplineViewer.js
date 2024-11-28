import React from "react";
// import "./SplineViewer.css"; // Optional CSS file for styles

const SplineViewer = () => {
  return (
    <div className="spline-container relative">
      {/* <spline-viewer
        url="https://prod.spline.design/HntfJ2N2K5UxBdYs/scene.splinecode"
      ></spline-viewer> */}
      <spline-viewer 
        url="https://prod.spline.design/CnRhvNnKy-q1MaSJ/scene.splinecode"
        id="splineViewer"
      ></spline-viewer>

    </div>
  );
};

export default SplineViewer;
