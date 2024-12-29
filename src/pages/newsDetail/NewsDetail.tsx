import { useEffect, useState } from 'react';
import EmojiPart from '../../components/newsDetail/emojipart/EmojiPart';
import ArticleHeader from '../../components/newsDetail/articleHeader/ArticleHeader';
import * as S from './NewsDetail.Style';
import AIPart from '../../components/newsDetail/aiPart/AIPart';
import PageButton from '../../components/common/button/PageButton';
import Quiz from '../../components/newsDetail/quiz/Quiz';
import ThinkingPart from '../../components/newsDetail/thinkingPart/ThinkingPart';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  getDetailInsight,
  getDetailLikes,
  getDetailNews,
  getDetailQuiz,
} from '../../api/NewsDetail';
import Loading from '../../components/common/Loading/Loding';

interface NewsDataProps {
  id: number;
  category: string;
  subCategory: string;
  keyword: string;
  title: string;
  summary: string;
  description: string;
  imageUrl: string;
  newsUrl: string;
  uploadDate: string;
  scrapped: boolean;
  good: number;
  bad: number;
  interesting: number;
  totalLikes: number;
  viewCount: number;
  termMap: Record<string, string>;
  wherePageFrom: string;
  reactionType: number;
}

interface SideNewsProps {
  basenewsID: number;
  title: string;
}

interface QuizDataProps {
  problem: string;
  answer: boolean;
  comment: string;
  solved: boolean;
}

interface InsightDataProps {
  topic: string;
  userComment: string;
  aiComment: string;
  pros: string;
  cons: string;
  neutral: string;
}

interface LikesDataProps {
  reactionType: number;
  good: number;
  bad: number;
  interesting: number;
}

const NewsDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { state: locationProp } = location;
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState<NewsDataProps | null>(null);
  const [prevNews, setPrevNews] = useState<SideNewsProps | null>(null);
  const [nextNews, setNextNews] = useState<SideNewsProps | null>(null);
  const [quizData, setQuizData] = useState<QuizDataProps | null>(null);
  const [insightData, setInsightData] = useState<InsightDataProps | null>(null);
  const [likesData, setLikesData] = useState<LikesDataProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      setInsightData(null);
      setQuizData(null);
      setLikesData(null);
      try {
        const [news, quiz, insight, likes] = await Promise.all([
          // 함수들을 병렬적으로 동시에 실행
          getDetailNews(Number(id), locationProp),
          getDetailQuiz(Number(id)),
          getDetailInsight(Number(id)),
          getDetailLikes(Number(id)),
        ]);

        if (news) {
          setNewsData(news);
          setPrevNews(news.prevNews);
          setNextNews(news.nextNews);
        }
        if (quiz) setQuizData(quiz);
        if (insight) setInsightData(insight);
        if (likes) setLikesData(likes);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false); // 로딩 상태 종료
      }
    };

    fetchData();
  }, [id]);

  const handleInsightUpdate = async () => {
    const updatedInsight = await getDetailInsight(Number(id));
    if (updatedInsight) setInsightData(updatedInsight);
  };

  const handleQuizUpdate = async () => {
    const updatedQuiz = await getDetailQuiz(Number(id));
    if (updatedQuiz) setQuizData(updatedQuiz);
  };

  const getStateData = (): { category?: string; keyword?: string; subCategory?: string } | null => {
    if (!newsData || !newsData.wherePageFrom) {
      console.error('newsData 또는 wherePageFrom이 유효하지 않습니다.');
      return null;
    }
    type WherePageFrom = 'category' | 'keyword' | 'subCategory';
    const mapping: Record<
      WherePageFrom,
      { category?: string; keyword?: string; subCategory?: string }
    > = {
      category: { category: newsData.category },
      keyword: { keyword: newsData.keyword },
      subCategory: { subCategory: newsData.subCategory },
    };

    const stateData = mapping[newsData.wherePageFrom as WherePageFrom];

    if (!stateData) {
      console.warn(`wherePageFrom 값 "${newsData.wherePageFrom}"에 대한 매핑이 없습니다.`);
      return null;
    }
    return stateData;
  };

  const handleSideNewsClick = (id: number) => {
    const stateData = getStateData();
    navigate(`/newsDetail/${id}`, { state: stateData });
  };

  return (
    <div>
      {isLoading && <Loading message="페이지 로딩중입니다" />}
      <S.NewsDetail>
        {newsData && (
          <>
            <ArticleHeader
              id={newsData.id}
              category={newsData.category}
              subCategory={newsData.subCategory}
              keyword={newsData.keyword}
              title={newsData.title}
              date={newsData.uploadDate}
              count={newsData.totalLikes}
              isScrapped={newsData.scrapped}
            />
            <S.Content>
              <S.NewsPart>
                {newsData.imageUrl && <S.NewsImg src={newsData.imageUrl} />}
                <AIPart
                  summary={newsData.summary}
                  description={newsData.description}
                  termMap={newsData.termMap}
                  newsUrl={newsData.newsUrl}
                />
                {insightData ? (
                  <ThinkingPart
                    topic={insightData.topic}
                    userComment={insightData.userComment}
                    aiComment={insightData.aiComment}
                    pros={insightData.pros}
                    cons={insightData.cons}
                    neutral={insightData.neutral}
                    onCommentUpdated={handleInsightUpdate}
                  />
                ) : likesData ? (
                  <EmojiPart
                    id={newsData.id}
                    action={likesData.reactionType}
                    good={likesData.good}
                    bad={likesData.bad}
                    interesting={likesData.interesting}
                  />
                ) : null}
                {nextNews && (
                  <>
                    <S.PageNavigate>
                      <div>
                        <PageButton
                          children={nextNews.title}
                          buttonStyle="left"
                          onClick={() => {
                            handleSideNewsClick(nextNews.basenewsID);
                          }}
                        />
                      </div>
                      <div>
                        {prevNews && (
                          <PageButton
                            children={prevNews.title}
                            buttonStyle="right"
                            onClick={() => {
                              handleSideNewsClick(prevNews.basenewsID);
                            }}
                          />
                        )}
                      </div>
                    </S.PageNavigate>
                  </>
                )}
              </S.NewsPart>
              {quizData && (
                <S.QuizPart>
                  <Quiz
                    quiz={quizData.problem}
                    isSolved={quizData.solved}
                    answer={quizData.answer}
                    comment={quizData.comment}
                    onCommentUpdated={handleQuizUpdate}
                  />
                </S.QuizPart>
              )}
            </S.Content>
          </>
        )}
      </S.NewsDetail>
    </div>
  );
};

export default NewsDetail;
