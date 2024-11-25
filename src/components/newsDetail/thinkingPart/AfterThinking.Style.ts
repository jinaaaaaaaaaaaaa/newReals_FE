import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const AfterThinking = styled.div`
  display: flex;
  width: 100%;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 0.75rem;
  background: ${Colors.Grayscale5};
`;

export const MyThinking = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.5rem;
  background: ${Colors.Main0};
  gap: 0.625rem;
`;

export const MyThinkingContent = styled.div`
  color: ${Colors.Grayscale70};
  ${FontStyles.SM_SemiBold};
`;

export const OthersThinking = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-self: stretch;
`;

export const ContentTitle = styled.p`
  color: ${Colors.Grayscale80};
  ${FontStyles.MD2_SemiBold};
`;

export const OthersPart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.5rem;
  background: ${Colors.Main0};
  ${FontStyles.SM_Medium};
  color: ${Colors.Grayscale70};
`;

export const OthersContent = styled.div<{ $noBorder?: boolean }>`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 0.5rem;
  padding-bottom: ${({ $noBorder }) => ($noBorder ? '0rem' : `1.25rem`)};
  margin-bottom: ${({ $noBorder }) => ($noBorder ? '0rem' : `1.25rem`)};
  border-bottom: ${({ $noBorder }) => ($noBorder ? 'none' : `1px solid ${Colors.Grayscale10}`)};
`;

export const OthersThinkingContent = styled.div`
  color: ${Colors.Grayscale70};
  ${FontStyles.SM_Medium};
`;
