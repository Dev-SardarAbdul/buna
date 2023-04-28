import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import {
  Description,
  EpisodeDiv,
  EpisodeSection,
  EpisodeTitle,
  Hearticon,
  MarketingText,
  MarketingTitle,
  PlayBtn,
  PoweredText,
  Saveicon,
  Shareicon,
  Subsicon,
  Text,
  VideoSections,
} from "./elements";
import img from "../../assets/images/platformvideo.png";
import img1 from "../../assets/images/podcasts/img1.png";
import img2 from "../../assets/images/podcasts/img1.png";
import img3 from "../../assets/images/podcasts/img3.png";

import { CiPlay1 } from "react-icons/ci";
import { PaginationDiv } from "../expert/elements";
import { Pagination } from "antd";
import video from "../../assets/video/bgvideo.mp4";
import ReactAudioPlayer from "react-audio-player";
import { useAppSelector } from "../../store/store";
import headphone from "../../assets/images/headphone.png";
import VideoPlayer from "./videoPlayer";
import video1 from "../../assets/video/test1.mp4";
import video2 from "../../assets/video/test2.mp4";
import video3 from "../../assets/video/bgvideo.mp4";

const VideoSection = () => {
  const langData = useAppSelector((data) => data.langData);
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  const videos = [video1, video2, video3];

  const data = [
    {
      day: "Today",
      image: img3,
      title: "4 Tips for recruiting top talent to join your team",
      text: "Welcome to the Institute for the Future of Work's Knowledge Hub. Here you will find a range of resources representing a wide range of perspectives on the future of work.",
      time: "28min",
      playbtn: "Play",
    },
    {
      day: "Yesterday",
      image: img1,
      title: "4 Tips for recruiting top talent to join your team",
      text: "Welcome to the Institute for the Future of Work's Knowledge Hub. Here you will find a range of resources representing a wide range of perspectives on the future of work.",
      time: "28min",
      playbtn: "Play",
    },
    {
      day: "20 November 2022",
      image: img2,
      title: "4 Tips for recruiting top talent to join your team",
      text: "Welcome to the Institute for the Future of Work's Knowledge Hub. Here you will find a range of resources representing a wide range of perspectives on the future of work.",
      time: "28min",
      playbtn: "Play",
    },
  ];

  const arabicData = [
    {
      day: "اليوم",
      image: img3,
      title: "4 نصائح لتجنيد أفضل المواهب للانضمام إلى فريقك",
      text: "مرحبًا بكم في مركز معرفة معهد مستقبل العمل. ستجد هنا مجموعة من الموارد تمثل مجموعة واسعة من وجهات النظر حول مستقبل العمل.",
      time: "28 دقيقة",
      playbtn: "تشغيل",
    },
    {
      day: "الأمس",
      image: img1,
      title: "4 نصائح لتجنيد أفضل المواهب للانضمام إلى فريقك",
      text: "مرحبًا بكم في مركز معرفة معهد مستقبل العمل. ستجد هنا مجموعة من الموارد تمثل مجموعة واسعة من وجهات النظر حول مستقبل العمل.",
      time: "28 دقيقة",
      playbtn: "تشغيل",
    },
    {
      day: "20 November 2022",
      image: img2,
      title: "4 نصائح لتجنيد أفضل المواهب للانضمام إلى فريقك",
      text: "مرحبًا بكم في مركز معرفة معهد مستقبل العمل. ستجد هنا مجموعة من الموارد تمثل مجموعة واسعة من وجهات النظر حول مستقبل العمل.",
      time: "28 دقيقة",
      playbtn: "تشغيل",
    },
  ];

  const [newData, setNewData] = useState(null);
  useEffect(() => {
    if (langData.lang == "ltr") {
      setNewData(data);
    } else {
      setNewData(arabicData);
    }
  }, [langData]);

  return (
    <VideoSections className="noPadding">
      <Container className="videoContainer">
        <div className="video-data">
          <Row>
            <Col lg={12}>
              <div className="video-wrapper" style={{ width: "100%" }}>
                <VideoPlayer videos={videos} />
              </div>
            </Col>
          </Row>

          <MarketingText>
            {" "}
            {langData.lang == "ltr" ? "Marketing" : "الفئة"}{" "}
          </MarketingText>
          <MarketingTitle>
            {langData.lang == "ltr"
              ? " Marketing Made Simple"
              : "عنوان المحتوى المعروض"}
          </MarketingTitle>
          <PoweredText>
            {" "}
            {langData.lang == "ltr"
              ? "Powered by StoryBrand"
              : "اسم الجهة الداعمة"}{" "}
          </PoweredText>
          {langData.lang == "ltr" ? (
            <Description>
              Welcome to the Institute for the Future of Work's Knowledge Hub.
              Here you will find a range of resources representing a wide range
              of perspectives on the future of work.The Hub surfaces different
              voices and forms of research to enable others to critically engage
              with key themes. Resources may not reflect the Institute's views.
            </Description>
          ) : (
            <Description>
              مرحبًا بكم في مركز المعرفة التابع لمعهد مستقبل العمل. ستجد هنا
              مجموعة من الموارد التي تمثل مجموعة واسعة من وجهات النظر حول مستقبل
              العمل. يعرض المحور أصواتًا وأشكالًا مختلفة من البحث لتمكين الآخرين
              من المشاركة بشكل نقدي في الموضوعات الرئيسية. قد لا تعكس الموارد
              آراء المعهد.
            </Description>
          )}

          <div className="video-info">
            <div className="icon-div">
              <Subsicon color=" #008C9D" />
              <span> {langData.lang == "ltr" ? "Subscribe" : "اشترك"} </span>
            </div>
            <div className="icon-div">
              <Hearticon color="#DE595D" />
              <span>{langData.lang == "ltr" ? "123 likes" : "123 إعجاب"} </span>
            </div>
            <div className="icon-div">
              <Shareicon />
              <span>{langData.lang == "ltr" ? "Share" : "مشاركة"} </span>
            </div>
            <div className="last-icon-div">
              <Saveicon color="#000000;" />
              <span>
                {langData.lang == "ltr" ? "Save for later" : "حفظ لوقت لاحق"}{" "}
              </span>
            </div>
          </div>

          <EpisodeSection>
            <EpisodeTitle>
              {langData.lang == "ltr" ? "Episodes (42)" : "(42) حلقة"}{" "}
            </EpisodeTitle>

            {newData?.map((item) => (
              <>
                <h4>{item.day}</h4>
                <div className="episode-div">
                  <EpisodeDiv>
                    <div>
                      <img src={item.image} />
                    </div>
                    <div>
                      <h5>{item.title}</h5>
                      <Text>{item.text}</Text>
                      <p>{item.time}</p>
                    </div>
                  </EpisodeDiv>

                  <div className="d-flex gap-3 align-items-center">
                    <PlayBtn>
                      <CiPlay1 /> &nbsp;
                      {item.playbtn}
                    </PlayBtn>
                    <Shareicon />
                  </div>
                </div>
              </>
            ))}

            <PaginationDiv>
              <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
              />
            </PaginationDiv>
          </EpisodeSection>
        </div>
      </Container>
    </VideoSections>
  );
};

export default VideoSection;
