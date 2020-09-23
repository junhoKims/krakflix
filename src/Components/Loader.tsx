import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-size: 21px;
`;

const Loader: React.FC = () => (
  <Container>
    <span role='img' aria-label='Loading'>
      ⏰
    </span>
  </Container>
);

export default Loader;
