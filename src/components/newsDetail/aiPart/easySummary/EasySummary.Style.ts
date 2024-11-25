import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';
import RightArrowIcon from '../../../../assets/icons/RightArrowIcon.svg?react';

export const EasySumPart = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 12px;
  border: 0.0625rem solid ${Colors.Grayscale10};
`;

export const ContentPart = styled.div`
  color: ${Colors.Grayscale90};
  ${FontStyles.SM_Medium}
`;

export const Highlight = styled.span`
  position: relative;
  cursor: pointer;
  color: ${Colors.Main50};
`;

export const Tooltip = styled.div<{ $tooltipPosition: { top: number; left: number } }>`
  position: absolute; // 절대 위치로 배치
  top: ${({ $tooltipPosition }) => $tooltipPosition.top}px;
  left: ${({ $tooltipPosition }) => $tooltipPosition.left}px;
  transform: translateX(-50%);
  z-index: 10;
  margin-top: 0rem; // 용어와의 간격
`;

export const Navi = styled.p`
  color: ${Colors.Main50};
  ${FontStyles.SM_SemiBold};
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const Arrow = styled(RightArrowIcon)`
  width: 20px;
  height: 20px;
`;
