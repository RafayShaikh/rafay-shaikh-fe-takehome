import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { store } from '../app/store';
import BottomSection from './BottomSection';

it('Button Render Check', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <BottomSection />
    </Provider>
  );
  const next = queryByTitle('next');
  const back = queryByTitle('back');

  expect(back).toBeTruthy();
  expect(next).toBeTruthy();
});
