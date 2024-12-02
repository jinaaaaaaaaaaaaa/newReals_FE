export type CategoryKey = '정치' | '경제' | '사회';

export type CategoryData = {
  percentage: number;
  quiz: number;
  insight: number;
  scrap: number;
};

export interface TrendDataProps {
  hasNoLastData: boolean;
  biggest: string;
  GPTComment: string;
  사회: number | null;
  정치: number | null;
  경제: number | null;
}

export interface CompareData {
  quiz: number;
  insight: number;
  attendance: number;
}

export interface CompareProps {
  lastMonth: CompareData[];
  thisMonth: CompareData[];
}
