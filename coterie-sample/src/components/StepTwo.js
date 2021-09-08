import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import {
  loadContactEmail,
  loadDisableNext,
  loadZipcode,
  selectFormObject,
} from '../slice/formSlice';
import {
  StyledForm,
  StyledFormContainer,
  StyledH1,
  StyledInput,
  StyledLabel,
} from '../styles';

/*Some of the documentation can be found in StepOne component*/
const StepTwo = () => {
  const formObject = useSelector(selectFormObject);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [emailError, setEmailError] = useState();
  const [zipcodeError, setZipcodeError] = useState();

  const checkForButtons = () => {
    if (emailError === null || zipcodeError === null) {
      dispatch(loadDisableNext(false));
    }
    if (emailError !== null || zipcodeError !== null) {
      dispatch(loadDisableNext(true));
    }
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
    //Uses regex to Validate
    let re = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!e.target.value) {
      setEmailError('Email must be entered');
      return;
    }
    if (!re.test(e.target.value)) {
      setEmailError('Please enter a valid email format');
      return;
    }
    setEmailError(null);
    dispatch(loadContactEmail(e.target.value));
  };
  const zipcodeChange = (e) => {
    setZipcode(e.target.value);
    //uses regex to validate
    let re = new RegExp('[0-9]{5}');
    if (!e.target.value) {
      setZipcodeError('Please enter a valid zipcode format');
      return;
    }
    if (!re.test(e.target.value)) {
      setZipcodeError('Zipcode format is not accepted');
      return;
    }

    setZipcodeError(null);
    dispatch(loadZipcode(e.target.value));
  };
  useEffect(() => {
    setEmail(formObject.contactEmail);
  }, []);
  useEffect(() => {
    checkForButtons();
  }, [emailError, zipcodeError]);
  return (
    <StyledFormContainer>
      <StyledH1 size={2} color='#4223ff'>
        Quote Flow
      </StyledH1>
      <StyledForm>
        {emailError && (
          <StyledH1 size={0.8} color='red'>
            {emailError}
          </StyledH1>
        )}
        <StyledLabel size={1.4} htmlFor='email'>
          Email
        </StyledLabel>
        <StyledInput
          type='email'
          title='email'
          onChange={emailChange}
          value={email ? email : ''}
        />
        {zipcodeError && (
          <StyledH1 size={0.8} color='red'>
            {zipcodeError}
          </StyledH1>
        )}
        <StyledLabel size={1.4} htmlFor='zipcode'>
          Zipcode
        </StyledLabel>
        <StyledInput
          type='text'
          pattern='[0-9]{5}'
          title='zipcode'
          maxLength={5}
          onChange={zipcodeChange}
          value={zipcode ? zipcode : ''}
        />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default StepTwo;
