import AISummary from './aiSummary/AISummary';
import EasySummary from './easySummary/EasySummary';
import * as S from './AIPart.Style';

interface AIPartProps {
  summary: string;
  description: string;
  termMap?: Record<string, string>;
  newsUrl: string;
}

const AIPart = ({ summary, description, termMap, newsUrl }: AIPartProps) => {
  return (
    <S.AIPart>
      <AISummary content={summary} />
      <EasySummary content={description} dictionary={termMap} url={newsUrl} />
    </S.AIPart>
  );
};

export default AIPart;
