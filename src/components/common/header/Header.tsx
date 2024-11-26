import * as S from './Header.Style';
import Logo from '../../../assets/images/Logo.svg';
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

  if (pathname === '/register') return null;

  return (
    <S.Head>
      <S.ServiceImg
        onClick={() => (pathname === '/' ? navigate('/') : navigate('/home'))}
        src={Logo}
        alt="Logo"
      />
      {pathname === '/' ? (
        <S.LoginPart>
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
              pathname !== '/profile' && (
                <SearchBar placeholder="뉴스 검색" onClick={() => navigate('/search')} />
              )
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
