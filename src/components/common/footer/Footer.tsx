import * as S from './Footer.Style';
import NotionIcon from '../../../assets/icons/NotionIcon.svg';
import GithubIcon from '../../../assets/icons/GitHubIcon.svg';

const ICON_ITEM = [
  {
    name: 'notion',
    icon: NotionIcon,
    url: 'https://flash-hook-93f.notion.site/newREALs-16b5e8a517dd80b0a45ecff6b01ecfb1?pvs=4',
  },
  { name: 'github', icon: GithubIcon, url: 'https://github.com/2024-Fall-CapstoneDesign' },
];

const MEMBER_DATA = ['김진아', '나현진', '안연아', '윤예은', '이서현', '설정원'];

const Footer = () => {
  return (
    <S.Footer>
      <S.Logo>newReals</S.Logo>
      <S.Content>
        <S.About>
          <S.Title>About</S.Title>
          <S.IconContainer>
            {ICON_ITEM.map((item) => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
                <S.Icon src={item.icon} alt={item.name} />
              </a>
            ))}
          </S.IconContainer>
        </S.About>
        <S.Member>
          <S.Title>Member</S.Title>
          <S.NameContainer>
            {MEMBER_DATA.map((member, index) => (
              <S.NameContainer key={index}>
                <p>{member}</p>
              </S.NameContainer>
            ))}
          </S.NameContainer>
        </S.Member>
      </S.Content>
      <S.Copyright>COPYRIGHT ⓒnewReals. All Rights Reserved.</S.Copyright>
    </S.Footer>
  );
};

export default Footer;
