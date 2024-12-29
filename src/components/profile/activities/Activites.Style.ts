import styled from 'styled-components';

export const MyActivities = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const RightHead = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1.75rem;
  }
`;
