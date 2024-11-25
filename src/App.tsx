import { useLocation, useNavigate } from 'react-router-dom';
import AppRouter from './Router';
import Footer from './components/common/footer/Footer';
import { useEffect } from 'react';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken && location.pathname === '/') {
      navigate('/home');
    } else {
      navigate('/');
    }
  }, []);

  return (
    <>
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
