import { format, getDate, getDay, getMonth, isBefore, isSameDay } from 'date-fns';
import * as S from './Calendar.Style';
import { useEffect, useState } from 'react';
import { getAttendance } from '../../../api/Profile';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = () => {
  const today = new Date();
  const currentMonth = getMonth(today);
  const firstDayOfMonth = new Date(today.getFullYear(), currentMonth, 1);
  const startDayOfWeek = getDay(firstDayOfMonth);
  const [attendanceList, setAttendanceList] = useState([]);

  // 이번 달의 날짜 배열 생성
  const generateDaysInMonth = () => {
    const daysInMonth = new Date(today.getFullYear(), currentMonth + 1, 0).getDate();
    return Array.from(
      { length: daysInMonth },
      (_, index) => new Date(today.getFullYear(), currentMonth, index + 1),
    );
  };

  // 출석 여부와 오늘 날짜에 따른 스타일 클래스 설정
  const getClassName = (date: Date) => {
    const day = getDate(date);
    let className = '';

    if (isSameDay(date, today)) {
      className += 'today ';
    }

    if (isBefore(today, date)) {
      className += 'afterDay';
    } else {
      const isAttended = attendanceList[day - 1];
      className += isAttended ? 'attended' : 'notAttended';
    }

    return className.trim();
  };

  const daysInMonth = generateDaysInMonth();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getAttendance();
      if (data) {
        setAttendanceList(data);
      }
    };
    fetchUser();
  }, []);

  return (
    <S.Container>
      <div>
        <S.Title>{currentMonth + 1}월 출석 달력</S.Title>
        <S.Description>이번 달 출석 현황을 달력으로 확인해요.</S.Description>
      </div>
      <div>
        <S.WeekHeader>
          {daysOfWeek.map((day) => (
            <S.WeekDay key={day}>{day}</S.WeekDay>
          ))}
        </S.WeekHeader>
        <S.CalendarGrid>
          {/* 빈 셀 추가 */}
          {Array.from({ length: startDayOfWeek }).map((_, index) => (
            <S.EmptyDay key={`empty-${index}`} />
          ))}
          {/* 날짜 셀 추가 */}
          {daysInMonth.map((date) => (
            <S.Day key={format(date, 'yyyy-MM-dd')} className={getClassName(date)}>
              {getDate(date)}
            </S.Day>
          ))}
        </S.CalendarGrid>
      </div>
    </S.Container>
  );
};

export default Calendar;
