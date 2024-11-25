import styled from 'styled-components';
import { Colors } from '../../../styles';

export const Bookmark = styled.div<{ $type: 'article' | 'else' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $type }) => ($type === 'article' ? 'none' : '1.75rem')};
  height: ${({ $type }) => ($type === 'article' ? 'none' : '1.75rem')};
  padding: 0.375rem;
  border-radius: 200px;
  background-color: ${Colors.Grayscale5};
  cursor: pointer;
`;

export const Icon = styled.img<{ $type: 'article' | 'else' }>`
  width: ${({ $type }) => ($type === 'article' ? '1.5rem' : '1.25rem')};
  height: ${({ $type }) => ($type === 'article' ? '1.5rem' : '1.25rem')};
`;
