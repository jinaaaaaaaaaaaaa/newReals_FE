import * as S from './ProfileImage.Style';
import DefaultProfileImg from '../../../assets/images/DefaultProfileImg.png';

interface ProfileImageProps {
  image: string;
}

const ProfileImage = ({ image }: ProfileImageProps) => {
  return <S.Image src={image ? image : DefaultProfileImg} alt="프로필 사진" />;
};

export default ProfileImage;
