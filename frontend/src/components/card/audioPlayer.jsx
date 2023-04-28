import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import styled from "styled-components";
import mySound from "../../assets/audio/sound.mp3";
import playimg from "../../assets/images/playimg.svg";
import { BsPlay } from "react-icons/bs";
 

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
const audioRef = useRef(null);
const canvasRef = useRef(null);

const handlePlayPause = () => {
  if (isPlaying) {
    audioRef.current.pause();
    setIsPlaying(false);
  } else {
    audioRef.current.play();
    setIsPlaying(true);
  }
};

useEffect(() => {
  const canvas = canvasRef.current;
  const audio = audioRef.current;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "white";
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.beginPath();

  const bufferLength = 512;
  const dataArray = new Uint8Array(bufferLength);

  const drawVisual = requestAnimationFrame(draw);
  audio.addEventListener("ended", () => {
    cancelAnimationFrame(drawVisual);
  });

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioContext.createAnalyser();
  const source = audioContext.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 256;
  
  const barWidth = (width / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  function draw() {
    x = 0;
    analyser.getByteFrequencyData(dataArray);
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 2;

      ctx.fillRect(x, height - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }

    requestAnimationFrame(draw);
  }

}, []);

return (
  <div>
    <canvas ref={canvasRef} width="100" height="50"></canvas>
    <audio src={mySound} ref={audioRef}></audio>
    <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
  </div>
);

}


export default AudioPlayer;
