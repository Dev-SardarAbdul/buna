import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RelatedPodcastSection } from "./elements";
import filterIcon from "../../assets/images/icons/filter.svg";
import { Dropdown, Pagination } from "antd";
import { MeetTitle, PaginationDiv } from "../expert/elements";
import { arabiclatestaudiocardData, latestaudiocardData } from "../../components/data";
import AudioCardcomp from "../../components/card/card2";
import Newsletter from "../homeComp/newsletter";
import { NewsLetter } from "../platform/styled";
import newsletterIcon from "../../assets/images/newsletterIcon.svg";
import { useAppSelector } from "../../store/store";
const RelatedPodcast = () => {

  const langData = useAppSelector((data) => data.langData);
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  const items = [
    {
      key: "1",
      label: <p className="m-0">Ascending</p>,
    },

    {
      key: "3",
      label: <p className="m-0">Descending</p>,
    },
  ];

  
  const [newData, setNewData] = useState(null);

  useEffect(() => {
    if (langData.lang === "ltr") {
      setNewData(latestaudiocardData);
    } else {
      setNewData(arabiclatestaudiocardData);
    }
  }, [langData]);

  return (
    <RelatedPodcastSection>
      <Container>
        <div className="filterdDiv">
          {/* <div>
            <h2 className="">Selected Articles</h2>
          </div> */}
          <MeetTitle > {langData.lang=="ltr" ? " Related Podcast" :"محتوى مرئي و مسموع ذات صلة"}</MeetTitle>
          {/* <div className="filterBtnMain">
            <div>
              <Dropdown menu={{ items }} placement="bottomLeft">
                <button className="d-flex filterBtn ">
                  {" "}
                  <img className="me-2" src={filterIcon}  alt="" /> 
                  {langData.lang == "ltr" ? "    Filter By" : "ترتيب حسب"}
              
                </button>
              </Dropdown>
            </div>
            <div>
            <Dropdown menu={{ items }} placement="bottomLeft">
                  <button className="d-flex filterBtn ">
                    {" "}
                    <img className="me-2" src={filterIcon} alt="" />{" "}
                    {langData.lang == "ltr" ? "Sorted By" : "ترتيب حسب"}
                  </button>
                </Dropdown>
            </div>
          </div> */}
        </div>

        <div className="mt-4">
          <Row>
            {newData?.map((item) => (
              <Col lg={3} className="my-2">
                <AudioCardcomp item={item} />
              </Col>
            ))}
          </Row>
        </div>
        <PaginationDiv>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
          />
        </PaginationDiv>

        <div className="mt-5">
        <NewsLetter>
          <div className="newsLetterMain">
            <div>
              {langData?.lang == "ltr" ? (
                <h2>Subscribe to Our Newsletter</h2>
              ) : (
                <h2>اشترك في نشرتنا الإخبارية</h2>
              )}
              {langData?.lang == "ltr" ? (
                <p>
                  Subscribe to our newsletter to receive exclusive offer, latest
                  <br /> news and updates
                </p>
              ) : (
                <p>
                  اشترك في النشرة الإخبارية لدينا لتلقّي العروض الحصرية وآخر
                  الأخبار والتحديثات
                </p>
              )}

              <div className="emailWrapper">
                <input
                  type="email"
                  placeholder={
                    langData.lang == "ltr"
                      ? " Enter email"
                      : "أدخل عنوان البريد الإلكتروني"
                  }
                />

                {langData?.lang == "ltr" ? (
                  <button>Lets Go</button>
                ) : (
                  <button>اشترك الآن</button>
                )}
              </div>
            </div>
            <div>
              <img src={newsletterIcon} alt="" />
            </div>
          </div>
        </NewsLetter>
        </div>
      </Container>
    </RelatedPodcastSection>
  );
};

export default RelatedPodcast;
