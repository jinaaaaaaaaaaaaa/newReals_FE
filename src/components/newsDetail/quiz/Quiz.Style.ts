import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 21.6875rem;
  padding: 1.25rem;
  background-color: ${Colors.Grayscale5};
  border-radius: 0.75rem;
  color: ${Colors.Black};
  gap: 0.75rem;
  @media (max-width: 767px) {
    max-width: none;
  }
`;

export const Quiz = styled.span`
  ${FontStyles.MD2_Bold};
  display: flex;
  align-items: center;
  align-self: stretch;
`;

export const Q = styled.span`
  color: ${Colors.Main50};
`;

export const Timer = styled.span`
  color: ${Colors.Grayscale30};
  text-align: center;
  ${FontStyles.XS_Regular};
  margin-left: auto;
`;

export const Time = styled.span`
  color: ${Colors.Main50};
  ${FontStyles.XS_Medium};
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${Colors.Main0};
  border-radius: 0.5rem;
  gap: 0.75rem;
`;

export const Text = styled.p`
  ${FontStyles.SM_SemiBold};
  opacity: 0.68;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button<{ $buttonStyle: 'left' | 'right' }>`
  background-color: ${({ $buttonStyle }) =>
    $buttonStyle === 'left' ? Colors.Main40 : Colors.Main5};
  color: ${({ $buttonStyle }) => ($buttonStyle === 'left' ? Colors.Main0 : Colors.Main40)};
  padding: 0.5rem 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ $buttonStyle }) =>
      $buttonStyle === 'left' ? Colors.Main50 : Colors.Main10};
  }
`;
