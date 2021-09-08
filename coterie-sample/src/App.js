import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import BottomSection from './components/BottomSection';
import FinalStep from './components/FinalStep';
import Success from './components/Success';
import Welcome from './components/Welcome';
import { useState } from 'react';
import { FormContainer } from './styles';
import { useSelector } from 'react-redux';
import { selectNavigate } from './slice/formSlice';
import ProgressBar from './components/ProgressBar';

function App() {
  const state = useSelector(selectNavigate); //Selects webstate from redux
  const [isWelcome, setIsWelcome] = useState(true); //Toggle for welcome screen
  return (
    <div className='App'>
      <Router>
        {isWelcome ? ( //Conditonal Rendering with ?
          <Welcome setIsWelcome={setIsWelcome} />
        ) : (
          <FormContainer>
            {
              state.showButtons && (
                <ProgressBar />
              ) /*Contional Rendering with &&*/
            }
            <Switch>
              {' '}
              {/*Router Switch to Switch Between These Components*/}
              <Route path='/form/stepone' component={StepOne} />
              <Route path='/form/steptwo' component={StepTwo} />
              <Route path='/form/stepthree' component={StepThree} />
              <Route path='/form/submission' component={FinalStep} />
              <Route path='/success' component={Success} />
            </Switch>
            {state.showButtons && <BottomSection />}
          </FormContainer>
        )}
      </Router>
    </div>
  );
}

export default App;
