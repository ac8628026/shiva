import React, { useState,useRef } from 'react';
import styled from 'styled-components';
import { Link, redirect } from 'react-router-dom';


const LoginChild = styled.div`
  position: absolute;
  top: 0px;
  left: 1002px;
  background-color: var(--color-white);
  width: 500px;
  height: 1117px;
`;
const LoginItem = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1002px;
  height: 1117px;
  object-fit: cover;
`;
const TheBreakProgram = styled.div`
  position: absolute;
  top: 388px;
  left: 116px;
  letter-spacing: -0.03em;
  font-weight: 800;
  display: inline-block;
  width: 748px;
`;
const StyledButtonf = styled.button`
  position: absolute;
  top: 968px;
  left: 735px;
  color:white;
  background-color: transparent;
  //   width: 172px;
  // height: 75px;
  
  border:none;
   cursor:pointer;

  /* Add any additional styling you need for the button */
`;
const StyledButtonb = styled.button`
  position: absolute;
  top: 968px;
  left: 675px;
  background-color: transparent;
  //   width: 172px;
  // height: 75px;
  color:white;
  cursor:pointer;
  
  border:none;

  // width: 172px;
  // height: 75px;
  /* Add any additional styling you need for the button */
`;
const CreateAccount = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: -0.02em;
  font-weight: 800;
`;
const LetsGetStarted = styled.div`
  position: absolute;
  top: 58px;
  left: 0px;
  font-size: var(--font-size-xl);
  font-weight: 500;
  font-family: var(--font-open-sans);
  color: var(--color-dimgray-100);
`;
const CreateAccountParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 409px;
  height: 85px;
  font-size: var(--font-size-19xl);
  color: var(--color-black);
  font-family: var(--font-source-sans-pro);
`;
const SignUpWith = styled.div`
  position: absolute;
  top: 0px;
  left: 40.27px;
  letter-spacing: -0.01em;
  font-weight: 500;
`;
const GoogleGLogo1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 21.97px;
  height: 24px;
  object-fit: cover;
`;
const SignUpWithGoogleParent = styled.div`
  position: absolute;
  top: 18px;
  left: 163px;
  width: 204.27px;
  height: 25px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  width: 529px;
  height: 60px;
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 117px;
  left: 0px;
  width: 529px;
  height: 60px;
  color: var(--color-black);
  font-family: var(--font-manrope);
`;
const GroupItem = styled.div`
  position: absolute;
  top: 32px;
  left: 0px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  width: 529px;
  height: 60px;
`;
const FullName = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 164px;
  height: 26px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 529px;
  height: 92px;
 
`;
const EnterYourName = styled.div`
position: absolute;
  top: 32px;
  left: 0px;
  // border-radius: var(--br-8xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  width: 529px;
  height: 60px;
  font-size: var(--font-size-base);
  letter-spacing: -0.01em;
  font-weight: 500;
  color: var(--color-gray-200);
  display: flex;
  align-items: center;
  type="input"
 
  
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 259px;
  left: 0px;
  width: 529px;
  height: 92px;
  color: var(--color-black);
`;
const AlreadyHaveAn = styled.span``;
const LogInHere = styled.span`
  color: var(--color-black);
`;
const AlreadyHaveAnContainer = styled.div`
  position: absolute;
  top: 776px;
  left: 0px;
  font-size: var(--font-size-sm);
  letter-spacing: -0.01em;
  font-weight: 500;
`;
const EnterYourEmail = styled.div`
top: 32px;
left: 0px;
border-radius: var(--br-8xs);
border: 1px solid var(--color-gray-100);
box-sizing: border-box;
width: 529px;
height: 60px;
  position: absolute;
  color: var(--color-black);

  letter-spacing: -0.01em;
  font-weight: 500;
`;
const EmailAddress = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-lg);
  letter-spacing: -0.01em;
  font-weight: 500;
  color: var(--color-black);
  display: flex;
  align-items: center;
  width: 164px;
  height: 26px;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 383px;
  left: 0px;
  width: 529px;
  height: 92px;
  font-size: var(--font-size-base);
`;
const Or = styled.div`
  position: absolute;
  top: 0px;
  left: 256px;
  font-weight: 500;
`;
const LineDiv = styled.div`
  position: absolute;
  top: 9.5px;
  left: -0.5px;
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 240px;
  height: 1px;
`;
const GroupChild1 = styled.div`
  position: absolute;
  top: 9.5px;
  left: 288.5px;
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 240px;
  height: 1px;
`;
const OrParent = styled.div`
  position: absolute;
  top: 209px;
  left: 0px;
  width: 528px;
  height: 18px;
  font-size: 13px;
  color: var(--color-dimgray-100);
  font-family: var(--font-manrope);
`;
const Atleast8Characters = styled.div`
  position: absolute;

  letter-spacing: -0.01em;
  font-weight: 500;
  color: var(--color-black);
  top: 32px;
  left: 0px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  width: 529px;
  height: 60px;
`;
const EyeIcon = styled.img`
  position: absolute;
  top: 51px;
  left: 479px;
  width: 22px;
  height: 22px;
  overflow: hidden;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 507px;
  left: 0px;
  width: 529px;
  height: 92px;
  font-size: var(--font-size-base);
`;
const IAgreeToContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 33px;
  letter-spacing: -0.01em;
  font-weight: 500;
`;
const GroupChild2 = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  border-radius: 2px;
  background-color: var(--color-black);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
`;
const CheckIcon = styled.img`
  position: absolute;
  top: 1px;
  left: 0px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const IAgreeToAllTheTermsPrivParent = styled.div`
  position: absolute;
  top: 631px;
  left: 0px;
  width: 335px;
  height: 21px;
  font-size: var(--font-size-sm);
`;
const GroupChild3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-black);
  width: 529px;
  height: 60px;
`;
const CreateMyAccount = styled.div`
  
   position: absolute;
  top: 17px;
  left: 184px;
  letter-spacing: -0.01em;
  font-weight: 800;
`;
const ArrowRightIcon = styled.img`
  position: absolute;
  top: 17px;
  left: 475px;
  border-radius: var(--br-39xl);
  width: 26px;
  height: 26px;
  overflow: hidden;
`;
const RectangleParent1 = styled.div`
  position: absolute;
  top: 684px;
  left: 0px;
  width: 529px;
  height: 60px;
  color: var(--color-white);
  font-family: var(--font-source-sans-pro);
  
  `;
const GroupParent = styled.div`
  position: absolute;
  top: 163px;
  left: 1100px;
  width: 529px;
  height: 795px;
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
  font-family: var(--font-open-sans);
`;
const ManagingPartner = styled.p`
  margin: 0;
  line-height: 154.1%;
  font-weight: 800;
`;
const FischerJordanNyc = styled.p`
  margin: 0;
  font-size: var(--font-size-5xl);
  
  font-weight: 500;
  font-family: var(--font-open-sans);
`;
const ManagingPartnerFischerContainer = styled.div`
  position: absolute;
  top: 63px;
  left: 0px;
`;
const BoazSalik = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 36px;
  font-weight: 800;
`;
const ManagingPartnerFischerJordaParent = styled.div`
  position: absolute;
  top: 895px;
  left: 116px;
  width: 220px;
  height: 140px;
  font-size: var(--font-size-7xl);
`;
const LoginRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 1100px;
  overflow: hidden;
  text-align: left;
  font-size: 42px;
  color: var(--color-white);
  font-family: var(--font-source-sans-pro);
`;

const SignUp = () => {
  const submitButtonRef=useRef(null);

  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = ['/rectangle-1@2x.png', '/img1.avif', '/img2.avif','/img3.jpg'];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setagree] = useState(false);

  const handleForwardClick = () => {
    setPhotoIndex((photoIndex + 1) % photos.length);
  };

  const handleBackwardClick = () => {
    setPhotoIndex((photoIndex - 1 + photos.length) % photos.length);

  };
  const handleNameChange = (event) => {
    console.log("add");
    setName(event.target.value);
    

  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    

  };
  const handleSubmit =async (event) => {
    event.preventDefault();
    // Here you can perform the authentication logic
    // For simplicity, let's just log the user information for now
     console.log('Name:', name);
     console.log('Email:', email);
    console.log('Password:', password);
    setName('');
    setEmail('');
    setPassword('');

    // redirect('/03-payments1');


  };
  const handleagree = (event) => {
    setagree(event.target.checked);
    console.log(agree);
  };

  return (
    <LoginRoot>
      <LoginChild />
      <LoginItem alt=""  src={photos[photoIndex]} />
      <TheBreakProgram>
        "The Break Program has been instrumental in my personal and professional
        development, providing valuable insights and tools for self-reflection
        and growth."
      </TheBreakProgram>
      {/* Backward button */}
      <StyledButtonb onClick={handleBackwardClick}>
      <span style={{fontSize:'50px'}} class="material-symbols-outlined">
arrow_circle_left
</span>
      </StyledButtonb>
      {/* Forward button */}
      <StyledButtonf style={{}} onClick={handleForwardClick}>
      <span style={{fontSize:'50px'}} class="material-symbols-outlined">
arrow_circle_right
</span>
      </StyledButtonf>

      
      <GroupParent>
        <CreateAccountParent>
          <CreateAccount>Create Account</CreateAccount>
          <LetsGetStarted>
            Let’s get started with your healing journey 
          </LetsGetStarted>
        </CreateAccountParent>
        <GroupContainer>
          <SignUpWithGoogleParent>
            <SignUpWith>Sign up with Google</SignUpWith>
            <GoogleGLogo1Icon alt="" src="/google--g--logo-1@2x.png" />
          </SignUpWithGoogleParent>
          <GroupChild />
        </GroupContainer>
        <form  onSubmit={handleSubmit}>
            <GroupDiv>
          <RectangleParent>
            
            <FullName>Full Name</FullName>
          </RectangleParent >
          <input style={{ position: 'absolute',
    top: '32px',
    left: '0px',
    // borderRadius: 'var(--br-8xs)', // Uncomment if needed
    border: '1px solid var(--color-gray-100)',
    boxSizing: 'border-box',
    width: '529px',
    height: '60px',
    fontSize: 'var(--font-size-xl)',
    letterSpacing: '-0.01em',
    fontWeight: '500',
    color: 'var(--color-black)',
    display: 'flex',
    alignItems: 'center',}} type="text" name="name" minlength="2" placeholder='Enter Your Name' value={name} onChange={handleNameChange}></input>
        </GroupDiv>
        <AlreadyHaveAnContainer>
          <AlreadyHaveAn>Already have an account?</AlreadyHaveAn>
          <Link to="/login">Log in here.</Link>
        </AlreadyHaveAnContainer>
        <RectangleGroup>
          {/* <GroupItem /> */}
         <input style={{
    top: '32px',
    left: '0px',
    borderRadius: 'var(--br-8xs)',
    border: '1px solid var(--color-gray-100)',
    fontSize: 'var(--font-size-xl)',

    boxSizing: 'border-box',
    width: '529px',
    height: '60px',
    position: 'absolute',
    color: 'var(--color-black)',
    letterSpacing: '-0.01em',
    fontWeight: '300',
  }} type="email" value={email} onChange={handleEmailChange} minlength="3" placeholder='Enter Your Email'></input>

          <EmailAddress>Email Address
</EmailAddress>
        </RectangleGroup>
        <OrParent>
          <Or>OR</Or>
          <LineDiv />
          <GroupChild1 />
        </OrParent>
        <RectangleContainer>
          {/* <GroupItem /> */}
       <input style={{
  position: 'absolute',
  letterSpacing: '-0.01em',
  fontWeight: '500',
  color: 'var(--color-black)',
  top: '32px',
  left: '0px',
  borderRadius: 'var(--br-8xs)',
  fontSize: 'var(--font-size-xl)',

  border: '1px solid var(--color-gray-100)',
  boxSizing: 'border-box',
  width: '529px',
  height: '60px',
}} type="password" value={password}  onChange={handlePasswordChange} minlength="8" placeholder='Enter your Password'></input>
          <EmailAddress> Password 
</EmailAddress>
         
        </RectangleContainer>
        
        <IAgreeToAllTheTermsPrivParent>
          <IAgreeToContainer>
            <AlreadyHaveAn>{`I agree to all the `}</AlreadyHaveAn>
            <LogInHere>Terms</LogInHere>
            <AlreadyHaveAn>{`, `}</AlreadyHaveAn>
            <LogInHere>Privacy Policy</LogInHere>
            <AlreadyHaveAn>{`, and `}</AlreadyHaveAn>
            <LogInHere>Fees</LogInHere>
            <AlreadyHaveAn>.</AlreadyHaveAn>
          </IAgreeToContainer>
          {/* <GroupChild2 /> */}
          <input className='CheckIcon'  type='checkbox' checked={agree} onChange={handleagree} />
        </IAgreeToAllTheTermsPrivParent>
        <RectangleParent1  >
          <GroupChild3  type="button" style={{cursor: agree ? 'pointer' : 'not-allowed',}}   onClick={() => {
                    // Trigger a click event on the submit button
                    if (submitButtonRef.current) {
                        submitButtonRef.current.click();
                    }
                }}/>
          <CreateMyAccount >Create My Account
</CreateMyAccount>
 <button type="submit" disabled={!agree}  ref={submitButtonRef} style={{ display: 'none' }} >Submit</button>
          <ArrowRightIcon alt="" src="/arrowright1.svg" />
        </RectangleParent1>
        </form>
      </GroupParent>
      
      <ManagingPartnerFischerJordaParent>
        <ManagingPartnerFischerContainer>
          <ManagingPartner>Managing Partner</ManagingPartner>
          <FischerJordanNyc>Fischer Jordan NYC</FischerJordanNyc>
        </ManagingPartnerFischerContainer>
        <BoazSalik>Boaz Salik</BoazSalik>
      </ManagingPartnerFischerJordaParent>
    </LoginRoot>
  );
};

export default SignUp;
