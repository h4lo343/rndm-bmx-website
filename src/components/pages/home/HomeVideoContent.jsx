import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import {
  bgWhiteColor,
  HeaderText,
  laptopSize,
  myFont,
} from '../../../styles/commonStyles';
import { navHomeID } from '../handlers/pageRoutes';
import videoContent from '../../../assets/video/home_video.mp4';
import styled from 'styled-components';
import { BsSoundwave } from 'react-icons/bs';
import { VscMute } from 'react-icons/vsc';
import { TitleText } from '../../../styles/commonStyles';

export const HomeVideoContent = () => {
  const homeVideoText = 'A BMX Brand for all kinds of people BMX!';
  const refVideo = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  // const isMobile = window.matchMedia('only screen and (max-width: 900px)').matches;

  function playMusic(e) {
    setIsMuted(!isMuted);
    e.preventDefault();
    if (!isMuted) {
      refVideo.current.defaultMuted = true;
      refVideo.current.muted = true;
    } else {
      refVideo.current.defaultMuted = false;
      refVideo.current.muted = false;
    }
  }

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        refVideo.current.muted = true;
      } else {
        refVideo.current.muted = isMuted;
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isMuted]);

  return (
    <HomeVideoElement name={navHomeID} id="home-video-section">
      <VideoContainer tabIndex="0">
        <HomeVideo
          id="home-video"
          src={videoContent}
          ref={refVideo}
          muted={isMuted}
          autoPlay
          playsInline
          preload="metadata"
          loop
          title="Home Video"
        ></HomeVideo>
        <OverlayBox id="home-video-content">
          <TitleText variant="h1">{homeVideoText} </TitleText>
          {!isMuted && (
            <SoundIcon
              size={laptopSize}
              onClick={playMusic}
              color={bgWhiteColor}
              aria-label="Sound On"
            />
          )}
          {isMuted && (
            <MuteIcon
              size={laptopSize}
              onClick={playMusic}
              color={bgWhiteColor}
              aria-label="Mute"
            />
          )}
        </OverlayBox>
      </VideoContainer>
    </HomeVideoElement>
  );
};

const HomeVideoElement = styled(Element)`
  && {
    display: flex;
    align-items: center;
    z-index: 1;
  }
`;

const HomeVideo = styled.video`
  object-fit: cover;
  width: 100%;
`;

const VideoContainer = styled.div`
  height: 110vh;
  display: flex;
  min-width: 100vw;
`;

const OverlayBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100vw;
`;

const SoundIcon = styled(BsSoundwave)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 2%;
  padding-bottom: 2%;
`;

const MuteIcon = styled(VscMute)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 2%;
  padding-bottom: 2%;
`;
