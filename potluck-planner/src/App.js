import './App.css';
import styled from 'styled-components';
import { AccountBox } from './Components/accountBox';
import Login from './Components/LogIn';

const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


function App() {
  return (
  <AppContainer>
    <AccountBox />
  </AppContainer>
  );
}

export default App;
