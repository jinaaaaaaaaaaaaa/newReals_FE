import styled from 'styled-components';
import { Colors } from '../../../styles';

export const IntroMent = styled.div<{ isLeft: boolean }>`
  display: flex;
  flex-direction: ${({ isLeft }) => (isLeft ? 'row' : 'row-reverse')};
  height: 25rem;
  padding: 0rem 6.25rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-color: ${({ isLeft }) => (isLeft ? Colors.Grayscale5 : Colors.Main0)};
  gap: 6rem;
`;

export const ImgPart = styled.img`
  margin-top: auto;
`;
