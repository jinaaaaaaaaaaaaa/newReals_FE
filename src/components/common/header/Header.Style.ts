import styled from 'styled-components';
import MarketIcon from '../../../assets/icons/MarketIcon.svg?react';
import { Colors, FontStyles } from '../../../styles';

export const MobileHeaderContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff; /* 배경색 */
  z-index: 10; /* 모바일 메뉴보다 위로 배치 */
`;

export const SearchBarContainer = styled.div`
  padding: 0rem 1rem 1rem 1rem;
`;

export const Head = styled.header`
  padding: 0.75rem 6.25rem 0.75rem 6.25rem;
  display: flex;
  align-items: center;
  height: 4.625rem;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.Grayscale10};
  @media (max-width: 767px) {
    padding: 0.75rem 1rem 0.75rem 1rem;
    height: 4rem;
    position: relative;
    border-bottom: none;
  }
`;

export const Service = styled.span`
  display: flex;
  align-items: center;
`;

export const ServiceName = styled.span`
  color: ${Colors.Grayscale90};
  font-family: 'Couture';
  font-size: 1.15rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ServiceImg = styled.img`
  width: 2.5625rem;
  height: 1.75rem;
`;

export const MobileEtc = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${Colors.Main0};
  box-shadow: 0 0.25rem 0.375rem ${Colors.Black};
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  border-top: 1px solid ${Colors.Grayscale10};
`;

export const MobileMenuItem = styled.div`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${Colors.Grayscale90};
  ${FontStyles.MD2_Medium};
  line-height: 140%;
  &:hover {
    background-color: ${Colors.Grayscale5};
  }
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
  @media (max-width: 767px) {
    ${FontStyles.SM_SemiBold};
  }
`;

export const SidePart = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    gap: 1rem;
  }
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
