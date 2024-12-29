import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;
  padding: 2rem 6.25rem 6.25rem;

  @media (max-width: 767px) {
    padding: 2rem 1rem 3.75rem;
  }
`;

export const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
