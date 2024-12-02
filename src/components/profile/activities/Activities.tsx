import AnalysisCard from './analysisCard/AnalysisCard';
import Insight from './insight/Insight';
import Quiz from './quiz/Quiz';
import Scrap from './scrap/Scrap';
import * as S from './Activites.Style';

interface ActivitesProps {
  name: string;
}

const Activities = ({ name }: ActivitesProps) => {
  return (
    <S.MyActivities>
      <S.RightHead>
        <AnalysisCard nickname={name} />
        <Quiz />
      </S.RightHead>
      <Insight />
      <Scrap nickname={name} />
    </S.MyActivities>
  );
};

export default Activities;
