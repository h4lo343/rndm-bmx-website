import bell_theme from '../../../assets/images/mainShop/generalBMX/Bike Bell Electronic/bell_theme.jpg';
import cable_theme from '../../../assets/images/mainShop/generalBMX/cabel/cabel_theme.png';
import cable_common_1 from '../../../assets/images/mainShop/generalBMX/cabel/common/cabel_common_1.png';
import cable_common_2 from '../../../assets/images/mainShop/generalBMX/cabel/common/cabel_common_2.png';
import braker_lever_theme from '../../../assets/images/mainShop/generalBMX/Braker Lever/braker_lever_theme.jpg';
import braker_light_theme from '../../../assets/images/mainShop/generalBMX/Braker Light/braker_light_theme.png';
import braker_light_common_1 from '../../../assets/images/mainShop/generalBMX/Braker Light/common/braker_light_common_1.png';
import braker_lever_common_1 from '../../../assets/images/mainShop/generalBMX/Braker Lever/common/braker_lever_common_1.png';
import mechanical_bell_common_1 from '../../../assets/images/mainShop/generalBMX/Mechanical Bell/common/mechanical_bell_common_1.png';
import mechanical_bell_theme from '../../../assets/images/mainShop/generalBMX/Mechanical Bell/mechanical_bell_theme.png';
import bell_common_1 from '../../../assets/images/mainShop/generalBMX/Bike Bell Electronic/common/bell_common_1.png';
import bell_common_2 from '../../../assets/images/mainShop/generalBMX/Bike Bell Electronic/common/bell_common_2.png';

export const mainShopProducts = {
  generalBMX: {
    products: [
      {
        fullName: 'Bike Bell Electronic',
        subCategory: 'bell',
        description:
          'X-TIGER Bicycle Bell Horn USB Chargeable Electric Horn 4 Modes Motorcycle Bike Horn Mountain Road Cycling Loud Warning Sound',
        themeImage: bell_theme,
        discountedPrice: 2,
        originalPrice: 11.04,
        rating: 3,
        intro: false,
        types: ['default type'],
        images: {
          'default type': {
            common: [bell_common_1, bell_common_2],
            girlImages: [],
            boyImages: [],
            specImage: null,
          },
        },
      },
      {
        fullName: 'Mechanical Bell',
        subCategory: 'bell',
        description:
          'High Decibel Clear Ring MTB Road Bike Retro Bell Bicycle Brass Bell Cover Nylon Stainless Steel ScrewBike Accessories ROCKBROS',
        themeImage: mechanical_bell_theme,
        originalPrice: 13.06,
        rating: 3,
        intro: false,
        types: ['default type'],
        images: {
          'default type': {
            common: [mechanical_bell_common_1],
            girlImages: [],
            boyImages: [],
            specImage: null,
          },
        },
      },
      {
        fullName: 'Brake Cable',
        subCategory: 'cable',
        description:
          'ZTTO Bicycle Stainless Steel Inner Shift Brake Wire MTB Road Bike Shifting Zinc Coat Inside Cable Line 2100mm Shifter Derailleur',
        themeImage: cable_theme,
        originalPrice: 13.06,
        rating: 3,
        intro: false,
        types: ['default type'],
        images: {
          'default type': {
            common: [cable_common_1, cable_common_2],
            girlImages: [],
            boyImages: [],
            specImage: null,
          },
        },
      },
      {
        fullName: 'Brake Lever',
        subCategory: 'braker',
        description:
          'FR5 MTB Ultra Light Brake Handle Levers V Brake/Disc Brake Handle Brake Aluminum Alloy Mountain Hydraulic Bicycle Disc Brake Set',
        themeImage: braker_lever_theme,
        originalPrice: 0.76,
        rating: 8.12,
        intro: false,
        types: ['default type'],
        images: {
          'default type': {
            common: [braker_lever_common_1],
            girlImages: [],
            boyImages: [],
            specImage: null,
          },
        },
      },
      {
        fullName: 'Brake Light',
        subCategory: 'braker',
        description:
          'FR5 MTB Ultra Light Brake Handle Levers V Brake/Disc Brake Handle Brake Aluminum Alloy Mountain Hydraulic Bicycle Disc Brake Set',
        themeImage: braker_light_common_1,
        originalPrice: 0.76,
        rating: 8.12,
        intro: false,
        types: ['default type'],
        images: {
          'default type': {
            common: [braker_light_common_1],
            girlImages: [],
            boyImages: [],
            specImage: null,
          },
        },
      },
    ],
  },
  RNDMBMX: {
    products: [],
  },
  UniqueBMX: {
    products: [],
  },
  ExoticBMX: {
    products: [],
  },
};
