import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const AddPoint = styled.div<{ $type?: 'header' | 'quiz' }>`
  ${({ $type }) => ($type === 'header' ? FontStyles.SM_Medium : FontStyles.XS_Medium)}
  display: inline-flex; //내부 글씨에 맞춤
  padding: 0.375rem 0.75rem;
  padding: ${({ $type }) => ($type === 'header' ? '.5rem 1rem' : '.375rem .75rem')};
  align-items: center;
  gap: 0.25rem;
  border-radius: 25rem;
  background-color: ${Colors.Main5};
  color: ${Colors.Grayscale90};
`;

export const CoinImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const Text = styled.p<{ $type?: 'header' | 'quiz' }>`
  color: ${({ $type }) => ($type === 'header' ? Colors.Main50 : Colors.Grayscale90)};
`;
