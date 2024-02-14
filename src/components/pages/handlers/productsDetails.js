import product_pin_boy_1 from '../../../assets/images/products/pin/pin_boy_1.jpg'
import product_pin_boy_2 from '../../../assets/images/products/pin/pin_boy_2.jpg'
import product_pin_boy_3 from '../../../assets/images/products/pin/pin_boy_3.jpg'
import product_pin_boy_4 from '../../../assets/images/products/pin/pin_boy_4.jpg'
import product_pin_boy_5 from '../../../assets/images/products/pin/pin_boy_5.jpg'
import product_pin_girl_1 from '../../../assets/images/products/pin/pin_girl_1.jpg'
import product_pin_spec from '../../../assets/images/products/pin/pin_spec.jpg'
import post_1 from '../../../assets/images/products/post/post_1.jpg'
import  clamp_1 from '../../../assets/images/products/clamp/clamp_1.jpg'
import spec_diagram_1 from '../../../assets/images/products/pin/type_1_stainless/Spec_Diagram.jpg'
import type_1_stainless_1 from '../../../assets/images/products/pin/type_1_stainless/common/Type_1_Stainless.jpg'
import type_1_stainless_2 from '../../../assets/images/products/pin/type_1_stainless/common/Type_1_Stainless_2.jpg'
import girl_type_1 from '../../../assets/images/products/pin/type_1_stainless/girl/Girl_type_1.jpg'
import boy_type_1 from '../../../assets/images/products/pin/type_1_stainless/boy/Boy_type_1.jpg'
import spec_diagram_1_2 from '../../../assets/images/products/pin/type_1_titanium/Spec_Diagram.jpg'
import type_1_titanium_1 from '../../../assets/images/products/pin/type_1_titanium/common/Type_1_Titanium.jpg'
import type_1_titanium_2 from '../../../assets/images/products/pin/type_1_titanium/common/Type_1_Titanium_2.jpg'
import girl_type_1_2 from '../../../assets/images/products/pin/type_1_titanium/girl/Girl_type_1.jpg'
import boy_type_1_2 from '../../../assets/images/products/pin/type_1_titanium/boy/Boy_type_1.jpg'
import spec_diagram_2 from '../../../assets/images/products/pin/type_2_stainless/Spec_Diagram_2.png'
import type_2_stainless_1 from '../../../assets/images/products/pin/type_2_stainless/common/Type_2_Stainless.jpg'
import type_2_stainless_2 from '../../../assets/images/products/pin/type_2_stainless/common/Type_2_Stainless_2.jpg'
import girl_type_2 from '../../../assets/images/products/pin/type_2_stainless/girl/Girl_type_2.jpg'
import boy_type_2 from '../../../assets/images/products/pin/type_2_stainless/boy/Boy_type_2.jpg'
import spec_diagram_2_2 from '../../../assets/images/products/pin/type_2_titanium/Spec_Diagram_2.png'
import type_2_titanium_1 from '../../../assets/images/products/pin/type_2_titanium/common/Type_2_Titanium.jpg'
import type_2_titanium_2 from '../../../assets/images/products/pin/type_2_titanium/common/Type_2_Titanium_2.jpg'
import girl_type_2_2 from '../../../assets/images/products/pin/type_2_titanium/girl/Girl_type_2.jpg'
import boy_type_2_2 from '../../../assets/images/products/pin/type_2_titanium/boy/Boy_type_2.jpg'

export const productDetails = {
  pin: {
    fullName: 'Brake\'N\'Pins',
    description: 'These little Pins can be locked into place adjusting your Brake Cable to suit. They come in Two Types Round And Oval.',
    boyImages: [product_pin_boy_1, product_pin_boy_2, product_pin_boy_3, product_pin_boy_4, product_pin_boy_5],
    girlImages: [product_pin_girl_1],
    specImage: product_pin_spec,
    discountedPrice: 20,
    originalPrice: 140,
    rating: 2,
    types: ['Type 1 Stainless Steel 316',  'Type 1 Titanium Grade 5', 'Type 2 Stainless Steel 316', 'Type 2 Titanium Grade 5'],
    images: {
      'Type 1 Stainless Steel 316': {
        common: [type_1_stainless_1, type_1_stainless_2],
        girlImages: [girl_type_1],
        boyImages: [boy_type_1],
        specImage: spec_diagram_1
      },
      'Type 1 Titanium Grade 5': {
        common: [type_1_titanium_1, type_1_titanium_2],
        girlImages: [girl_type_1_2],
        boyImages: [boy_type_1_2],
        specImage: spec_diagram_1_2
      },
      'Type 2 Stainless Steel 316': {
        common: [type_2_stainless_1, type_2_stainless_2],
        girlImages: [girl_type_2],
        boyImages: [boy_type_2],
        specImage: spec_diagram_2
      },
      'Type 2 Titanium Grade 5': {
        common: [type_2_titanium_1, type_2_titanium_2],
        girlImages: [girl_type_2_2],
        boyImages: [boy_type_2_2],
        specImage: spec_diagram_2_2
      }
    }
  },
  post: {
    fullName: 'BMX Seat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    boyImages: [post_1],
    discountedPrice: null,
    rating: 4,
    originalPrice: 380,
  },
  clamp: {
    fullName: 'Pivitol Seat Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e.',
    boyImages: [clamp_1],
    rating: 4,
    discountedPrice: null,
    originalPrice: 380,
  }
}
