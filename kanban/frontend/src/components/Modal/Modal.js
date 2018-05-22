// react imports
import React from 'react';

// 3rd party imports
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #000;
  opacity: 0.9;
  z-index: 100;
`;

const Content = styled.div`
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  border-radius: 2px;
  padding: 1rem;
  background-color: #209028;
`;

const modal = (props) => (
  <Container>
    <Content>
      <div>{props.message}</div>
      <button
        onClick={() => props.toggleModal()}
      >
        Close
      </button>
    </Content>
  </Container >
);

export default modal;