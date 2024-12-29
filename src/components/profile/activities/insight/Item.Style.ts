import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.25rem;
  background-color: ${Colors.Main0};
  border-radius: 0.75rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: ${Colors.Grayscale90};
`;

export const Title = styled.span`
  ${FontStyles.MD1_SemiBold}
  color: ${Colors.Grayscale90};
  max-width: 37.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 767px) {
    max-width: 12.5rem;
  }
`;

export const GoToDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

export const DetailText = styled.p`
  ${FontStyles.MD2_Medium}
  color: ${Colors.Grayscale50};

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Comment = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Text = styled.p`
  ${FontStyles.MD2_Medium}
  color: ${Colors.Grayscale70};
  max-width: 43rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 767px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    white-space: wrap;
  }
`;
