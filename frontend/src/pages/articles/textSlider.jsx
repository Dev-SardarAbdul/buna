import React, { useState, useEffect } from "react";

import { ReadmoreBtn, TextWrapper } from "./elements";
import CustomPagination from "./customPagination";

function TextSlider({ langData }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const text = [
    langData.lang === "ltr" ? "Featured article 1" : "1قراءة المزيد",
    langData.lang === "ltr" ? "Featured article 2" : "قراءة المزيد2",
    langData.lang === "ltr" ? "Featured article 3" : "قراءة المزيد3",
  ];

  useEffect(() => {
    // Define a function to update the image index
    function updateImageIndex() {
      setCurrentImageIndex((currentImageIndex + 1) % text.length);
    }

    // Call the updateImageIndex function every 3 seconds
    const intervalId = setInterval(updateImageIndex, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentImageIndex, text]);

  return (
    <TextWrapper>
      <h1 className="mainText">{text[currentImageIndex]}</h1>

      {langData.lang === "ltr" ? (
        <h4 className="subText">
          Welcome to the Institute for the Future of Work's Knowledge Hub. Here
          you will find a range of resources representing a wide range of
          perspectives on the future of work.The Hub surfaces different voices
          and forms of research to enable others to critically engage with key
          themes. Resources may not reflect the Institute's views.
        </h4>
      ) : (
        <h4 className="subText">
          مرحبًا بكم في مركز المعرفة التابع لمعهد مستقبل العمل. ستجد هنا مجموعة
          من الموارد التي تمثل مجموعة واسعة من وجهات النظر حول مستقبل العمل.
          يعرض المحور أصواتًا وأشكالًا مختلفة من البحث لتمكين الآخرين من
          المشاركة بشكل نقدي في الموضوعات الرئيسية.
        </h4>
      )}

      {langData.lang === "ltr" ? (
        <ReadmoreBtn>Read more</ReadmoreBtn>
      ) : (
        <ReadmoreBtn>قراءة المزيد</ReadmoreBtn>
      )}
    </TextWrapper>
  );
}

export default TextSlider;
