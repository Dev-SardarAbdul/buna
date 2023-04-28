import React, { useState, useEffect } from "react";
import { PaginationWrapper } from "./elements";

function CustomPagination() {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["#F0F0F0", "#F0F0F0", "#F0F0F0"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [colorIndex]);

  const getDivColor = (index) => {
    return index === colorIndex ? "#0F1134" : "#F0F0F0";
  };

  return (
    <PaginationWrapper>
      <div className="div" style={{ background: getDivColor(0) }}></div>
      <div className="div" style={{ background: getDivColor(1) }}></div>
      <div className="div" style={{ background: getDivColor(2) }}></div>
    </PaginationWrapper>
  );
}

export default CustomPagination;
