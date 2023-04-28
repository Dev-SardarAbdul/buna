import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
// import {
//   About,
//   Home,
//   Platform,
//   SupportingEntities,
//   ArticlesDetails,
// } from "./pages";
import {
  About,
  Home,
  Platform,
  SupportingEntities,
  ArticlesDetails,
  DigitalLibrary,
  DigitalCategory,
  ArticlesFeatured,
  Podcasts,
  PodcastAudioDetailComp,
} from "./pages";
import { ltrTheme, rtlTheme } from "./theme";
import ExpertPage from "./pages/expert";
import ExpertDetail from "./pages/expert/expertDetail";
import Footer from "./components/footer";
import Articlepage from "./pages/article";
import PodcastPlayingVideoPage from "./pages/podcastPlayingVideo";
import PlayingVideoDetail from "./pages/podcastPlayingVideo/detail";
// import SupportingEntities from "./pages/supportingEntities";
import { setUserData } from "./store/redux/slices/langSlice";
import { useDispatch } from "react-redux";
import { Button, Modal } from "antd";
import OnBoardModal from "./components/modal/onBoardModal";
import FontStyles from "./fontStyles";
import { Topbar } from "./components";
import headphone from "./assets/images/headphoneNew.png";
import { useAppSelector } from "./store/store";
import PodcastPlayingAudioComp from "./pages/podcastPlayingAudio";

function App() {
  const dispatch = useDispatch();
  const [isRTL, setIsRTL] = useState(false);
  const [headphoneHover, setHeadphoneHover] = useState(false);

  const langData = useAppSelector((data) => data.langData);

  const handleToggleDirection = () => {
    console.log("checkingg", 33);
    setIsRTL((prev) => !prev);
  };

  const theme = isRTL ? rtlTheme : ltrTheme;

  useEffect(() => {
    if (isRTL) {
      dispatch(setUserData("rtl"));
    } else if (!isRTL) {
      dispatch(setUserData("ltr"));
    }
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <FontStyles />
        <div style={{ overflowX: "hidden", position: "relative" }}>
          <Topbar handleToggleDirection={handleToggleDirection} />

          <div
            className={`headphoneDiv ${
              langData.lang === "rtl" && "divReversed"
            }`}
            onMouseEnter={() => setHeadphoneHover(true)}
            onMouseLeave={() => setHeadphoneHover(false)}
          >
            <img className="headphone" src={headphone} />

            {headphoneHover && langData.lang === "ltr" && (
              <p>Do you need any support?</p>
            )}
            {headphoneHover && langData.lang === "rtl" && (
              <p>هل تحتاج إلى أي دعم؟</p>
            )}
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />

            <Route path="/about-us" element={<About />} />
            <Route
              path="/supporting-entities"
              element={<SupportingEntities />}
            />
            <Route path="/buna-expert/*" element={<ExpertPage />} />
            <Route path="/expert-detail" element={<ExpertDetail />} />
            <Route path="/article" element={<Articlepage />} />
            <Route path="/article/details" element={<ArticlesDetails />} />
            <Route path="/article/featured" element={<ArticlesFeatured />} />

            <Route path="/podcasts" element={<Podcasts />} />
            <Route
              path="/podcast-playing-video/*"
              element={<PodcastPlayingVideoPage />}
            />

            <Route
              path="/podcast-playing-audio/*"
              element={<PodcastPlayingAudioComp />}
            />

            <Route path="/digital-library" element={<DigitalLibrary />} />
            <Route path="/digital-category" element={<DigitalCategory />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
