import styled from "styled-components";
import React from "react";
import { useState,useEffect } from "react";
import Header from "../components/Header";


const Section01 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 239px);
  font-weight: 500;
`;
const SexualAbuseAnd = styled.div`
  position: absolute;
  top: 50px;
  left: 0px;
  font-size: 54px;
  letter-spacing: -0.02em;
  line-height: 115.6%;
  font-weight: 800;
  font-family: var(--font-source-sans-pro);
  color: var(--color-black);
  display: inline-block;
  width: 478px;
`;
const Section01Parent = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 360.5px);
  width: 478px;
  height: 174px;
  font-size: var(--font-size-xl);
`;
const PleaseNoteThat = styled.p`
  margin: 0;
`;
const PleaseNoteThatContainer = styled.div`
  position: absolute;
  top: 226px;
  left: 0px;
  letter-spacing: -0.03em;
  line-height: 183.5%;
  font-weight: 500;
  color: var(--color-dimgray-200);
  display: inline-block;
  width: 721px;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 12px;
  background-color: var(--color-black);
  width: 389px;
  height: 65px;
`;
const ProceedToSection = styled.div`
  position: absolute;
  top: 3px;
  left: 0px;
  font-weight: 800;
`;
const ArrowRightIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 304px;
  border-radius: var(--br-39xl);
  width: 42px;
  height: 42px;
  overflow: hidden;
`;
const ProceedToSectionParent = styled.div`
  position: absolute;
  top: 12px;
  left: 22px;
  width: 346px;
  height: 42px;
  cursor: pointer;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 572px;
  left: 0px;
  width: 389px;
  height: 65px;
  color: var(--color-white);
  font-family: var(--font-source-sans-pro);
`;
const GroupParent = styled.div`
  position: absolute;
  top: 114px;
  left: calc(50% - 750px);
  width: 721px;
  height: 637px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 159px;
  left: 101px;
  width: 1500px;
  height: 865px;
`;

const GroupInner = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  object-fit: cover;
`;

const PaymentsRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 115vh;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-7xl);
  color: #878787;
  font-family: var(--font-open-sans);
`;

// const Video = styled.video`
//   position: absolute;
//   top: 0px;
//   left: 1012px;
//   width: 488px;
//   height: 865px;
//   object-fit: cover;
// `;
const VideoContainer = styled.div`
position: absolute;
top: 0px;
left: 1012px;
// cursor:pointer;
object-fit: cover;
width: 488px;
height: 865px;
`;



const CustomVideoControls = styled.div`
  position: absolute;
  top:90%;
  // visibility: hidden; 
  left: 0%;
  
  // background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const PlayPauseButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  // border:2px solid ;
  // border-radius: 40%;
  
`;
const MuteButton=styled.button`

position: absolute;
top:90%;
// visibility: hidden; 
border:none;
left: 95%;

background-color: transparent;
color: white;
display: flex;
cursor:pointer;
justify-content: space-between;
align-items: center;
padding: 5px;
z-index:100;
`;


const Payments1 = () => {
  const videoRef = React.createRef();
  const [status, setstatus] = useState(1);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };
  const handlePlayPause = () => {
   
    
    if (videoRef.current.paused) {
      setstatus(1);
      videoRef.current.play();
      
      
    } else {
      setstatus(0);
      videoRef.current.pause();
      
    }
  };

  useEffect(() => {
    videoRef.current.play();
      
  }, []);

  return (
    <PaymentsRoot>
      <RectangleParent>
      <VideoContainer >
      <video ref={videoRef} muted={isMuted} autoPlay controls={false}>
        <source src="/video1new.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <CustomVideoControls>
        <PlayPauseButton typeof="button" onClick={handlePlayPause} >
          {status==1 ? <span className="material-symbols-outlined">
pause_circle
</span> : <span className="material-symbols-outlined">play_circle</span>}
        </PlayPauseButton>
      </CustomVideoControls>
      <MuteButton onClick={handleToggleMute}>
        {isMuted ? <span class="material-symbols-outlined">volume_off</span>: <span class="material-symbols-outlined">
volume_up
</span>}
      </MuteButton>
    </VideoContainer>
        <GroupParent>
          <Section01Parent>
            <Section01>SECTION 01</Section01>
            <SexualAbuseAnd>Sexual Abuse and Physical Violence</SexualAbuseAnd>
          </Section01Parent>
          <PleaseNoteThatContainer>
            <PleaseNoteThat>
              Please note that the following section of the diagnostic explores
              sensitive topics related to sexual abuse and physical violence.
            </PleaseNoteThat>
            <PleaseNoteThat>&nbsp;</PleaseNoteThat>
            <PleaseNoteThat>
              We understand that this can be distressing, so we encourage you to
              take a deep breath, remember your well-being is our priority, and
              proceed at a pace that feels comfortable for you.
            </PleaseNoteThat>
          </PleaseNoteThatContainer>
          <RectangleGroup>
            <GroupItem />
            
            <ProceedToSectionParent className="probutton" type="button" onClick={()=>{console.log("ashok");}}>
      <ProceedToSection>Proceed to Section</ProceedToSection>
      <ArrowRightIcon alt="" src="/arrowright.svg" />
    </ProceedToSectionParent>
          </RectangleGroup>
        </GroupParent>
      </RectangleParent>
     {/* <Header/> */}
    </PaymentsRoot>
  );
};

export default Payments1;
