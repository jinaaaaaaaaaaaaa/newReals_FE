import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';
import CalendarCoin from '/src/assets/icons/CalendarCoinIcon.svg';
import CalendarNoCoin from '/src/assets/icons/CalendarNoCoinIcon.svg';

export const Container = styled.div`
  width: 21.6875rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid ${Colors.Grayscale10};
`;

export const Title = styled.span`
  ${FontStyles.MD1_Bold}
  color: ${Colors.Grayscale80};
`;

export const Description = styled.p`
  ${FontStyles.XS_Medium}
  color: ${Colors.Grayscale40};
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;

export const WeekHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const WeekDay = styled.div`
  ${FontStyles.XS_Medium}
  color : ${Colors.Main50};
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyDay = styled.div`
  width: 2rem;
  height: 2rem;
`;

export const Day = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6.25rem;
  color: ${Colors.Grayscale60};
  ${FontStyles.XS_Medium}

  &.attended {
    background-image: url(${CalendarCoin});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  &.notAttended {
    background-image: url(${CalendarNoCoin});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  &.afterDay {
    background-color: ${Colors.Grayscale5};
  }
  &.today {
    color: ${Colors.Main50};
  }
`;
