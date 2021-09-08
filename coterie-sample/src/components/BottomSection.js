import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';
import { BottomButtonContainer, StyledButton } from '../styles';
import {
  loadCurrentPage,
  loadDisableNext,
  selectNavigate,
} from '../slice/formSlice';
import { useDispatch, useSelector } from 'react-redux';

const BottomSection = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectNavigate);
  const history = useHistory();
  const [pages, setPages] = useState([
    'stepone',
    'steptwo',
    'stepthree',
    'submission',
  ]);

  const previousPage = (e) => {
    e.preventDefault();
    if (state.currentPage <= 0) {
      return;
    }
    dispatch(loadCurrentPage(state.currentPage - 1));
  };
  const nextPage = (e) => {
    e.preventDefault();
    if (state.currentPage >= pages.length - 1) {
      return;
    }
    dispatch(loadCurrentPage(state.currentPage + 1));
    dispatch(loadDisableNext(true));
  };
  useEffect(() => {
    history?.push(`/form/${pages[state.currentPage]}`);
  }, [state.currentPage]);
  return (
    <BottomButtonContainer>
      <StyledButton
        title='back'
        disabled={state.disableBack}
        size={1.4}
        onClick={previousPage}
      >
        Back
      </StyledButton>
      <StyledButton
        title='next'
        disabled={state.disableNext}
        size={1.4}
        onClick={nextPage}
      >
        Next
      </StyledButton>
    </BottomButtonContainer>
  );
};

export default BottomSection;
