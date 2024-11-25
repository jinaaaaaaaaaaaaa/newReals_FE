import AnalysisCard from './analysisCard/AnalysisCard';
import Insight from './insight/Insight';
import Quiz from './quiz/Quiz';
import Scrap from './scrap/Scrap';
import * as S from './Activites.Style';

const Activities = () => {
  return (
    <S.MyActivities>
      <S.RightHead>
        <AnalysisCard nickname="김뉴스" />
        <Quiz />
      </S.RightHead>
      <Insight />
      <Scrap />
    </S.MyActivities>
  );
};

export default Activities;
