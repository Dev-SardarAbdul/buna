import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  ArticleDetailsWrapper,
  ArticleInfoDetails,
  FilterName,
  FilterTitle,
  Text,
} from "./elements";
import CardComp from "../../components/card";
import { arbicarticlesCardData, articlesCardData } from "../../components/data";
import profileImg from "../../assets/images/profile.jpg";
import articleImg from "../../assets/images/article/img42.jpg";
import articleImg2 from "../../assets/images/articleImg2.jpg";
import articleImage from "../../assets/images/articleImage.png";
import articleSubImage from "../../assets/images/articleSubImage.png";
import heartImg from "../../assets/images/icons/heart.svg";
import share from "../../assets/images/icons/share.svg";
import saveLater from "../../assets/images/icons/saveLater.svg";
import { MainPagination } from "../platform/styled";
import { useAppSelector } from "../../store/store";
import arrowDown from "../../assets/images/arrowDown.png";
import supportIcon from "../../assets/images/Support EN.png";

const ArticlesDetails = () => {
  const langData = useAppSelector((data) => data.langData);
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
  const [newFilter, setNewFilter] = useState(null);

  const filterdata = [
    {
      id: 1,
      name: "Prototyping",
    },
    {
      id: 2,

      name: "Prototyping",
    },
    {
      id: 3,

      name: "Prototyping",
    },
    {
      id: 4,

      name: "Prototyping",
    },
    {
      id: 5,

      name: "Prototyping",
    },
    {
      id: 6,

      name: "Prototyping",
    },

    {
      id: 7,

      name: "Prototyping",
    },
    {
      id: 8,

      name: "Prototyping",
    },
  ];

  const filterArabicdata = [
    {
      id: 1,
      name: "خطط",
    },
    {
      id: 2,
      name: "معايير",
    },
    {
      id: 3,
      name: "برامج",
    },
    {
      id: 4,
      name: "الهيئة الحكومية",
    },
    {
      id: 5,
      name: "كفاءة الإنفاق",
    },
    {
      id: 6,
      name: "تحقيق الكفاءة",
    },
    {
      id: 7,
      name: "اختصاصات الهيئة",
    },
    {
      id: 8,
      name: "الخطط والبرامج",
    },
    {
      id: 9,
      name: "معايير",
    },
    {
      id: 1,
      name: "اختصاص الهيئة",
    },
  ];

  useEffect(() => {
    if (langData.lang == "ltr") {
      setNewFilter(filterdata);
    } else {
      setNewFilter(filterArabicdata);
    }
  }, [langData]);

  const [newData, setNewData] = useState(null);
  useEffect(() => {
    if (langData.lang === "ltr") {
      setNewData(articlesCardData);
    } else {
      setNewData(arbicarticlesCardData);
    }
  }, [langData]);

  let initialLimit = 5;
  const [limit, setLimit] = useState(initialLimit);

  const viewMoreBtn = () => {
    setLimit(newFilter.length);
  };
  const viewLessBtn = () => {
    setLimit(initialLimit);
  };

  const [selectedFilter, setSelectedFilter] = useState([]);

  const handleFilterClick = (item) => {
    const isSelected = selectedFilter.some((filter) => filter.id === item.id);

    if (isSelected) {
      setSelectedFilter(
        selectedFilter.filter((filter) => filter.id !== item.id)
      );
    } else {
      setSelectedFilter([...selectedFilter, item]);
    }
  };

  return (
    <ArticleDetailsWrapper>
      <Container>
        <div className="heroSectionArticle">
          <p className="breadCrums">
            {" "}
            {langData.lang == "ltr"
              ? "Articles / Engineering / Skip the repeat"
              : "مقالات / هندسة / تخطي التكرار"}{" "}
          </p>
          <div className="profileWrapper">
            <div>
              <img src={profileImg} width={60} height={60} alt="" />
            </div>
            <div>
              <h3 className="name">
                {" "}
                {langData.lang == "ltr" ? "Aiony Haust" : "اوني هاوست"}{" "}
              </h3>
              <p className="profession">
                {langData.lang == "ltr" ? "Professor" : "دكتور جامعي"}{" "}
              </p>
            </div>
          </div>
          <h1 className="title">
            {" "}
            {langData.lang == "ltr"
              ? "Skip the Repeat"
              : "مقالة مميزة بعنوان تجاوز التكرار"}{" "}
          </h1>
          <p className="duration">
            {langData.lang == "ltr" ? "45 min Read" : "45 دقيقة للقراءة"}{" "}
          </p>

          <div className="shareStats">
            <div className="shareMain">
              <div className="icon">
                <div>
                  <img src={heartImg} alt="" />
                </div>

                <div>
                  <p className="statsPara">
                    {langData.lang == "ltr" ? "123 Likes" : "45 دقيقة للقراءة"}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="shareMain">
              <div className="icon">
                <div>
                  <img src={share} alt="" />
                </div>

                <div>
                  <p className="statsPara">
                    {langData.lang == "ltr" ? "Share" : "مشاركة"}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="shareMain">
              <div className="icon">
                <div>
                  <img src={saveLater} alt="" />
                </div>

                <div>
                  <p className="statsPara">
                    {" "}
                    {langData.lang == "ltr"
                      ? " Save for Later"
                      : "حفظ لوقت لاحق "}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row className="mt-3" style={{ marginLeft: "0.1rem" }}>
          <Col lg={3} style={{ border: "1px solid  #F0F0F0" }}>
            <FilterTitle className="mt-2">
              {" "}
              {langData.lang == "ltr" ? "Filters" : "فرز"}{" "}
            </FilterTitle>

            <Text style={{ fontWeight: 600 }}>Keywords</Text>
            <div className="  flex-wrap    d-flex gap-1 pp-1">
              {newFilter?.slice(0, limit)?.map((item, index) => {
                return (
                  <FilterName
                    key={item.id}
                    className={`mt-2 ${
                      selectedFilter.some((filter) => filter.id === item.id)
                        ? "activeFilter"
                        : ""
                    }`}
                    onClick={() => handleFilterClick(item)}
                  >
                    {item.name}
                  </FilterName>
                );
              })}
            </div>
            <button
              className="viewBtnDetails mb-3 mt-mb-0"
              onClick={limit == newFilter?.length ? viewLessBtn : viewMoreBtn}
            >
              {limit == newFilter?.length ? "View Less" : "View More"}
              <img className="ms-1" src={arrowDown} alt="" />
            </button>
          </Col>

          <Col lg={9}>
            <ArticleInfoDetails>
              <img
                className="img-fluid articleImg mt-3 mt-lg-0"
                src={articleImage}
                alt=""
              />
              {langData.lang == "ltr" ? (
                <p className="articleText">
                  Prototyping is a process in which design teams ideate,
                  experiment with, and bring concepts to life, ranging from
                  paper ideas to digital designs. At its core, a prototype is an
                  early sample of a design that allows users to visualize or
                  interact with it before a final product is developed. It is
                  the fourth step of the design thinking process, followed by
                  usability testing. A key characteristic of prototyping is that
                  prototypes are created without a single line of code. There
                  are plenty of prototyping tools to help designers link
                  together art boards, creating an interactive, clickable
                  experience without the need of a developer. This helps
                  decrease costs, as designers can create clickable prototypes
                  without the need for development efforts. In other words, it’s
                  smart to test your prototype with users and stakeholders in
                  order to iron out any mistakes before you invest the money,
                  time, and human capital on actually engineering a design
                  solution. It is important to note that prototyping can be used
                  at various stages of the design process. It is a necessary
                  tool to validate ideas, whether it be at the beginning stages
                  of the design or halfway through a design. Testing prototypes
                  lets you benchmark progress and usability before moving
                  forward with.
                </p>
              ) : (
                <p className="articleText">
                  النماذج الأولية هي عملية تفكر فيها فرق التصميم وتجربها وتجعلها
                  تنبض بالحياة ، بدءًا من الأفكار الورقية إلى التصميمات الرقمية.
                  في جوهره ، النموذج الأولي هو عينة مبكرة من التصميم الذي يسمح
                  للمستخدمين بتصوره أو التفاعل معه قبل تطوير المنتج النهائي.
                  إنها الخطوة الرابعة في عملية التفكير التصميمي ، تليها اختبار
                  قابلية الاستخدام. السمة الرئيسية للنماذج الأولية هي أن النماذج
                  الأولية يتم إنشاؤها بدون سطر واحد من التعليمات البرمجية. هناك
                  الكثير من أدوات النماذج الأولية لمساعدة المصممين على ربط
                  اللوحات الفنية معًا ، مما يخلق تجربة تفاعلية قابلة للنقر دون
                  الحاجة إلى مطور. يساعد هذا في تقليل التكاليف ، حيث يمكن
                  للمصممين إنشاء نماذج أولية قابلة للنقر دون الحاجة إلى جهود
                  التطوير. بعبارة أخرى ، من الذكاء اختبار النموذج الأولي الخاص
                  بك مع المستخدمين وأصحاب المصلحة من أجل تصحيح أي أخطاء قبل
                  استثمار المال والوقت ورأس المال البشري في الهندسة الفعلية لحل
                  التصميم. من المهم ملاحظة أنه يمكن استخدام النماذج الأولية في
                  مراحل مختلفة من عملية التصميم. إنها أداة ضرورية للتحقق من صحة
                  الأفكار ، سواء كان ذلك في المراحل الأولى من التصميم أو في
                  منتصف الطريق خلال التصميم. يتيح لك اختبار النماذج الأولية قياس
                  التقدم وسهولة الاستخدام قبل المضي قدمًا.
                </p>
              )}

              {/* <button className="toolTipBtn">
                {" "}
                {langData.lang == "ltr"
                  ? "Click Here for tooltip"
                  : "انقر هنا للحصول على نص الأداة"}{" "}
              </button> */}

              <h2 className="mt-2 articlesDetailsTitle">
                {langData.lang == "ltr"
                  ? "Reasons for prototyping"
                  : "أسباب إنشاء النماذج الأولية"}{" "}
              </h2>

              {langData.lang == "ltr" ? (
                <p className="articleText">
                  Prototyping is a process in which design teams ideate,
                  experiment with, and bring concepts to life, ranging from
                  paper ideas to digital designs. At its core, a prototype is an
                  early sample of a design that allows users to visualize or
                  interact with it before a final product is developed. It is
                  the fourth step of the design thinking process, followed by
                  usability testing. A key characteristic of prototyping is that
                  prototypes are created without a single line of code. There
                  are plenty of prototyping tools to help designers link
                  together art boards, creating an interactive, clickable
                  experience without the need of a developer. This helps
                  decrease costs, as designers can create clickable prototypes
                  without the need for development efforts. In other words, it’s
                  smart to test your prototype with users and stakeholders in
                  order to iron out any mistakes before you invest the money,
                  time, and human capital on actually engineering a design
                  solution. It is important to note that prototyping can be used
                  at various stages of the design process. It is a necessary
                  tool to validate ideas, whether it be at the beginning stages
                  of the design or halfway through a design. Testing prototypes
                  lets you benchmark progress and usability before moving
                  forward with.
                </p>
              ) : (
                <p className="articleText">
                  النماذج الأولية هي عملية تفكر فيها فرق التصميم وتجربها وتجعلها
                  تنبض بالحياة ، بدءًا من الأفكار الورقية إلى التصميمات الرقمية.
                  في جوهره ، النموذج الأولي هو عينة مبكرة من التصميم الذي يسمح
                  للمستخدمين بتصوره أو التفاعل معه قبل تطوير المنتج النهائي.
                  إنها الخطوة الرابعة في عملية التفكير التصميمي ، تليها اختبار
                  قابلية الاستخدام. السمة الرئيسية للنماذج الأولية هي أن النماذج
                  الأولية يتم إنشاؤها بدون سطر واحد من التعليمات البرمجية. هناك
                  الكثير من أدوات النماذج الأولية لمساعدة المصممين على ربط
                  اللوحات الفنية معًا ، مما يخلق تجربة تفاعلية قابلة للنقر دون
                  الحاجة إلى مطور. يساعد هذا في تقليل التكاليف ، حيث يمكن
                  للمصممين إنشاء نماذج أولية قابلة للنقر دون الحاجة إلى جهود
                  التطوير. بعبارة أخرى ، من الذكاء اختبار النموذج الأولي الخاص
                  بك مع المستخدمين وأصحاب المصلحة من أجل تصحيح أي أخطاء قبل
                  استثمار المال والوقت ورأس المال البشري في الهندسة الفعلية لحل
                  التصميم. من المهم ملاحظة أنه يمكن استخدام النماذج الأولية في
                  مراحل مختلفة من عملية التصميم. إنها أداة ضرورية للتحقق من صحة
                  الأفكار ، سواء كان ذلك في المراحل الأولى من التصميم أو في
                  منتصف الطريق خلال التصميم. يتيح لك اختبار النماذج الأولية قياس
                  التقدم وسهولة الاستخدام قبل المضي قدمًا.
                </p>
              )}

              <img
                className="img-fluid subArticleImg"
                src={articleSubImage}
                alt=""
              />

              {langData.lang == "ltr" ? (
                <p className="mt-2   articleText">
                  It is important to note that prototyping can be used at
                  various stages of the design process. It is a necessary tool
                  to validate ideas, whether it be at the beginning stages of
                  the design or halfway through a design. Testing prototypes
                  lets you benchmark progress and usability before moving
                  forward with development.
                </p>
              ) : (
                <p className="mt-2   articleText">
                  من المهم ملاحظة أنه يمكن استخدام النماذج الأولية في مراحل
                  مختلفة من عملية التصميم. إنها أداة ضرورية للتحقق من صحة
                  الأفكار ، سواء كان ذلك في المراحل الأولى من التصميم أو في
                  منتصف الطريق خلال التصميم. يتيح لك اختبار النماذج الأولية قياس
                  التقدم وسهولة الاستخدام قبل المضي قدمًا في التطوير.
                </p>
              )}
            </ArticleInfoDetails>
          </Col>
        </Row>

        <Row className="mt-4">
          <p className="relatedArticle">
            {" "}
            {langData.lang == "ltr"
              ? "Related Articles"
              : "مقالات ذات صلة"}{" "}
          </p>
          {newData?.map((item) => (
            <Col lg={3} md={6} sm={12} className="my-2">
              <CardComp item={item} />
            </Col>
          ))}

          <MainPagination className="my-5" defaultCurrent={1} total={50} />
        </Row>
      </Container>
    </ArticleDetailsWrapper>
  );
};

export default ArticlesDetails;
