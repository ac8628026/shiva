import React,{useState} from 'react'
import styled from "styled-components";


const MaskGroupParent = styled.div`
  position: absolute;
  top: 50px;
  left: 84px;
  width: 1560px;
  height: 56px;
  font-size: var(--font-size-lg);
  color: var(--color-black);
  font-family: var(--font-source-sans-pro);
  z-index:100;
`;
const MaskGroupIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 231px;
  height: 56px;
  object-fit: cover;
`;
const EllipseParent = styled.div`
  position: absolute;
  top: 6px;
  left: 1337px;
  width: 223px;
  height: 45px;
  cursor:pointer;
`;
const GroupChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  object-fit: cover;
`;
const BizzieGoldParent = styled.div`
  position: absolute;
  top: 1px;
  left: 65px;
  width: 158px;
  height: 42px;
`;

const BizzieGold = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: -0.02em;
  font-weight: 800;
`;

const Bizziebreakmethodcom = styled.div`
  position: absolute;
  top: 23px;
  left: 0px;
  font-size: var(--font-size-sm);
  letter-spacing: -0.02em;
  font-weight: 500;
  font-family: var(--font-open-sans);
  color: var(--color-gray-300);
`;
const Popup=styled.div`
position: absolute;
top: 50px;
right: 40px;
background-color:black;
cursor:pointer;

border: 1px solid #ccc;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 10px;
z-index: 1000;
`;

const Button=styled.div`
background-color:black;
cursor:pointer;
color:white;
`;

const Header = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleProfileClick = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const handleLogoutClick = () => {
    // Perform logout actions here
    // For example, set isLoggedIn state to false
    setIsPopupVisible(false);
    console.log("logout");
  };

  return (
    <MaskGroupParent>
    <MaskGroupIcon alt="" src="/mask-group@2x.png" />
    <EllipseParent typeof='button' onClick={handleProfileClick}>
      <GroupChild alt="" src="/ellipse-2@2x.png" />
      <BizzieGoldParent>
        <BizzieGold>Bizzie </BizzieGold>
        <Bizziebreakmethodcom>bizzie@breakmethod.com</Bizziebreakmethodcom>
      </BizzieGoldParent>
    </EllipseParent>
    {isPopupVisible && (
          <Popup>
            <Button typeof='button' onClick={handleLogoutClick}>Logout</Button>
          </Popup>
        )}
  </MaskGroupParent>
  )
}

export default Header