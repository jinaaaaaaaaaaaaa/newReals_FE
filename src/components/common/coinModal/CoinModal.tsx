import Modal from '../modal/Modal';
import * as S from './CoinModal.Style';
import XIcon from '../../../assets/icons/XIcon.svg';
import CoinIcon from '../../../assets/icons/CoinIcon.svg';
import Button from '../button/Button';
import ModalAction from '../../../assets/icons/ModalAction.svg';

interface CoinModal {
  onClose: () => void;
  text: string;
  coin: number;
}

/**
 *
 * @param onClose - 모달에 수행할 함수
 * @param text - 코인을 얻을 때 멘트
 * @param coin - 얻은 코인의 수
 * @returns
 */
const CoinModal = ({ onClose, text, coin }: CoinModal) => {
  return (
    <Modal onClose={onClose}>
      <S.Modal>
        <S.AnimatedImage src={ModalAction} alt="축하해요" />
        <S.Icon>
          <img src={XIcon} alt="닫기" onClick={onClose} />
        </S.Icon>
        <S.Content>
          <S.Coin src={CoinIcon} alt="코인" />
          <S.CoinText>{coin}코인 획득!</S.CoinText>
          <S.Text>{text}</S.Text>
        </S.Content>
        <Button buttonStyle="modal" onClick={onClose}>
          확인
        </Button>
      </S.Modal>
    </Modal>
  );
};

export default CoinModal;
