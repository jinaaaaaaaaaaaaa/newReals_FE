import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const InputPart = styled.div`
  display: flex;
  width: 17.5rem;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.75rem;
  border: 1px solid ${Colors.Grayscale10};
  background-color: ${Colors.Main0};
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  ${FontStyles.SM_Regular}
  flex: 1;
  align-items: center;
  margin-right: 0.5rem;
  outline: none;
  border: none;
  &::placeholder {
    color: ${Colors.Grayscale30};
    ${FontStyles.SM_Medium}
  }
`;

export const SearchImg = styled.img`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
`;
