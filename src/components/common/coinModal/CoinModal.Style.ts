import styled, { keyframes } from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(50%);
  }
`;

export const AnimatedImage = styled.img`
  animation: ${slideDown} 2s ease-in-out infinite;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: auto;
`;

export const Modal = styled.div`
  position: relative;
  width: 26.25rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${Colors.Main0};
  gap: 1rem;
  padding: 1.25rem;

  @media (max-width: 767px) {
    width: 16.125rem;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 0.25rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Coin = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  margin-bottom: 1.25rem;
`;

export const CoinText = styled.span`
  ${FontStyles.MD1_Bold}
  color: ${Colors.Main50};
  margin-bottom: 0.25rem;
`;

export const Text = styled.p`
  ${FontStyles.SM_Medium}
  color:${Colors.Grayscale70}
`;
