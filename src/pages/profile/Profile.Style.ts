import styled from 'styled-components';
import { Colors, FontStyles } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding-top: 3.75rem;
  padding-bottom: 5rem;
`;

export const Title = styled.span`
  ${FontStyles.XL_Bold}
  width: 80%;
  color: ${Colors.Grayscale90};
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  gap: 1.25rem;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const RightContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
