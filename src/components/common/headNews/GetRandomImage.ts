import EconomyImg1 from '../../../assets/images/EconomyImg1.png';
import EconomyImg2 from '../../../assets/images/EconomyImg2.jpg';
import EconomyImg3 from '../../../assets/images/EconomyImg3.jpg';
import PoliticsImg1 from '../../../assets/images/PoliticsImg1.png';
import PoliticsImg2 from '../../../assets/images/PoliticsImg2.jpg';
import PoliticsImg3 from '../../../assets/images/PoliticsImg3.jpg';
import SocietyImg1 from '../../../assets/images/SocietyImg1.jpg';
import SocietyImg2 from '../../../assets/images/SocietyImg2.jpg';
import SocietyImg3 from '../../../assets/images/SocietyImg3.jpg';

const ECONOMYIMAGES = [EconomyImg1, EconomyImg2, EconomyImg3];
const POLITICSIMAGES = [PoliticsImg1, PoliticsImg2, PoliticsImg3];
const SOCIETYIMAGES = [SocietyImg1, SocietyImg2, SocietyImg3];

interface getRandomImageProps {
  category: string;
}
export const getRandomImage = ({ category }: getRandomImageProps) => {
  let imagesArray;

  switch (category) {
    case '정치':
      imagesArray = POLITICSIMAGES;
      break;
    case '사회':
      imagesArray = SOCIETYIMAGES;
      break;
    case '경제':
      imagesArray = ECONOMYIMAGES;
      break;
    default:
      return null;
  }

  if (imagesArray && imagesArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomIndex];
  }

  return null;
};
