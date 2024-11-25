import * as S from './CoinExplain.Style';
import DotIcon from '../../../../assets/icons/DotIcon.svg';

const Text = [
  '매일 출석 시 코인이 지급돼요.',
  '오늘의 퀴즈를 맞추면 코인이 지급돼요.',
  '퀴즈 5개를 모두 맞추면 코인이 지급돼요',
  '적립된 코인은 마켓에서 사용할 수 있어요.',
];

const CoinExplain = () => {
  return (
    <S.Explain>
      {Text.map((item, index) => (
        <S.Text key={index}>
          <img src={DotIcon} alt="점" />
          {item}
        </S.Text>
      ))}
    </S.Explain>
  );
};

export default CoinExplain;
