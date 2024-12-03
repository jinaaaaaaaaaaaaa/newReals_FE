import * as S from './Home.Style';
import HeadNews from '../../components/common/headNews/HeadNews';
import { useEffect, useState } from 'react';
import LatestNews from '../../components/home/latestNews/LatestNews';
import Insight from '../../components/home/insight/Insight';
import { getAttendance, getDailyNews, patchAttendance } from '../../api/Main';
import { DailyNewsProps } from '../../types/newsType';
import CoinModal from '../../components/common/coinModal/CoinModal';

const Home = () => {
  const [dailyNews, setDailyNews] = useState<DailyNewsProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleClickModal = async () => {
    const message = await patchAttendance();
    if (message) {
      setOpenModal(false); // 이 부분 나중에 토스트로 구현해도 좋을 듯 !
    }
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

  useEffect(() => {
    const fetchAttendance = async () => {
      const response = await getAttendance();
      if (!response.attendance) {
        setOpenModal(true);
      }
    };
    fetchAttendance();
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
      {openModal && (
        <CoinModal
          onClose={toggleModal}
          text="출석을 하고 코인을 획득했어요!"
          coin={5}
          onClick={handleClickModal}
        />
      )}
    </>
  );
};

export default Home;
