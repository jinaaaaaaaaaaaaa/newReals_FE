import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

const colorStyles = {
  gray: {
    background: 'rgba(255, 255, 255, 0.3)',
    text: Colors.Main0,
  },
  gray_thinking: {
    background: Colors.Grayscale5,
    text: Colors.Grayscale50,
  },
  purple: {
    background: Colors.Main5,
    text: Colors.Main50,
  },
  red: {
    background: 'rgba(255, 239, 244, 1)',
    text: 'rgba(255, 117, 160, 1)',
  },
};

export const Tag = styled.div<{
  $color: 'gray' | 'purple' | 'red' | 'gray_thinking';
  $size: 'small' | 'large';
}>`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ $color }) => colorStyles[$color || 'purple'].background};
  color: ${({ $color }) => colorStyles[$color || 'purple'].text};
  font-size: ${({ $size }) => ($size === 'small' ? FontStyles.XS_Medium : FontStyles.SM_Medium)};
  white-space: nowrap;
  height: fit-content;
`;
