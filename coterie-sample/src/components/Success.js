import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectApiResponse } from '../slice/formSlice';
import {
  StyledGenericContainer,
  StyledH1,
  StyledPolicies,
  StyledPolicy,
} from '../styles';
import { ReactComponent as PL } from '../PL.svg';
import { ReactComponent as GL } from '../GL.svg';
import { ReactComponent as BOP } from '../BOP.svg';

const Success = () => {
  //gets the API response from redux store
  const response = useSelector(selectApiResponse);
  //policy codes for condional rendering
  const [policyTypes, setPolicyTypes] = useState(['GL', 'PL', 'BOP']);

  useEffect(() => {
    //sets the available policies.
    setPolicyTypes(response.availablePolicyTypes);
  }, [response]);
  return (
    <StyledGenericContainer>
      <StyledH1 size={2} color='blue'>
        Results for the inquiry
      </StyledH1>
      <StyledPolicies>
        {policyTypes?.map(
          (
            policy //go through the available policy list
          ) => (
            <div key={policy}>
              {policy === 'GL' ? ( //renders based on given policy code in the prompt
                <StyledPolicy>
                  <GL /> {/*SVG ICONS */}
                  <StyledH1 size={0.5}>General Liability Policy</StyledH1>
                </StyledPolicy>
              ) : null}
              {policy === 'PL' ? (
                <StyledPolicy>
                  <PL /> {/*SVG ICONS */}
                  <StyledH1 size={0.5}>Professional Liability Policy</StyledH1>
                </StyledPolicy>
              ) : null}
              {policy === 'BOP' ? (
                <StyledPolicy>
                  <BOP /> {/*SVG ICONS */}
                  <StyledH1 size={0.5}>Business Owner's Policy</StyledH1>
                </StyledPolicy>
              ) : null}
            </div>
          )
        )}
      </StyledPolicies>
    </StyledGenericContainer>
  );
};

export default Success;
