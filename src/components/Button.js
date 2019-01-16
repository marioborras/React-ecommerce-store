import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-radius: 0.5rem;
  color: var(--lightBlue);
  cursor: pointer;
  font-size: 1.4rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  padding: 0.2rem 0.5rem;
  transition: all 0.5s ease-in-out;
  text-transform: capitalize;
  &:hover {
    background: var(--lightblue);
    color: var(--mainBlue);
  }
  &:focuse {
    outline: none;
  }
`;
