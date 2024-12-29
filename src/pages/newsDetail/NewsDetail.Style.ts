import styled from 'styled-components';
import { Colors } from '../../styles';

export const NewsDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 6.25rem 5rem 6.25rem;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  gap: 2rem;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 1rem;
    justify-content: center;
    gap: 2rem;
    border-top: 1px solid ${Colors.Grayscale10};
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 1.25rem;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
  }
`;

export const NewsPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 44.5625rem;
  gap: 2rem;
  margin: 0 auto;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    margin: 0 auto;
  }
`;

export const NewsImg = styled.img`
  width: 100%;
`;

export const PageNavigate = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuizPart = styled.div`
  max-width: 21.6875rem;
  @media (max-width: 767px) {
    width: 100%;
    max-width: none;
  }
`;
