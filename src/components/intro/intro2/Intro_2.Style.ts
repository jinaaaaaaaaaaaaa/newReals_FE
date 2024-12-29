import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const SecondIntro = styled.div`
  color: ${Colors.Grayscale90};
  ${FontStyles.XXL_SemiBold};
  display: flex;
  padding: 6.25rem 13.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
  @media (max-width: 767px) {
    ${FontStyles.MD2_SemiBold};
    justify-content: center;
    align-items: center;
    height: 16.25rem;
    width: 100%;
    padding: 3rem 1.875rem;
  }
`;

export const LogoIcon = styled.img``;

export const Logo = styled.span`
  display: flex;
  color: ${Colors.Grayscale90};
  font-family: 'Couture';
  font-size: 1.15rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 0.25rem;
`;

export const Ment = styled.p`
  display: flex;
  white-space: nowrap;
  align-items: center;
`;

export const Tag = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 0.75rem;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
`;
