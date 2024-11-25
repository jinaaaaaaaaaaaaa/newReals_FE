import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Whole = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  &:hover img {
    transform: scale(1.2);
  }
`;

export const EmojiPart = styled.img<{ $isClicked: boolean }>`
  width: 2.25rem;
  height: 2.25rem;
  transition: transform 0.2s ease;
`;

export const ContentPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.p<{ $isClicked: boolean }>`
  color: ${({ $isClicked }) => ($isClicked ? Colors.Main50 : Colors.Grayscale70)};
  ${FontStyles.SM_Medium}
  opacity: 0.86;
`;

export const Count = styled.p<{ $isClicked: boolean }>`
  color: ${({ $isClicked }) => ($isClicked ? Colors.Main50 : Colors.Grayscale70)};
  ${FontStyles.MD2_Bold};
`;
