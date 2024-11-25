import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

const buttonType = {
  modal: {
    backgroundColor: Colors.Main40,
    color: Colors.Main0,
    hoverBackgroundColor: Colors.Main50,
    padding: '0.75rem',
  },
  profile: {
    backgroundColor: Colors.Grayscale10,
    color: Colors.Grayscale70,
    hoverBackgroundColor: Colors.Grayscale20,
    padding: '0.75rem',
  },
  basic: {
    backgroundColor: Colors.Main40,
    color: Colors.Main0,
    hoverBackgroundColor: Colors.Main50,
    padding: '0.375rem 0.75rem',
  },
};

const commonStyles = `
  ${FontStyles.SM_Medium}
  width: 100%;
  text-align: center;
  border-radius: 0.5rem;
  border: none;
  line-height: 150%;
  cursor: pointer;
`;

export const Button = styled.button<{ $buttonStyle?: keyof typeof buttonType }>`
  ${commonStyles}
  background-color: ${({ $buttonStyle }) => buttonType[$buttonStyle || 'basic'].backgroundColor};
  color: ${({ $buttonStyle }) => buttonType[$buttonStyle || 'basic'].color};
  padding: ${({ $buttonStyle }) => buttonType[$buttonStyle || 'basic'].padding};

  &:hover {
    background-color: ${({ $buttonStyle }) =>
      buttonType[$buttonStyle || 'basic'].hoverBackgroundColor};
  }
`;
