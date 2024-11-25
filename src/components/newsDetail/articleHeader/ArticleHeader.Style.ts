import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const ArticleHead = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const CategoryPart = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  gap: 0.75rem;
  color: ${Colors.Main50};
  ${FontStyles.SM_SemiBold};
  margin-bottom: 0.75rem;
`;

export const TitlePart = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1.25rem;
`;

export const Title = styled.p`
  color: ${Colors.Grayscale90};
  ${FontStyles.XL_Bold};
`;

export const Date = styled.p`
  color: ${Colors.Black};
  ${FontStyles.SM_Medium};
`;

export const MyPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
