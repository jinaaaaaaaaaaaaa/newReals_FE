import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';
import RightArrowIcon from '../../../assets/icons/RightArrowIcon.svg?react';

export const container = styled.section`
  width: 21.6875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: 1rem;
  background-color: ${Colors.Grayscale5};

  @media (max-width: 767px) {
    width: 22.375rem;
  }
`;

export const Profile = styled.div`
  ${FontStyles.MD2_Bold}
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${Colors.Grayscale90};
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background-color: ${Colors.Main0};
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const ArrowIcon = styled(RightArrowIcon)`
  width: 1rem;
  height: 1rem;
`;

export const KeywordContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.75rem;
  background-color: ${Colors.Main0};
  border-radius: 0.75rem;
`;

export const KeywordHeader = styled.div`
  ${FontStyles.SM_SemiBold}
  display: flex;
  justify-content: space-between;
  color: ${Colors.Grayscale80};
`;

export const Edit = styled.div`
  display: flex;
  align-items: center;
  ${FontStyles.XS_Medium}
  color: ${Colors.Grayscale30};
  cursor: pointer;
`;

export const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Coin = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: ${Colors.Main0};
  border-radius: 0.75rem;
`;

export const CoinText = styled.div`
  ${FontStyles.SM_Medium}
  display: flex;
  gap: 0.5rem;
  color: ${Colors.Grayscale90};
`;

export const CoinNumber = styled.span`
  ${FontStyles.SM_SemiBold}
  color: ${Colors.Main50};
`;

export const InfoContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;

export const Info = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;
