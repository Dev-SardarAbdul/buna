import React, { useState, useRef } from "react";
import { ControlsWrapper, VideoWrapper } from "./elements";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiPlay, FiPause } from "react-icons/fi";
import ProgressBar from "react-bootstrap/ProgressBar";

const AudioPlayer = ({ audios }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (currentVideo < audios.length - 1) {
      setCurrentVideo(currentVideo + 1);
    } else {
      setCurrentVideo(0);
    }
    setIsPlaying(false);
    setProgress(0);
  };

  const handlePrev = () => {
    if (currentVideo > 0) {
      setCurrentVideo(currentVideo - 1);
    } else {
      setCurrentVideo(audios.length - 1);
    }
    setIsPlaying(false);
    setProgress(0);
  };

  const handleProgress = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
    setCurrentTime(currentTime);
    setDuration(duration);
  };

  const formatTime = (time) => {
    if (isNaN(time)) {
      return "0:00";
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <VideoWrapper>
      <audio
        ref={videoRef}
        src={audios[currentVideo]}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleNext}
        onTimeUpdate={handleProgress}
        width={"100%"}
      />
      <ControlsWrapper>
        <div className="d-flex align-items-center gap-3">
          <div className="btnDiv">
            <button className="videoBtns" onClick={handlePrev}>
              <IoIosArrowBack className="icon" />
            </button>
            <button onClick={handlePlayPause} className="playPauseIcon">
              {isPlaying ? (
                <FiPause className="icon" />
              ) : (
                <FiPlay className="icon" />
              )}
            </button>
            <button className="videoBtns" onClick={handleNext}>
              <IoIosArrowForward className="icon" />
            </button>
          </div>
          <span className="spans">{formatTime(currentTime)} </span>
          <span className="spans">/</span>
          <span className="spans">{formatTime(duration)}</span>
        </div>
        <div className="inputDiv">
          <ProgressBar now={progress} />
        </div>
      </ControlsWrapper>
    </VideoWrapper>
  );
};

export default AudioPlayer;
