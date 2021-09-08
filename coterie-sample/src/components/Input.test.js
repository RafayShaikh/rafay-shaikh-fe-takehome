import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import StepOne from '../components/StepOne';
import { store } from '../app/store';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

it('Inputs Render Check', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <StepOne />
      <StepTwo />
      <StepThree />
    </Provider>
  );
  const bussinessName = queryByTitle('bussinessName');
  const industry = queryByTitle('industry');
  const email = queryByTitle('email');
  const zipcode = queryByTitle('zipcode');
  const sales = queryByTitle('sales');
  const payroll = queryByTitle('zipcode');
  const employees = queryByTitle('zipcode');

  expect(bussinessName).toBeTruthy();
  expect(industry).toBeTruthy();
  expect(email).toBeTruthy();
  expect(zipcode).toBeTruthy();
  expect(employees).toBeTruthy();
  expect(payroll).toBeTruthy();
  expect(sales).toBeTruthy();
});

describe('change input', () => {
  it('onChange', () => {
    const { queryByTitle } = render(
      <Provider store={store}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </Provider>
    );
    const bussinessName = queryByTitle('bussinessName');
    fireEvent.change(bussinessName, { target: { value: 'Something' } });
    expect(bussinessName.value).toBe('Something');

    const industry = queryByTitle('industry');
    fireEvent.change(industry, { target: { value: '10537' } });
    expect(screen.getByText('Plumber').selected).toBeTruthy();

    const email = queryByTitle('email');
    fireEvent.change(email, { target: { value: 'Something@gmail.com' } });
    expect(email.value).toBe('Something@gmail.com');

    const zipcode = queryByTitle('zipcode');
    fireEvent.change(zipcode, { target: { value: '78400' } });
    expect(zipcode.value).toBe('78400');

    const sales = queryByTitle('sales');
    fireEvent.change(sales, {
      target: { value: '10000' },
    });
    expect(sales.value).toBe('10000');

    const payroll = queryByTitle('payroll');
    fireEvent.change(payroll, { target: { value: '10000' } });
    expect(payroll.value).toBe('10000');

    const employees = queryByTitle('employees');
    fireEvent.change(employees, { target: { value: '10' } });
    expect(employees.value).toBe('10');
  });
});
