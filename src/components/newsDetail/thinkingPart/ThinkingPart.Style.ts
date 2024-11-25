import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Whole = styled.div`
  display: flex;
  padding: 2rem 0rem;
  flex-direction: column;
  align-self: stretch;
  border-top: 1px solid ${Colors.Grayscale10};
`;

export const Topic = styled.p`
  color: ${Colors.Grayscale90};
  ${FontStyles.MD1_SemiBold};
  margin-bottom: 1rem;
`;

export const TypingPart = styled.div<{ $isError: boolean }>`
  display: flex;
  flex-direction: column;
  height: 7.75rem;
  padding: 1.25rem;
  padding-bottom: 0.5rem;
  align-self: stretch;
  border-radius: 0.75rem;
  border: 1px solid ${({ $isError }) => ($isError ? Colors.Red : Colors.Grayscale10)};
`;

export const InputPart = styled.textarea`
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  height: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none; /* IE에서 스크롤바 숨김 */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge에서 스크롤바 숨기기 */
  }
  &::placeholder {
    color: ${Colors.Grayscale50};
    ${FontStyles.SM_Medium};
  }
`;

export const Info = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const CurrentType = styled.p<{ $isError: boolean }>`
  width: 100%;
  color: ${({ $isError }) => ($isError ? Colors.Red : Colors.Grayscale50)};
  ${FontStyles.XS_Medium};
  text-align: right;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.85rem;
  white-space: nowrap;
  ${FontStyles.XS_Medium};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: stretch;
  margin-top: 0.75rem;
`;

export const TypingButton = styled.button`
  color: ${Colors.Main0};
  ${FontStyles.XS_Medium};
  text-align: center;
  display: flex;
  width: 6rem;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${Colors.Main40};
  cursor: pointer;
`;
