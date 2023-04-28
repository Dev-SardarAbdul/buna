import React from "react";
import Card from "react-bootstrap/Card";
import { PlayBtn, VideoCardWrapper } from "./styled";
import { BsPlay } from "react-icons/bs";

function VideoLibraryCard({ item, langData }) {
  return (
    <VideoCardWrapper>
      <Card>
        <Card.Img variant="top" src={item.img} />
        <h4 className={`mainText ${langData.lang === "rtl" && "arabicText"}`}>
          {item.title}
        </h4>
        <div className={`btnDiv ${langData.lang === "rtl" && "arabicBtn"}`}>
          <PlayBtn>
            <BsPlay
              className={`playBtn  ${
                langData.lang === "rtl" && "arabicPlayBtn"
              }`}
            />
          </PlayBtn>
          <p className={`watchNowText`}>{item.playText}</p>
        </div>
      </Card>
    </VideoCardWrapper>
  );
}

export default VideoLibraryCard;
