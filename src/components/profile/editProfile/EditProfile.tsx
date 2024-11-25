import Modal from '../../common/modal/Modal';
import * as S from './EditProfile.Style';
import XIcon from '../../../assets/icons/XIcon.svg';
import { useRef, useState } from 'react';
import Button from '../../common/button/Button';
import ProfileImage from '../profileImage/ProfileImage';
import { patchProfile } from '../../../api/Profile';

interface EditProfileProps {
  name: string;
  image: string;
  onClose: () => void;
}

const EditProfile = ({ name, image, onClose }: EditProfileProps) => {
  const [user, setUser] = useState<{ name: string; image: string | File }>({
    name: name,
    image: image,
  });
  const [error, setError] = useState({ isError: false, errorMessage: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length > 10) {
      setError({
        isError: true,
        errorMessage: '이름은 10글자 이내로 작성해주세요.',
      });
    } else {
      setError({
        isError: false,
        errorMessage: '',
      });
    }
    setUser((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB 제한
        alert('이미지 파일 크기는 5MB를 초과할 수 없습니다.');
        return;
      }
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        // 확장자 제한
        alert('이미지는 JPG, PNG, GIF 형식만 가능합니다.');
        return;
      }
      setUser((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleImageAdd = () => {
    fileInputRef.current?.click();
  };

  const handleImageDelete = () => {
    setUser((prev) => ({
      ...prev,
      image: image,
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChangeProfile = async () => {
    try {
      const response = await patchProfile(
        user.name !== name ? user.name : undefined,
        typeof user.image !== 'string' ? (user.image as File) : undefined,
      );
      alert(response.message); // 토스트 알림이나 다른 부분으로 변경하기
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <S.Modal>
        <S.Content>
          <S.Header>
            프로필 편집
            <img src={XIcon} alt="닫기" onClick={onClose} />
          </S.Header>
          <S.Container>
            <label htmlFor="name">이름</label>
            <S.InputContainer>
              <S.Input
                id="name"
                type="text"
                value={user.name}
                onChange={handleNameChange}
                autoComplete="off"
              />
              <S.HelperText $isError={error.isError}>
                {error.isError
                  ? error.errorMessage
                  : '한글, 영문, 숫자 혼용 가능(한글 기준 10자 이내)'}
              </S.HelperText>
            </S.InputContainer>
          </S.Container>
          <S.Line />
          <S.Container>
            프로필 이미지
            <S.Profile>
              <S.Image>
                <ProfileImage
                  image={
                    typeof user.image === 'string' ? user.image : URL.createObjectURL(user.image)
                  }
                />
                <S.Text>현재 이미지</S.Text>
              </S.Image>
              <S.EditImage>
                <S.Text>
                  프로필 이미지는 가로/세로 84px 크기로 원형 크롭이 되기 때문에 인물이나 요소가
                  중앙에 있는 이미지를 추천해요.
                </S.Text>
                <S.ImageButtonContainer>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <S.ImageButton onClick={handleImageAdd}>이미지 변경</S.ImageButton>
                  <S.ImageButton onClick={handleImageDelete}>이미지 삭제</S.ImageButton>
                </S.ImageButtonContainer>
              </S.EditImage>
            </S.Profile>
          </S.Container>
          <S.ButtonContainer>
            <Button buttonStyle="profile" onClick={onClose}>
              취소
            </Button>
            <Button buttonStyle="modal" onClick={handleChangeProfile}>
              적용
            </Button>
          </S.ButtonContainer>
        </S.Content>
      </S.Modal>
    </Modal>
  );
};

export default EditProfile;
