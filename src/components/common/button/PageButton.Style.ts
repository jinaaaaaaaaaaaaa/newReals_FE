import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const PageButton = styled.button<{ $buttonStyle: 'left' | 'right' }>`
  ${FontStyles.SM_Medium}
  width: 100%;
  max-width: 12.5rem;
  height: 2.5rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  background-color: ${Colors.Grayscale5};
  border-radius: 0.5rem;
  border: none;
  color: ${Colors.Grayscale70};

  &:hover {
    color: ${Colors.Main0};
    background-color: ${Colors.Grayscale20};
  }

  justify-content: ${({ $buttonStyle }) =>
    $buttonStyle === 'right' ? 'space-between' : 'flex-start'};
  gap: ${({ $buttonStyle }) => ($buttonStyle === 'left' ? '0.75rem' : '0')};

  .icon {
    flex-shrink: 0; // 아이콘 크기를 고정
  }

  .text {
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
