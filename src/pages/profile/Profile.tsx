import * as S from './Profile.Style';
import ProfileCard from '../../components/profile/profileCard/ProfileCard';
import Calendar from '../../components/profile/calendar/Calendar';
import { useEffect, useState } from 'react';
import EditProfile from '../../components/profile/editProfile/EditProfile';
import KeywordModal from '../../components/profile/keywordModal/KeywordModal';
import Chip from '../../components/common/chip/Chip';
import Activities from '../../components/profile/activities/Activities';
import Report from '../../components/profile/report/Report';
import { getUser } from '../../api/Profile';

const chips = ['나의 활동', '나의 분석 레포트'];

const Profile = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openKeywordModal, setOpenKeywordModal] = useState(false);
  const [selectedChip, setSelectedChip] = useState('나의 활동');
  const [user, setUser] = useState({
    name: '',
    profilePath: '',
    keywords: [''],
    point: 0,
  });

  const handleEditModal = () => {
    setOpenEditModal((prev) => !prev);
  };

  const handleKeywordModal = () => {
    setOpenKeywordModal((prev) => !prev);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      if (data) {
        setUser(data);
      }
    };
    fetchUser();
  }, [openEditModal, openKeywordModal]);

  return (
    <S.Container>
      <S.Title>마이페이지</S.Title>
      <S.Content>
        <S.LeftContent>
          <ProfileCard
            name={user.name}
            profilePath={user.profilePath}
            onClickEditProfile={handleEditModal}
            onClickEditKeyWord={handleKeywordModal}
            keywords={user.keywords}
            point={user.point}
          />
          <Calendar />
        </S.LeftContent>

        <S.RightContent>
          <S.ChipContainer>
            {chips.map((chip) => (
              <Chip
                key={chip}
                isSelected={selectedChip === chip}
                onClick={() => setSelectedChip(chip)}
              >
                {chip}
              </Chip>
            ))}
          </S.ChipContainer>
          {selectedChip === '나의 활동' ? <Activities name={user.name} /> : <Report />}
        </S.RightContent>
      </S.Content>
      {openEditModal && (
        <EditProfile name={user.name} image={user.profilePath} onClose={handleEditModal} />
      )}
      {openKeywordModal && <KeywordModal onClose={handleKeywordModal} />}
    </S.Container>
  );
};

export default Profile;
