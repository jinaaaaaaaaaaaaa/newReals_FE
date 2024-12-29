import * as S from './Header.Style';
import Logo from '../../../assets/icons/Logo.svg';
import PeopleIcon from '../../../assets/icons/PeopleIcon.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import Etc from '../../../assets/icons/Etc.svg';
import PointAlert from '../chip/PointAlert';
import { useEffect, useState } from 'react';

const CATEGORIES = [
  { path: '/category/politics', label: '정치' },
  { path: '/category/economy', label: '경제' },
  { path: '/category/society', label: '사회' },
];

const MENUS = [
  { path: '/category/politics', label: '정치' },
  { path: '/category/economy', label: '경제' },
  { path: '/category/society', label: '사회' },
  { path: '/profile', label: 'MY' },
  { path: '/market', label: '포인트 상품' },
];

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const kakaoRestKey = import.meta.env.VITE_KAKAO_REST_KEY;
  const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  // 카카오 OAuth URL 생성
  const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestKey}&redirect_uri=${redirectUri}&response_type=code`;

  // 로그인 버튼 클릭 핸들러
  const handleLoginClick = () => {
    window.location.href = kauthUrl;
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  if (pathname === '/register') return null;

  if (isMobile) {
    return (
      <>
        <S.MobileHeaderContainer>
          <S.Head>
            <S.Service onClick={() => (pathname === '/' ? navigate('/') : navigate('/home'))}>
              <S.ServiceImg src={Logo} alt="Logo" />
              <S.ServiceName>NEWREALS</S.ServiceName>
            </S.Service>
            {pathname === '/' ? (
              <S.LoginPart onClick={handleLoginClick}>
                <S.Login>로그인 / 회원가입</S.Login>
              </S.LoginPart>
            ) : (
              <S.SidePart>
                {pathname === '/market' && (
                  <PointAlert type="header" leftcontent="" rightcontent="30,000" />
                )}
                <S.MobileEtc src={Etc} alt="목록" onClick={toggleMenu} />
              </S.SidePart>
            )}
            {isMenuOpen && (
              <S.MobileMenu>
                {MENUS.map((menu) => (
                  <S.MobileMenuItem
                    key={menu.path}
                    onClick={() => {
                      navigate(menu.path);
                      setIsMenuOpen(false); // 메뉴 닫기
                    }}
                  >
                    {menu.label}
                  </S.MobileMenuItem>
                ))}
              </S.MobileMenu>
            )}
          </S.Head>
          {pathname !== '/' && pathname !== '/profile' && pathname !== '/market' && (
            <S.SearchBarContainer>
              <SearchBar />
            </S.SearchBarContainer>
          )}
        </S.MobileHeaderContainer>
      </>
    );
  }

  return (
    <S.Head>
      <S.Service onClick={() => (pathname === '/' ? navigate('/') : navigate('/home'))}>
        <S.ServiceImg src={Logo} alt="Logo" />
        <S.ServiceName>NEWREALS</S.ServiceName>
      </S.Service>
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
