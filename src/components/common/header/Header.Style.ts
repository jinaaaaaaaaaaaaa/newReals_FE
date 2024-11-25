import styled from 'styled-components';
import MarketIcon from '../../../assets/icons/MarketIcon.svg?react';
import { Colors, FontStyles } from '../../../styles';

export const Head = styled.header`
  padding: 0.75rem 6.25rem 0.75rem 6.25rem;
  display: flex;
  align-items: center;
  height: 4.625rem;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.Grayscale10};
`;

export const ServiceImg = styled.img`
  width: 7.8125rem;
  height: 2rem;
  cursor: pointer;
`;

export const Category = styled.div`
  display: flex;
  gap: 4.125rem;
  padding-left: 5.25rem;
  flex: 1;
`;

export const CategoryItem = styled.div<{ $currentPage: boolean }>`
  ${FontStyles.MD2_SemiBold};
  color: ${({ $currentPage }) => ($currentPage ? Colors.Main50 : Colors.Grayscale90)};
  cursor: pointer;
`;

export const LoginPart = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LoginImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Login = styled.div`
  ${FontStyles.MD2_SemiBold}
  color: ${Colors.Grayscale90};
  margin-left: 0.75rem;
  text-align: center;
`;

export const SidePart = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

export const Etc = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Info = styled.div<{ $color: boolean }>`
  ${FontStyles.MD2_SemiBold}
  color: ${({ $color }) => ($color ? Colors.Main50 : Colors.Grayscale90)};
  cursor: pointer;
`;

export const StyledMarketIcon = styled(MarketIcon)<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? Colors.Main50 : Colors.Grayscale90)};
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
