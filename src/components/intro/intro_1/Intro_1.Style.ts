import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const FirstIntro = styled.div`
  padding: 6.25rem;
  height: 320px;
  align-self: stretch;
  background-color: ${Colors.Main5};
`;

export const Purple = styled.span`
  color: ${Colors.Main50};
`;

export const Slogan = styled.p`
  color: ${Colors.Grayscale90};
  font-family: Syncopate; // 적용 안되는것같다
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 43.2px */
`;
export const Info = styled.p`
  color: ${Colors.Grayscale70};
  ${FontStyles.MD1_Medium};
`;
