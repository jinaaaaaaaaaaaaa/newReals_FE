import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const FirstIntro = styled.div`
  padding: 6.25rem;
  height: 320px;
  align-self: stretch;
  background-color: ${Colors.Main5};
  gap: 6rem;
  justify-content: center;
  align-items: center; /* 세로 정렬 */
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const Purple = styled.span`
  color: ${Colors.Main50};
`;

export const Slogan = styled.p`
  color: ${Colors.Grayscale90};
  font-family: 'Syncopate';
  font-size: 2.25rem;
  line-height: 120%;
`;
export const Info = styled.p`
  color: ${Colors.Grayscale70};
  ${FontStyles.MD1_Medium};
  margin-top: 0.5rem;
`;

export const Img = styled.img`
  height: auto;
  width: 46.25rem;
  margin-top: 3rem;
  object-fit: cover;
`;
