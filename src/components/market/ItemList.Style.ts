import styled from 'styled-components';

export const ItemListBox = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.75rem 1.25rem;
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
