import { postScrap } from '../api/Scrap';
import { ListProps } from '../types/newsType';

export const handleScrap = async (
  id: number,
  setState: React.Dispatch<React.SetStateAction<ListProps[]>>,
) => {
  // 1. Optimistic UI 업데이트
  setState((prevNews) =>
    prevNews.map((news) =>
      news.basenewsId === id ? { ...news, isScrapped: !news.isScrapped } : news,
    ),
  );

  // 2. API 호출
  try {
    const success = await postScrap(id);
    if (!success) {
      throw new Error('Failed to update scrap status');
    }
  } catch (error) {
    console.error('스크랩 요청 실패:', error);

    // 3. 요청 실패 시 롤백
    setState((prevNews) =>
      prevNews.map((news) =>
        news.basenewsId === id ? { ...news, isScrapped: !news.isScrapped } : news,
      ),
    );
  }
};
