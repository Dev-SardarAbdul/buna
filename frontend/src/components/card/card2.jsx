import React, { useEffect, useRef, useState } from "react";
import { AudioPlayBtn, CardSection } from "./styled";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useSound } from "use-sound";
import mySound from "../../assets/audio/sound.mp3";
import { AiOutlinePause } from "react-icons/ai";
import { useAppSelector } from "../../store/store";
import ReactAudioPlayer from "react-audio-player";

const AudioCardcomp = ({ item, index, newData, setNewData }) => {
  const [isPlaying, setIsPlaying] = useState(null);
  console.log("isPlaying", isPlaying);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState();
  const [audios, setAudios] = useState([]);
  console.log("currentAudioIndex", audios);
  const [play, { pause }] = useSound(mySound, { volume: 0.5 });
  const navigate = useNavigate();
  const langData = useAppSelector((data) => data.langData);

  const audioRef = React.useRef(null);

  const playAudio = () => {
    setIsPlaying(null);

    if (audioRef.current) {
      audioRef.current.play();
      //    const data=[...newData];
      //  data[index].isPlaying=true;
      //  setNewData(data);
      setIsPlaying(true);

      // setAudios((prevAudios) => [...prevAudios, { index, play: true }]);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      // setAudios((prevAudios) =>
      //   prevAudios.filter((audio) => audio.index !== index)
      // );
    }
  };

  const handlePlayClick = () => {
    pauseAllAudio(); // Pause all other audio before starting new one
    playAudio();
    setCurrentAudioIndex(index);
  };

  const pauseAllAudio = () => {
    document.querySelectorAll("audio").forEach((audio, newIndex) => {
      if (!audio.paused) {
        console.log("audio.id", audio.id, audioRef.current.id);
        if (audio.id !== audioRef.current.id) {
          audio.pause();
          audio.currentTime = 0;
          setIsPlaying(false);
          // setAudios((prevAudios) =>
          //   prevAudios.filter((audio) => audio.index !== index)
          // );
        }
      }
    });
  };
  const [hoverTimeout, setHoverTimeout] = useState(null);

  return (
    <CardSection>
      <Card
      // onMouseLeave={() => {
      //   setIsHovering(false);
      //   clearTimeout(timeoutId); // Cancel any previously scheduled timeout
      //  pauseAudio()
      // }}
      >
        <Card.Img
          variant="top"
          height={200}
          style={{ height: "200px", cursor: "pointer" }}
          src={item.img}
          onClick={() => {
            pause();
          }}
        />
        <Card.Body>
          <Card.Title className="audioCardTitle">{item.title}</Card.Title>
          <Card.Text className="audioCardText">{item.text}</Card.Text>
          <div className="audio-info">
            <span>{item.episode}</span>
            <span>{item.time}</span>
          </div>

          <audio src={item.audio} ref={audioRef} id={`audio-${index}`} />
          <AudioPlayBtn
            onClick={isPlaying ? pauseAudio : handlePlayClick}
            onMouseOver={() => {
              let timeoutId = setTimeout(() => {
                handlePlayClick(); // call the play function after 3 seconds
              }, 3000); // 3 seconds in milliseconds
              setHoverTimeout(timeoutId);
            }}
            onMouseOut={() => {
              pauseAudio();
              clearTimeout(hoverTimeout);
            }}
          >
            {/* {isPlaying ? "Pause" : "Play"} */}

            {isPlaying ? (
              <div className="pauseDiv">
                <AiOutlinePause color="rgb(0, 140, 157)" />
              </div>
            ) : (
              <img src={item.playimg} />
            )}
            <span>{isPlaying ? item.btnSecondaryText : item.btntext}</span>
          </AudioPlayBtn>
        </Card.Body>
      </Card>
    </CardSection>
  );
};

export default AudioCardcomp;
