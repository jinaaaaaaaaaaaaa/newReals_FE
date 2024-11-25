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
`;

export const Logo = styled.span`
  ${FontStyles.LG_Bold}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  ${FontStyles.MD2_Bold}
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 2.5rem;
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
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const Divider = styled.div`
  width: 0.0625rem;
  height: 1rem;
  background-color: ${Colors.Grayscale90};
`;

export const Copyright = styled.p`
  color: ${Colors.Grayscale70};
`;
