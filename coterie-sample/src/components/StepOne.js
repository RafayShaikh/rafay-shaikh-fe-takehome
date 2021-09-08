import React, { useEffect, useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadBussinessName,
  loadDisableBack,
  loadDisableNext,
  loadIndustryId,
  selectFormObject,
} from '../slice/formSlice';
import {
  StyledForm,
  StyledFormContainer,
  StyledH1,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from '../styles';

const StepOne = () => {
  const formObject = useSelector(selectFormObject); //Form Data From Redux
  //States for bussiness name and industry
  const [industry, setIndustry] = useState('');
  const [bussinessName, setBussinessName] = useState('');
  //Error states for both
  const [bussinessNameErrors, setBussinessNameErrors] = useState();
  const [industryErrors, setIndustryErrors] = useState();
  //To Send data to Redux Store
  const dispatch = useDispatch();
  //List of Industry objects with id and title given in the prompt
  const industryList = [
    { industryId: '10537', title: 'Plumber' },
    { industryId: '10391', title: 'Software developer' },
    { industryId: '10415', title: 'Lawyer' },
    { industryId: '10109', title: 'Handyman' },
  ];
  //Checks for error to disable or enable to buttons
  const checkForButtons = () => {
    if (bussinessNameErrors === null || industryErrors === null) {
      dispatch(loadDisableNext(false)); //Disabling Buttons in Redux Store
      dispatch(loadDisableBack(false));
    }
    if (bussinessNameErrors !== null || industryErrors !== null) {
      dispatch(loadDisableNext(true)); //Enabling Buttons in Redux Store
      dispatch(loadDisableBack(true));
    }
  };

  //Validate name and update redux store.
  const nameChange = (e) => {
    setBussinessName(e.target.value);
    if (!e.target.value) {
      setBussinessNameErrors('Bussiness Name Must Be Entered');
      return;
    }
    if (e.target.value === '') {
      setBussinessNameErrors('Bussiness Name Must Be Entered');
      return;
    }
    setBussinessNameErrors(null);
    dispatch(loadBussinessName(e.target.value));
  };
  //Validate industry and update redux store
  const industryChange = (e) => {
    if (!e.target.value) {
      setIndustryErrors('Industry Must Be Selected');
      dispatch(loadIndustryId(null));
      setIndustry('');
      return;
    }
    if (e.target.value === 'null') {
      setIndustryErrors('Industry Must Be Selected');
      setIndustry('');
      dispatch(loadIndustryId(null));
      return;
    }
    setIndustryErrors(null);
    setIndustry(e.target.value);
    dispatch(loadIndustryId(e.target.value));
  };

  useEffect(() => {
    //Gets data from redux store if data is present on first render
    setIndustry(formObject.industryId);
    setBussinessName(formObject.bussinessName);
  }, []);
  useEffect(() => {
    /*
    When two dependencies of errors changes, this
    validate for button disabling. 
    */
    checkForButtons();
  }, [industryErrors, bussinessNameErrors]);

  return (
    <StyledFormContainer>
      <StyledH1 size={2} color='#4223ff'>
        Quote Flow
      </StyledH1>
      {/*Bussiness Name*/}
      {bussinessNameErrors && ( //Displays Error
        <StyledH1 size={0.8} color='red'>
          {bussinessNameErrors}
        </StyledH1>
      )}
      <StyledForm>
        <StyledLabel size={1.4} htmlFor='bussinessName'>
          Bussiness Name
        </StyledLabel>
        <StyledInput
          id='bussinessName'
          title='bussinessName'
          type='text'
          onChange={nameChange}
          value={bussinessName ? bussinessName : ''}
        />
        {/*Industry*/}
        {industryErrors && ( //Displays Error
          <StyledH1 size={0.8} color='red'>
            {industryErrors}
          </StyledH1>
        )}
        <StyledLabel size={1.4} htmlFor='industry'>
          Industry
        </StyledLabel>
        <StyledSelect
          id='industry'
          title='industry'
          value={industry}
          onChange={industryChange}
        >
          <option value=''></option>
          {industryList.map((index) => (
            <option
              title={index.industryId}
              key={index.industryId}
              value={index.industryId}
            >
              {index.title}
            </option>
          ))}
        </StyledSelect>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default StepOne;
