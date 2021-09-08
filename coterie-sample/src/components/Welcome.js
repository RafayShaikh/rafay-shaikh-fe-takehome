import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import '../App.css';
import { StyledH1, StyledButton } from '../styles';

const WelcomeButton = styled(StyledButton)`
  margin-top: 1em;
`;
const TitleText = styled(StyledH1)`
  margin-top: 1em;
  font-weight: 400;
  & span {
    color: #4223ff;
    font-weight: 700;
  }
`;

const WelcomeSection = styled.div`
  width: 20em;
  height: auto;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem;
  margin-top: 10%;
  border-radius: 10px;
  box-shadow: 0px 2px 10px -2px #40ffb1;

  & img {
    width: 100%;
    object-fit: contain;
    margin-bottom: 1em;
  }

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

const Welcome = ({ setIsWelcome }) => {
  const history = useHistory();
  const handleClick = (params) => {
    setIsWelcome(false);
    history.push('/form/stepone');
  };
  return (
    <WelcomeSection>
      <img src='/logo.png' alt='Coterie' />
      <TitleText size={1.3}>
        Sample by <span>Rafay Shaikh</span>
      </TitleText>
      <WelcomeButton size={1.5} onClick={handleClick}>
        Get Covered
      </WelcomeButton>
    </WelcomeSection>
  );
};

export default Welcome;
