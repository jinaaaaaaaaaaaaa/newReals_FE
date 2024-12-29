import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Modal = styled.div`
  width: 26.25rem;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1rem;
  border-radius: 1rem;
  background-color: ${Colors.Main0};

  @media (max-width: 767px) {
    width: 20.25rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: ${Colors.Grayscale90};
`;

export const Header = styled.div`
  ${FontStyles.MD1_Bold}
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  ${FontStyles.MD2_SemiBold}
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${Colors.Grayscale10};
  outline: none;

  &::placeholder {
    color: ${Colors.Grayscale40};
  }
`;

export const HelperText = styled.p<{ $isError: boolean }>`
  ${FontStyles.XS_Regular}
  color: ${({ $isError }) => ($isError ? Colors.Red : Colors.Grayscale40)};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Colors.Grayscale10};
`;

export const Profile = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const Text = styled.p`
  ${FontStyles.XS_Regular}
  color: ${Colors.Grayscale70};
`;

export const EditImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: ${Colors.Grayscale5};
`;

export const ImageButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ImageButton = styled.button`
  ${FontStyles.XS_Medium}
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 1.875rem;
  border-radius: 0.5rem;
  border: none;
  color: ${Colors.Grayscale50};
  background-color: ${Colors.Main0};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;
