import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  loadApiResponse,
  loadShowButtons,
  selectFormObject,
} from '../slice/formSlice';
import {
  StyledButton,
  StyledGenericContainer,
  StyledH1,
  StyledLabel,
} from '../styles';
//Handles the direct selection of the amount from presets
const FinalStep = () => {
  const data = useSelector(selectFormObject);
  const dispatch = useDispatch();
  const history = useHistory();
  const [disabledButton, setDisabledButton] = useState(true);

  /*Submits data to the API given with auth header and
   gets back a response to decide what insurance policies
   are available*/
  const submitData = () => {
    console.log(process.env.REACT_APP_TOKEN);
    fetch(
      'https://api-sandbox.coterieinsurance.com/v1/commercial/applications',
      {
        method: 'POST',
        headers: {
          Authorization: `token ${process.env.REACT_APP_TOKEN}`, //Given token coming from env file
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(loadApiResponse(json)); //Saves API response in redux store
        history.push('/success'); //On successful response
      })
      .catch((errors) => console.log(errors));
    //Catches errors and display on console. It can also be dispayed in a component in future.
  };
  useEffect(() => {
    dispatch(loadShowButtons(false));
    //turn buttons off
  }, []);
  return (
    <StyledGenericContainer>
      <StyledH1 size={2.2} color='#4223ff'>
        Confirmation
      </StyledH1>
      <input
        style={{ height: '25px', width: '25px' }}
        type='checkbox'
        id='confirm'
        onChange={(e) => setDisabledButton(!disabledButton)}
      />
      <StyledLabel size={1.5} htmlFor='confirm'>
        Agree to Terms & Policies{' '}
        {/*Just a place holder but can be use to add an addional component*/}
      </StyledLabel>
      <StyledButton
        style={{ margin: '2rem' }}
        size={1.8}
        disabled={disabledButton}
        onClick={submitData}
      >
        Submit
      </StyledButton>
    </StyledGenericContainer>
  );
};

export default FinalStep;
