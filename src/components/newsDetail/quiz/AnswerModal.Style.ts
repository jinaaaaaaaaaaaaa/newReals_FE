import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const ModalPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 26.25rem;
  border-radius: 1rem;
  background: ${Colors.Main0};
  @media (max-width: 767px) {
    width: 20.25rem;
  }
`;

export const ModalHead = styled.div`
  display: flex;
  padding: 1.25rem;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
`;

export const Close = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const EmojiPart = styled.div`
  ${FontStyles.MD1_Bold}
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 0.5rem;
  color: ${Colors.Main50};
  cursor: default;
`;

export const ModalImg = styled.img`
  width: 4.9017rem;
  height: 4.8264rem;
  margin-bottom: 0.5rem;
`;

export const AnswerPart = styled.div`
  justify-content: center;
  align-self: stretch;
  margin: 1.25rem 1.25rem 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: default;
`;
