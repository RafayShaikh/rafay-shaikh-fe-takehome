import React, { useEffect, useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAnnualPayroll,
  loadAnnualSales,
  loadDisableNext,
  loadEmployees,
  selectFormObject,
} from '../slice/formSlice';
import {
  StyledForm,
  StyledFormContainer,
  StyledH1,
  StyledInput,
  StyledLabel,
  StyledP,
  StyledPContainer,
} from '../styles';

/*Some of the documentation can be found in StepOne component*/
const StepThree = () => {
  const formObject = useSelector(selectFormObject);
  const [annualSales, setAnnualSales] = useState(0);
  const [annualPayroll, setAnnualPayroll] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [employeesError, setEmployeesError] = useState();
  const [annualPayrollError, setAnnualPayrollError] = useState();
  const [annualSalesError, setAnnualSalesError] = useState();
  const dispatch = useDispatch();
  //Pre selected amounts for easier entry
  const amounts = ['50000', '75000', '10000', '150000', '200000'];

  const checkForButtons = () => {
    if (
      employeesError === null ||
      annualPayrollError === null ||
      annualSalesError === null
    ) {
      dispatch(loadDisableNext(false));
    }
    if (
      employeesError !== null ||
      annualPayrollError !== null ||
      annualSalesError !== null
    ) {
      dispatch(loadDisableNext(true));
    }
  };
  const salesChange = (e) => {
    setAnnualSales(e.target.value);
    if (!e.target.value) {
      setAnnualSalesError('Annual sales must be entered');
      return;
    }
    if (e.target.value === '') {
      setAnnualSalesError('Annual sales must be entered');
      return;
    }
    setAnnualSalesError(null);
    dispatch(loadAnnualSales(e.target.value));
  };
  const payrollChange = (e) => {
    setAnnualPayroll(e.target.value);

    if (!e.target.value) {
      setAnnualPayrollError('Annual sales must be entered');
      return;
    }
    if (e.target.value === '') {
      setAnnualPayrollError('Annual sales must be entered');
      return;
    }
    setAnnualPayrollError(null);
    dispatch(loadAnnualPayroll(e.target.value));
  };
  const employeesChange = (e) => {
    setEmployees(e.target.value);
    if (!e.target.value) {
      setEmployeesError('Annual sales must be entered');
      return;
    }
    if (e.target.value === '') {
      setEmployeesError('Annual sales must be entered');
      return;
    }
    setEmployeesError(null);
    dispatch(loadEmployees(e.target.value));
  };
  //Handles the direct selection of the amount from presets
  const handleSalesClick = (amount) => {
    setAnnualSales(amount);
    setAnnualSalesError(null);
    dispatch(loadAnnualSales(amount));
  };
  //Handles the direct selection of the amount from presets
  const handlePayrollClick = (amount) => {
    setAnnualPayroll(amount);
    setAnnualPayrollError(null);
    dispatch(loadAnnualPayroll(amount));
  };
  useEffect(() => {
    setAnnualPayroll(formObject.annualPayroll);
    setAnnualSales(formObject.grossAnnualSales);
    setEmployees(formObject.numEmployees);
  }, []);
  useEffect(() => {
    checkForButtons();
  }, [annualSalesError, annualPayrollError, employeesError]);
  return (
    <StyledFormContainer>
      <StyledH1 size={2} color='#4223ff'>
        Quote Flow
      </StyledH1>
      <StyledForm>
        {annualSalesError && (
          <StyledH1 size={0.8} color='red'>
            {annualSalesError}
          </StyledH1>
        )}
        <StyledLabel size={1.4} htmlFor='annualSales'>
          Annual Gross Sales
        </StyledLabel>
        <StyledInput
          title='sales'
          type='number'
          onChange={salesChange}
          value={annualSales ? annualSales : ''}
        />
        <StyledPContainer>
          {amounts.map((amount) => (
            <StyledP onClick={(e) => handleSalesClick(amount)} key={amount}>
              {`$${amount}`}
            </StyledP>
          ))}
        </StyledPContainer>
        {annualPayrollError && (
          <StyledH1 size={0.8} color='red'>
            {annualPayrollError}
          </StyledH1>
        )}
        <StyledLabel size={1.4} htmlFor='annualPayroll'>
          Annual Payroll
        </StyledLabel>
        <StyledInput
          title='payroll'
          type='number'
          onChange={payrollChange}
          value={annualPayroll ? annualPayroll : ''}
        />
        <StyledPContainer>
          {amounts.map((amount) => (
            <StyledP onClick={(e) => handlePayrollClick(amount)} key={amount}>
              {`$${amount}`}
            </StyledP>
          ))}
        </StyledPContainer>
        {employeesError && (
          <StyledH1 size={0.8} color='red'>
            {employeesError}
          </StyledH1>
        )}
        <StyledLabel size={1.4} htmlFor='numberOfEmployees'>
          Number of Employees
        </StyledLabel>
        <StyledInput
          title='employees'
          type='number'
          onChange={employeesChange}
          value={employees ? employees : ''}
        />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default StepThree;
