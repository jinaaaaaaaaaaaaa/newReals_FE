import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const AIPart = styled.div`
  width: 100%;
  padding: 1rem 1.25rem;
  align-items: center;
  border-radius: 0.75rem;
  background: ${Colors.Grayscale5};
`;

export const FixedPart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PartName = styled.div`
  ${FontStyles.MD2_Bold}
  color: ${Colors.Grayscale90};
`;

export const ToggleImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const Content = styled.div`
  ${FontStyles.SM_Medium}
  margin-top: 0.75rem;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  background-color: ${Colors.Main0};
  color: ${Colors.Grayscale70};
`;
