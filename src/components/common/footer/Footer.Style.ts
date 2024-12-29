import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Footer = styled.footer`
  ${FontStyles.SM_Medium}
  width: 100%;
  height: 16.4375rem;
  padding: 2.5rem 8.5rem;
  background-color: ${Colors.Grayscale5};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: ${Colors.Grayscale90};

  @media (max-width: 767px) {
    height: 21.5625rem;
    padding: 2rem 1rem;
  }
`;

export const Logo = styled.span`
  ${FontStyles.LG_Bold}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const Title = styled.span`
  ${FontStyles.MD2_Bold}

  @media (max-width: 767px) {
    ${FontStyles.SM_SemiBold}
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    width: 9.375rem;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 767px) {
    ${FontStyles.SM_Medium};
    white-space: nowrap;
  }
`;

export const Copyright = styled.p`
  color: ${Colors.Grayscale70};

  @media (max-width: 767px) {
    ${FontStyles.SM_SemiBold}
  }
`;
