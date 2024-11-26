import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 16px;
  padding-left: 6.25rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 13.5rem;
  background: ${Colors.Main5};
`;

export const StartMent = styled.p`
  color: ${Colors.Grayscale90};
  ${FontStyles.XL_SemiBold};
`;

export const Purple = styled.span`
  color: ${Colors.Main50};
`;

export const KakaoButton = styled.img`
  cursor: pointer;
  margin-top: 1rem;
`;

export const ImgPart = styled.img``;
