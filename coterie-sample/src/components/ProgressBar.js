import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectNavigate } from '../slice/formSlice';
import { StyledH1, StyledProgress } from '../styles';

const StyledBar = styled(StyledH1)`
  padding: 0.6rem 2rem;
  border-radius: 10px;
`;
const ProgressBar = () => {
  const state = useSelector(selectNavigate);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(state.currentPage + 1);
  }, [state.currentPage]);
  return (
    <StyledProgress>
      <StyledBar background={step === 1 && 'rgb(64, 255, 177)'}>
        Step 1
      </StyledBar>
      <StyledBar background={step === 2 && 'rgb(64, 255, 177)'}>
        Step 2
      </StyledBar>
      <StyledBar background={step === 3 && 'rgb(64, 255, 177)'}>
        Step 3
      </StyledBar>
    </StyledProgress>
  );
};

export default ProgressBar;
