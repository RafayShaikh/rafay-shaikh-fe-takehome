import styled, { keyframes } from 'styled-components';

/**
 * This includes most of the styles this app is using
 * Some of the styles are inline or in the components
 * to show the variety of mehtonds to apply styled
 * components
 */

//Simple Animation Keyframe
export const SlideUp = keyframes`
  from {
   opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const StyledProgress = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 1rem auto;
`;

export const StyledPolicies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledPolicy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.1em 0.2em;
  margin: 2em 2em;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  border: 2px solid blue;
  transition: all 0.3s;
  & h1 {
    font-size: 2em;
    font-weight: 500;
    color: #4223ff;
  }
  &:hover {
    border: 2px solid rgb(64, 255, 177);
    box-shadow: 0px 0px 12px -5px rgb(64, 255, 177);
    cursor: pointer;
  }
`;
export const StyledGenericContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledPContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: -0.9em;
`;
export const StyledP = styled.p`
  background-color: whitesmoke;
  border: 2px solid gray;
  padding: 0.4em 1em;
  margin: 0.3em 0.9em;
  border-radius: 24px;
  color: rgb(65, 35, 255);
  font-weight: 700;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    background-color: rgb(65, 35, 255);
    color: white;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 500;
  font-size: ${(props) => `${props.size}rem` || '1.5rem'};
  color: ${(props) => `${props.color}` || 'black'};
`;
export const StyledFormContainer = styled.div`
  padding: 0.5em 1em;
`;
export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const StyledSelect = styled.select`
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  color: rgb(13, 13, 70);
  font-size: 1.2rem;
  letter-spacing: 0.2px;
  line-height: 15px;
  border: 1px solid rgb(184, 184, 188);
  padding: 0.8rem 0.8rem;
  transition: all 0.1s ease;
  max-width: 700px;
  box-sizing: border-box;
  width: 100%;
  margin: 1em 0em;
  &:focus {
    outline: none;
    border: 1px solid blue;
    box-shadow: 1px 1px 6px -2px blue;
  }
`;
export const StyledInput = styled.input`
  appearance: none;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  color: rgb(13, 13, 70);
  font-size: 1.2rem;
  letter-spacing: 0.2px;
  line-height: 15px;
  border: 1px solid rgb(184, 184, 188);
  padding: 0.8rem 0.8rem;
  transition: all 0.1s ease;
  max-width: 700px;
  box-sizing: border-box;
  width: 100%;
  margin: 1em 0em;
  &:focus {
    outline: none;
    border: 1px solid blue;
    box-shadow: 1px 1px 6px -2px blue;
  }
`;
export const FormContainer = styled.div`
  margin: 4em 2em;
  background-color: white;
  border-radius: 10px;
  width: 80%;
  max-width: 950px;
  min-width: 300px;
  box-shadow: 0px 0px 10px -5px blue;
`;
export const StyledH1 = styled.h1`
  font-size: ${(props) => `${props.size}rem` || '1.5rem'};
  color: ${(props) => `${props.color}` || 'black'};
  background-color: ${(props) => `${props.background} ` || 'transparent'};
`;
export const BottomButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  padding-bottom: 1.5em;
`;
export const StyledButton = styled.button`
  box-sizing: border-box;
  color: white;
  font-size: ${(props) => `${props.size}rem` || '1.5rem'};
  border: none;
  border-radius: 2rem;
  background-color: rgb(13, 13, 70);
  padding: 0.5rem 3rem;
  transition: 0.1s;
  border: 3px solid transparent;
  opacity: 0;
  animation: ${SlideUp} 0.5s ease-out forwards;

  &:disabled {
    color: rgb(184, 184, 188);
    border: 1px solid rgb(93, 94, 133);
    background-color: rgb(1 1 50 / 69%);
    opacity: 0.3;
  }
  &:hover {
    cursor: pointer;
    background-color: rgb(37, 37, 121);
    border: 3px solid rgb(64, 255, 177);
  }
  &[disabled]:hover {
    border: 1px solid rgb(93, 94, 133);
    background-color: rgb(1, 1, 50);
    cursor: default;
  }
`;
