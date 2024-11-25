import AISummary from './aiSummary/AISummary';
import EasySummary from './easySummary/EasySummary';
import * as S from './AIPart.Style';

const AIPart = () => {
  return (
    <S.AIPart>
      <AISummary content="고교 무상교육 해야하나" />
      <EasySummary
        content="윤석열 대통령은 필리핀을 국빈 방문해 무역, 투자, 공급망, 에너지 등 다양한 분야에서 협력을
        강화하겠다고 했어요. 그는 필리핀과의 관계 발전이 동포 사회에 이익이 될 것이라고 했고, 필리핀
        대통령과 정상회담을 열어 양국 간 협력을 논의할 예정이에요. 또한, 비즈니스 포럼을 개최하고,
        싱가포르와 라오스를 순방해 아세안 정상회의에 참석할 계획이에요. 윤석열 대통령은 필리핀을 국빈 방문해 무역, 투자, 공급망, 에너지 등 다양한 분야에서 협력을
        강화하겠다고 했어요. 그는 필리핀과의 관계 발전이 동포 사회에 이익이 될 것이라고 했고, 필리핀
        대통령과 정상회담을 열어 양국 간 협력을 논의할 예정이에요. 또한, 비즈니스 포럼을 개최하고,
        싱가포르와 라오스를 순방해 아세안 정상회의에 참석할 계획이에요."
        dictionary={{
          필리핀: '저도몰라요',
          국빈: '국제적으로 머..암튼 그런거에요랄라라라라라라국빈국빈국빈해요',
          포럼: '안녕하세요저는김진아포럼은영어포도포도포도포럼포럼해요 이 문맥에서는 이게 이런 뜻이고 이런 말이에요',
        }}
        url="https://www.breaknews.com/1060642"
      />
    </S.AIPart>
  );
};

export default AIPart;
