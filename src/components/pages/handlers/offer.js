import boys_img from '../../../assets/images/home/offer_boys.png';
import girls_img from '../../../assets/images/home/offer_girls.png';
import pin_img from '../../../assets/images/home/offer_main_shop.jpg';

// import adventure_shop from "../../../assets/images/home/offers/adventure-shop.png";

export const useOfferList = () => {
  return [
    {
      image: boys_img,
      title: 'Clothing for the Boys',
      subtitle: 'Clothing and Accessories for the BMX Boys',
      alt: 'A boy on a bicycle wearing a random BMX shirt',
      key: 'offerBoys',
      link: 'https://rndm-bmx-boyz-merch-2.creator-spring.com',
    },
    {
      image: girls_img,
      title: 'Clothing for the Girls',
      subtitle: 'Clothing and Accessories for the BMX Girls',
      alt: 'A girl on a bicycle wearing a random BMX helmet',
      key: 'offerGirls',
      link: 'https://rndm-bmx-girlz-merch.creator-spring.com/',
    },
    {
      image: pin_img,
      title: 'RNDM-BMX Shop',
      subtitle: 'some RNDM-BMX Products to purchase',
      alt: 'Pin Image',
      key: 'offerMain',
      link: '/mainShop',
    },
  ];
};
