import * as S from './ProfileCard.Style';
import EditIcon from '../../../assets/icons/EditIcon.svg';
import CoinIcon from '../../../assets/icons/CoinIcon.svg';
import InfoIcon from '../../../assets/icons/InfoIcon.svg';
import Tag from '../../common/tag/Tag';
import ProfileImage from '../profileImage/ProfileImage';
import CoinExplain from './coinExplain/CoinExplain';

interface ProfileCardProps {
  name: string;
  profilePath: string;
  onClickEditProfile: () => void;
  onClickEditKeyWord: () => void;
  keywords: string[];
  point: number;
}

const ProfileCard = ({
  name,
  profilePath,
  onClickEditProfile,
  onClickEditKeyWord,
  keywords,
  point,
}: ProfileCardProps) => {
  return (
    <S.container>
      <S.Profile>
        <ProfileImage image={profilePath} />
        <S.IconContainer>
          <S.Icon src={EditIcon} alt="프로필 편집" onClick={onClickEditProfile} />
        </S.IconContainer>
        {name}
      </S.Profile>
      <S.KeywordContainer>
        <S.KeywordHeader>
          나의 관심 키워드
          <S.Edit onClick={onClickEditKeyWord}>
            키워드 편집
            <S.ArrowIcon />
          </S.Edit>
        </S.KeywordHeader>
        <S.Keywords>
          {keywords.map((keyword, index) => (
            <Tag key={index} color="purple">
              {keyword}
            </Tag>
          ))}
        </S.Keywords>
      </S.KeywordContainer>
      <S.Coin>
        <S.CoinText>
          <S.Icon src={CoinIcon} alt="코인" />
          <p>내 코인 </p>
          <S.CoinNumber>{point}코인</S.CoinNumber>
        </S.CoinText>
        <S.InfoContainer>
          <S.Info src={InfoIcon} alt="코인 정보" />
          <CoinExplain />
        </S.InfoContainer>
      </S.Coin>
    </S.container>
  );
};

export default ProfileCard;
