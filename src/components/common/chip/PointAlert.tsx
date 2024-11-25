import CoinIcon from '../../../assets/icons/CoinIcon.svg';
import * as S from './PointAlert.Style';

interface AlertProps {
  type?: 'header' | 'quiz';
  leftcontent?: string;
  rightcontent?: string;
}

/**
 *
 * @param type - 'header' 또는 'quiz' 에 따라 스타일 변함
 * @param leftcontent - 이미지 기준 왼쪽에 들어갈 내용
 * @param rightcontent - 이미지 기준 오른쪽에 들어갈 내용
 * @returns
 */

const PointAlert = ({ type, leftcontent, rightcontent }: AlertProps) => {
  return (
    <S.AddPoint $type={type}>
      {leftcontent}
      <S.CoinImg src={CoinIcon} alt="코인" />
      <S.Text $type={type}>{rightcontent}</S.Text>
    </S.AddPoint>
  );
};

export default PointAlert;
