import product_pin_boy_1 from '../../../assets/images/products/pin/pin_boy_1.jpg'
import product_pin_boy_2 from '../../../assets/images/products/pin/pin_boy_2.jpg'
import product_pin_boy_3 from '../../../assets/images/products/pin/pin_boy_3.jpg'
import product_pin_boy_4 from '../../../assets/images/products/pin/pin_boy_4.jpg'
import product_pin_boy_5 from '../../../assets/images/products/pin/pin_boy_5.jpg'
import product_pin_girl_1 from '../../../assets/images/products/pin/pin_girl_1.jpg'
import product_pin_spec from '../../../assets/images/products/pin/pin_spec.jpg'
import post_1 from '../../../assets/images/products/post/post_1.jpg'
import  clamp_1 from '../../../assets/images/products/clamp/clamp_1.jpg'

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
    types: ['Type 1 Stainless Steel 316', 'Type 2 Stainless Steel 317', 'Type 3 Stainless Steel 318']
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
