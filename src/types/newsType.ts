export interface ListProps {
  basenewsId: number;
  imageUrl?: string;
  isScrapped: boolean;
  category: string;
  keyword: string;
  title: string;
  summary: string;
  date: string;
  subCategory: string;
}

export interface DailyNewsProps {
  category: string;
  dailynewsId: number;
  imagePath: string | null;
  keyword: string;
  quizQuestion: string;
  subCategory: string;
  title: string;
}
