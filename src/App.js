import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

function App() {
  return (

    <Router>
      <>
        {isLoggedIn && null} //헤더 들어갈 자리
        <Wrapper>
          <Routes isLoggedIn={isLoggedIn} />
          //Footer 들어갈 자리
        </Wrapper>
      </>
    </Router>
  )
}

export default App;
