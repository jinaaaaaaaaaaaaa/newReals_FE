import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';
import ErrorIcon from '../../../assets/icons/ErrorIcon.svg?react';

export const Modal = styled.div`
  width: 26.25rem;
  height: 34.75rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${Colors.Main0};
`;

export const Header = styled.div`
  ${FontStyles.MD1_Bold}
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  color: ${Colors.Grayscale90};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  border-top: 1px solid ${Colors.Grayscale10};
  padding: 1rem 1.25rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 23rem;
  padding: 1.25rem;
  gap: 1.25rem;
`;

export const HelperTextContainer = styled.div`
  display: flex;
  gap: 0.375rem;
`;

export const HelperText = styled.p<{ $isError: boolean }>`
  ${FontStyles.SM_Medium}
  color : ${({ $isError }) => ($isError ? Colors.Red : Colors.Grayscale50)};
`;

export const Icon = styled(ErrorIcon)<{ $isError: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ $isError }) => ($isError ? Colors.Red : Colors.Grayscale50)};
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
