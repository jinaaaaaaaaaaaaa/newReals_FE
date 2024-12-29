import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 8.75rem;
  gap: 3.75rem;

  @media (max-width: 767px) {
    padding: 3.75rem 1rem;
    gap: 3.75rem;
  }
`;
