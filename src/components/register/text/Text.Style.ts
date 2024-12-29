import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  @media (max-width: 767px) {
    gap: 0.75rem;
  }
`;

export const Title = styled.div`
  ${FontStyles.XL_Bold}
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${Colors.Grayscale90};

  @media (max-width: 767px) {
    ${FontStyles.LG_Bold}
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

export const HelperText = styled.p`
  ${FontStyles.MD2_SemiBold};
  color: ${Colors.Main50};
`;

export const Description = styled.p`
  ${FontStyles.MD2_Medium};
  color: ${Colors.Grayscale50};

  @media (max-width: 767px) {
    ${FontStyles.SM_Medium}
  }
`;
