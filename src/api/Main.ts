import api from './instance';

const accessToken = localStorage.getItem('access_token');

/**
 * 데일리 뉴스 조회
 * @returns
 */
export const getDailyNews = async () => {
  try {
    const response = await api.get('/main/daily', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.data.success) {
      return response.data.data.dailynewsList;
    }
  } catch (error) {
    console.error(error);
  }
};

/**
 * 오늘의 인사이트 조회
 * @returns
 */
export const getInsight = async () => {
  try {
    const response = await api.get('/main/insight', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.data.success) {
      return response.data.data.insightList;
    }
  } catch (error) {
    console.error(error);
  }
};

/**
 * 관심 키워드별 뉴스 조회
 * @param keywordIndex - 선택한 키워드
 * @param page - 페이지네이션
 * @returns
 */
export const getKeywordNews = async (keywordIndex: number | null, page: number) => {
  try {
    const response = await api.get('/main/keyword', {
      params: { ...(keywordIndex !== null && { keywordIndex }), page },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.data.success) {
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
};
