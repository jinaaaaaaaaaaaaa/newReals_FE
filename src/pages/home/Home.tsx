import * as S from './Home.Style';

import HeadNews from '../../components/common/headNews/HeadNews';
import { useEffect, useState } from 'react';
import LatestNews from '../../components/home/latestNews/LatestNews';
import Insight from '../../components/home/insight/Insight';
import { getDailyNews } from '../../api/Main';
import { DailyNewsProps } from '../../types/newsType';

const Home = () => {
  const [dailyNews, setDailyNews] = useState<DailyNewsProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNextNews = () => {
    if (dailyNews.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dailyNews.length);
    }
  };

  const handlePreviousNews = () => {
    if (dailyNews.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + dailyNews.length) % dailyNews.length);
    }
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  useEffect(() => {
    if (isPaused || dailyNews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dailyNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, dailyNews]);

  useEffect(() => {
    const fetchDailyNews = async () => {
      const data = await getDailyNews();
      if (data) {
        setDailyNews(data);
      }
    };
    fetchDailyNews();
  }, []);

  return (
    <>
      {dailyNews.length > 0 ? (
        <HeadNews
          id={dailyNews[currentIndex].dailynewsId}
          category={dailyNews[currentIndex].category}
          subcategory={dailyNews[currentIndex].subCategory}
          keyword={dailyNews[currentIndex].keyword}
          title={dailyNews[currentIndex].title}
          quiz={dailyNews[currentIndex].quizQuestion}
          imagePath={dailyNews[currentIndex].imagePath}
          index={currentIndex}
          onPrevious={handlePreviousNews}
          onNext={handleNextNews}
          onPaused={togglePause}
          isPaused={isPaused}
        />
      ) : (
        <div>Loading...</div>
      )}
      <S.Container>
        <Insight />
        <LatestNews />
      </S.Container>
    </>
  );
};

export default Home;
