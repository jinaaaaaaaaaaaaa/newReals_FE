import styled from 'styled-components';

export const KeywordList = styled.div<{ $type?: 'register' | 'modal' }>`
  display: ${({ $type }) => ($type === 'modal' ? 'flex' : 'grid')};
  ${({ $type }) =>
    $type === 'modal' ? 'gap: 0.5rem;' : 'grid-template-columns: repeat(2, 1fr); gap: 0.75rem;'};
`;
