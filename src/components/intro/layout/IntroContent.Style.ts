import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const MentPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const FirstMent = styled.p`
  color: ${Colors.Main50};
  ${FontStyles.MD2_SemiBold}
  @media (max-width: 767px) {
    ${FontStyles.XS_Medium};
  }
`;
export const SecondMent = styled.p`
  color: ${Colors.Grayscale90};
  ${FontStyles.XL_Bold};
  @media (max-width: 767px) {
    ${FontStyles.MD1_Bold};
  }
`;

export const ThirdMent = styled.p`
  margin-top: 0.5rem;
  color: ${Colors.Grayscale70};
  ${FontStyles.MD2_Regular};
  @media (max-width: 767px) {
    ${FontStyles.XS_Regular};
  }
`;
