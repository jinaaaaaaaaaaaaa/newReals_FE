import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 16px;
  padding: 3.75rem 6.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
  height: 13.5rem;
  background: ${Colors.Main5};
`;

export const StartMent = styled.p`
  color: ${Colors.Grayscale90};
  ${FontStyles.XL_SemiBold}
`;

export const Purple = styled.span`
  color: ${Colors.Main50};
`;

export const KakaoButton = styled.img`
  cursor: pointer;
`;
