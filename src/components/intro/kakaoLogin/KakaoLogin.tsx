import * as S from './KakaoLogin.Style';
import kakaoButton from '../../../assets/icons/kakaoButton.svg';
import React from 'react';
import IntroLoginImg from '../../../assets/icons/IntroLoginIcon.svg';

const KakaoLogin: React.FC = () => {
  const kakaoRestKey = import.meta.env.VITE_KAKAO_REST_KEY;
  const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  // 카카오 OAuth URL 생성
  const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestKey}&redirect_uri=${redirectUri}&response_type=code`;

  // 로그인 버튼 클릭 핸들러
  const handleLoginClick = () => {
    window.location.href = kauthUrl;
  };

  return (
    <S.Container>
      <div>
        <S.StartMent>
          그럼 이제 <S.Purple>newReals</S.Purple>를 시작해볼까요?
        </S.StartMent>
        <S.KakaoButton onClick={handleLoginClick} src={kakaoButton} alt="카카오로그인" />
      </div>
      <S.ImgPart src={IntroLoginImg} />
    </S.Container>
  );
};

export default KakaoLogin;
