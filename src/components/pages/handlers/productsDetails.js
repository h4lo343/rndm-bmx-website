import pin_theme from '../../../assets/images/products/pin/pin_theme.jpg';
import clamp_theme from '../../../assets/images/products/clamp/clamp_theme.png';
import post_theme from '../../../assets/images/products/post/post_theme.png';
import clamp_common from '../../../assets/images/products/clamp/default_type/common/clamp_theme.png';
import post_common from '../../../assets/images/products/post/default_type/common/clamp_theme.png.webp';

import spec_diagram_1 from '../../../assets/images/products/pin/type_1_stainless/Spec_Diagram.jpg';
import type_1_stainless_1 from '../../../assets/images/products/pin/type_1_stainless/common/Type_1_Stainless.jpg';
import type_1_stainless_2 from '../../../assets/images/products/pin/type_1_stainless/common/Type_1_Stainless_2.jpg';
import girl_type_1 from '../../../assets/images/products/pin/type_1_stainless/girl/Girl_type_1.jpg';
import boy_type_1 from '../../../assets/images/products/pin/type_1_stainless/boy/Boy_type_1.jpg';
import spec_diagram_1_2 from '../../../assets/images/products/pin/type_1_titanium/Spec_Diagram.jpg';
import type_1_titanium_1 from '../../../assets/images/products/pin/type_1_titanium/common/Type_1_Titanium.jpg';
import type_1_titanium_2 from '../../../assets/images/products/pin/type_1_titanium/common/Type_1_Titanium_2.jpg';
import girl_type_1_2 from '../../../assets/images/products/pin/type_1_titanium/girl/Girl_type_1.jpg';
import boy_type_1_2 from '../../../assets/images/products/pin/type_1_titanium/boy/Boy_type_1.jpg';
import spec_diagram_2 from '../../../assets/images/products/pin/type_2_stainless/Spec_Diagram_2.png';
import type_2_stainless_1 from '../../../assets/images/products/pin/type_2_stainless/common/Type_2_Stainless.jpg';
import type_2_stainless_2 from '../../../assets/images/products/pin/type_2_stainless/common/Type_2_Stainless_2.jpg';
import girl_type_2 from '../../../assets/images/products/pin/type_2_stainless/girl/Girl_type_2.jpg';
import boy_type_2 from '../../../assets/images/products/pin/type_2_stainless/boy/Boy_type_2.jpg';
import spec_diagram_2_2 from '../../../assets/images/products/pin/type_2_titanium/Spec_Diagram_2.png';
import type_2_titanium_1 from '../../../assets/images/products/pin/type_2_titanium/common/Type_2_Titanium.jpg';
import type_2_titanium_2 from '../../../assets/images/products/pin/type_2_titanium/common/Type_2_Titanium_2.jpg';
import girl_type_2_2 from '../../../assets/images/products/pin/type_2_titanium/girl/Girl_type_2.jpg';
import boy_type_2_2 from '../../../assets/images/products/pin/type_2_titanium/boy/Boy_type_2.jpg';

export const introProductDetails = {
  pin: {
    fullName: "Brake'N'Pins",
    description:
      'These little Pins can be locked into place adjusting your Brake Cable to suit. They come in Two Types Round And Oval.',
    themeImage: pin_theme,
    discountedPrice: 20,
    originalPrice: 140,
    rating: 2,
    intro: true,
    types: [
      'Type 1 Stainless Steel 316',
      'Type 1 Titanium Grade 5',
      'Type 2 Stainless Steel 316',
      'Type 2 Titanium Grade 5',
    ],
    images: {
      'Type 1 Stainless Steel 316': {
        common: [type_1_stainless_1, type_1_stainless_2],
        girlImages: [girl_type_1],
        boyImages: [boy_type_1],
        specImage: spec_diagram_1,
      },
      'Type 1 Titanium Grade 5': {
        common: [type_1_titanium_1, type_1_titanium_2],
        girlImages: [girl_type_1_2],
        boyImages: [boy_type_1_2],
        specImage: spec_diagram_1_2,
      },
      'Type 2 Stainless Steel 316': {
        common: [type_2_stainless_1, type_2_stainless_2],
        girlImages: [girl_type_2],
        boyImages: [boy_type_2],
        specImage: spec_diagram_2,
      },
      'Type 2 Titanium Grade 5': {
        common: [type_2_titanium_1, type_2_titanium_2],
        girlImages: [girl_type_2_2],
        boyImages: [boy_type_2_2],
        specImage: spec_diagram_2_2,
      },
    },
  },
  clamp: {
    fullName: "Seat'Clamp",
    description:
      'Pivotal Qne Piece Aluminum Alloy 180 25.4 mm Bmx Bike Seat Post Tube',
    types: ['default type'],
    images: {
      'default type': {
        common: [clamp_common],
        girlImages: [],
        boyImages: [],
        specImage: null,
      },
    },
    intro: true,
    themeImage: clamp_theme,
    discountedPrice: null,
    rating: 4,
    originalPrice: 30,
  },
  post: {
    fullName: "Seat'Post",
    description:
      'Pivotal Qne Piece Aluminum Alloy 180 25.4 mm Bmx Bike Seat Post Tube',
    themeImage: post_theme,
    types: ['default type'],
    images: {
      'default type': {
        common: [post_common],
        girlImages: [],
        boyImages: [],
        specImage: null,
      },
    },
    intro: true,
    rating: 4,
    discountedPrice: null,
    originalPrice: 380,
  },
};
