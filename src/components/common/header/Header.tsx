import * as S from './Header.Style';
import Logo from '../../../assets/icons/Logo.svg';
import PeopleIcon from '../../../assets/icons/PeopleIcon.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import PointAlert from '../chip/PointAlert';

const CATEGORIES = [
  { path: '/category/politics', label: '정치' },
  { path: '/category/economy', label: '경제' },
  { path: '/category/society', label: '사회' },
];

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const kakaoRestKey = import.meta.env.VITE_KAKAO_REST_KEY;
  const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  // 카카오 OAuth URL 생성
  const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestKey}&redirect_uri=${redirectUri}&response_type=code`;

  // 로그인 버튼 클릭 핸들러
  const handleLoginClick = () => {
    window.location.href = kauthUrl;
  };

  if (pathname === '/register') return null;

  return (
    <S.Head>
      <S.ServiceImg
        onClick={() => (pathname === '/' ? navigate('/') : navigate('/home'))}
        src={Logo}
        alt="Logo"
      />
      {pathname === '/' ? (
        <S.LoginPart onClick={handleLoginClick}>
          <S.LoginImg src={PeopleIcon} alt="LoginIcon" />
          <S.Login>로그인 / 회원가입</S.Login>
        </S.LoginPart>
      ) : (
        <>
          <S.Category>
            {CATEGORIES.map((category) => (
              <S.CategoryItem
                key={category.path}
                $currentPage={pathname === category.path}
                onClick={() => {
                  navigate(category.path);
                }}
              >
                {category.label}
              </S.CategoryItem>
            ))}
          </S.Category>
          <S.SidePart>
            {pathname === '/market' ? (
              <PointAlert type="header" leftcontent="내가 보유한 포인트" rightcontent="30,000" />
            ) : (
              pathname !== '/profile' && <SearchBar />
            )}
            <S.Etc>
              <S.Info
                $color={pathname === '/profile'}
                onClick={() => {
                  navigate('/profile');
                }}
              >
                MY
              </S.Info>
              <S.StyledMarketIcon
                onClick={() => {
                  navigate('/market');
                }}
                $isActive={pathname === '/market'}
              />
            </S.Etc>
          </S.SidePart>
        </>
      )}
    </S.Head>
  );
};

export default Header;
