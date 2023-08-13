import styled from "styled-components";
import { useState } from "react";
// import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'react-calendar/dist/Calendar.css'; 
import Header from "../components/Header";


const AreYouReady = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: -0.05em;

  font-weight: 800;
  display: inline-block;
  width: 859px;
`;
const AreYouReadyToUnderstandYoWrapper = styled.div`
  position: absolute;
  top: 762px;
  left: 91px;
  width: 859px;
  height: 213px;
  font-size: var(--font-size-45xl);
  color: var(--color-black);
  font-family: var(--font-source-sans-pro);
`;


const BrainPatternAssessment = styled.div`
  position: absolute;
  top: 725px;
  left: 91px;
  font-weight: 500;
  color: var(--color-dimgray-100);
`;
const GroupItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-black);
  width: 1728px;
  height: 60px;
`;
const TheBreakMethod = styled.div`
  position: absolute;
  top: 19px;
  left: calc(50% + 610px);
  line-height: 140.6%;
  font-weight: 600;
`;
const TermsAndConditions = styled.div`
  position: absolute;
  top: 19px;
  left: calc(50% - 773px);
  line-height: 140.6%;
  font-weight: 600;
`;
const PrivacyPolicy = styled.div`
  position: absolute;
  top: 19px;
  left: calc(50% - 582px);
  line-height: 140.6%;
  font-weight: 600;
`;
const Faqs = styled.div`
  position: absolute;
  top: 19px;
  left: calc(50% - 449px);
  line-height: 140.6%;
  font-weight: 600;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 2098px;
  left: 0px;
  width: 1728px;
  height: 60px;
  font-size: var(--font-size-mini);
  color: var(--color-white);
  font-family: var(--font-manrope);
`;
const DashboardChild = styled.img`
  position: absolute;
  top: 143px;
  left: 0px;
  width: 1728px;
  height: 495px;
  object-fit: cover;
`;
const TheBreakProgram = styled.div`
  position: absolute;
  top: 1062px;
  left: 92px;
  font-size: var(--font-size-5xl);
  letter-spacing: -0.03em;
  line-height: 200%;
  font-weight: 500;
  display: inline-block;
  width: 721px;
`;
const ThroughACombination = styled.p`
  margin: 0;
`;
const ThroughACombinationContainer = styled.div`
  position: absolute;
  top: 1419px;
  left: 91px;
  font-size: var(--font-size-5xl);
  letter-spacing: -0.03em;
  line-height: 200%;
  font-weight: 500;
  display: inline-block;
  width: 697px;
  height: 297px;
`;
const ThisDiagnosticIs = styled.div`
  position: absolute;
  top: 1900px;
  left: 91px;
  letter-spacing: -0.03em;
  line-height: 200%;
  font-weight: 500;
`;
const DashboardItem = styled.div`
  position: absolute;
  top: 1040px;
  left: 1094px;
  background-color: #a6a6a6;
  filter: blur(200px);
  width: 458px;
  height: 655px;
`;
const DashboardInner = styled.img`
  position: absolute;
  top: 1040px;
  left: 1094px;
  width: 458px;
  height: 655px;
  object-fit: cover;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 1809px;
  left: 91px;
  border-radius: var(--br-44xl);
  background-color: var(--color-black);
  width: 411px;
  height: 71px;
`;
const ScheduleInMy = styled.div`
  position: absolute;
  top: 1827px;
  left: 132px;
  font-size: var(--font-size-13xl);
  letter-spacing: -0.05em;
  line-height: 111.6%;
  font-weight: 800;
  font-family: var(--font-source-sans-pro);
  color: var(--color-white);
  cursor: pointer;
`;
const DashboardRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 2158px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-dimgray-200);
  font-family: var(--font-open-sans);
`;
const PopUpContainer = styled.div`

position: absolute;
top: 231px;
left: 308px;
background-color: #d9d9d9;
width: 1112px;
height: 1624px;
`;

const Dashboard1 = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);

  };
  const handleOpenPopUp = () => {
    <Calendar  onChange={handleDateChange} value={selectedDate} />

    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    console.log(selectedDate);
    setIsPopUpOpen(false);
  };
 
 
  return (
    <DashboardRoot>
      <AreYouReadyToUnderstandYoWrapper>
        <AreYouReady>
          Are you ready to understand your behavioural patterns and relationship
          dynamics?
        </AreYouReady>
      </AreYouReadyToUnderstandYoWrapper>
      {/* <Header/> */}
      <BrainPatternAssessment>BRAIN PATTERN ASSESSMENT</BrainPatternAssessment>
      <RectangleParent>
        <GroupItem />
        <TheBreakMethod>The Break Method (c) 2023</TheBreakMethod>
        <TermsAndConditions>Terms and Conditions</TermsAndConditions>
        <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
        <Faqs>FAQs</Faqs>
      </RectangleParent>
      <DashboardChild alt="" src="/rectangle-15@2x.png" />
      <TheBreakProgram>
        The Break Program is a cutting-edge therapeutic diagnostic specifically
        designed for business professionals seeking personal growth and enhanced
        professional performance. With its comprehensive and tailored approach,
        this program provides a unique opportunity for individuals to take a
        step back, reevaluate their well-being, and embark on a transformative
        journey towards self-discovery.
      </TheBreakProgram>
      <ThroughACombinationContainer>
        <ThroughACombination>
          Through a combination of therapeutic techniques, diagnostics, and
          expert guidance, The Break Program offers a structured and safe
          environment for participants to explore their mental and emotional
          landscape. By delving into various aspects of their lives, such as
          stress management, work-life balance, and personal fulfillment,
          individuals gain valuable insights to optimize their overall
          well-being.
        </ThroughACombination>
      </ThroughACombinationContainer>
      <ThisDiagnosticIs>
        This diagnostic is best completed in one sitting, over 30 minutes in a
        distraction-free environment.
      </ThisDiagnosticIs>
      <DashboardItem />
      <DashboardInner alt="" src="/rectangle-17@2x.png" />
      <RectangleDiv />
      {isPopUpOpen && (
        <PopUpContainer>
        <h2>Schedule a Date</h2>
        <button onClick={handleClosePopUp}>Close</button>
      </PopUpContainer>
      )}
      
      <ScheduleInMy typeof="button"  onClick={handleOpenPopUp}>Schedule in my calendar</ScheduleInMy>
    </DashboardRoot>
  );
};

export default Dashboard1;
