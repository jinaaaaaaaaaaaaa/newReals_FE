import * as S from './Footer.Style';
import NotionIcon from '../../../assets/icons/NotionIcon.svg';
import InstagramIcon from '../../../assets/icons/InstagramIcon.svg';
import MailIcon from '../../../assets/icons/MailIcon.svg';

const ICON_ITEM = [
  { name: 'notion', icon: NotionIcon, url: 'https://www.naver.com' },
  { name: 'instagram', icon: InstagramIcon, url: 'https://www.naver.com' },
  { name: 'mail', icon: MailIcon, url: 'https://www.naver.com' },
]; // 추후 링크들 수정 필요!

const MEMBER_DATA = ['김진아', '나현진', '안연아', '윤예은', '이서현'];

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
                {index < MEMBER_DATA.length - 1 && <S.Divider />}
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
