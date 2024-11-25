import { useEffect } from 'react';
import Loading from '../../common/Loading/Loding';
import { login } from '../../../api/Login';
import { useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!code) {
          console.error('Code 값이 없습니다.');
          return;
        }

        const data = await login(code);

        if (data) {
          if (data.redirect_url === '/register') {
            localStorage.setItem('tempToken', data.tempToken);
            localStorage.setItem('nickname', data.name);
          } else {
            localStorage.setItem('access_token', data.accessToken);
            localStorage.setItem('refresh_token', data.refreshToken);
          }

          navigate(data.redirect_url);
        }
      } catch (error) {
        console.error('API 요청 실패:', error);
      }
    };

    fetchData();
  }, []);

  return <Loading message="카카오 계정으로 인증 중입니다..." />;
};

export default RedirectPage;
