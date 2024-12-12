import { useEffect, useState } from 'react';
import Loading from '../../common/Loading/Loding';
import { login } from '../../../api/Login';
import { useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  const [loading, setLoading] = useState(true); // 로딩 상태 추가

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
            localStorage.setItem('nickname', data.name);
          }

          // 데이터 로딩이 완료되었으므로 로딩 상태를 false로 설정
          setLoading(false);

          // 로컬스토리지 설정 후 navigate 호출
          navigate(data.redirect_url);
        }
      } catch (error) {
        console.error('API 요청 실패:', error);
        navigate('/error'); // 에러 페이지로 이동
      }
    };

    fetchData();
  }, [code]);

  return loading ? <Loading message="카카오 계정으로 인증 중입니다..." /> : null; // 로딩 중이면 로딩 메시지를 보여줌
};

export default RedirectPage;
