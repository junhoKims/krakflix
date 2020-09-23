import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface IMessageProps {
  color?: string;
  text: string;
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Text = styled.span<{ color?: string }>`
    color: #EA2027;
    font-weight: 600;
    color: ${props => props.color};
`;

const Message: React.FC<IMessageProps> = ({ color, text }) => (
  <Container>
      <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Message;
