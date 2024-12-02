import { useLocation, useNavigate } from 'react-router-dom';
import AppRouter from './Router';
import Footer from './components/common/footer/Footer';
import { useEffect } from 'react';
import * as S from './App.Style';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken && location.pathname === '/') {
      navigate('/home');
    } else if (!accessToken) {
      navigate('/');
    }
  }, []);

  return (
    <S.AppContainer>
      <S.MainContent>
        <AppRouter />
      </S.MainContent>
      <Footer />
    </S.AppContainer>
  );
};

export default App;
