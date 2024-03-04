import { ProductPage } from '../product/ProductPage';
import { ShopPage } from '../shop/ShopPage';
import { HomePage } from '../home/HomePage';
import { MainShopPage } from '../mainShop/mainShopPage';
import { Test } from '../../../test';
import { CartPage } from '../cart/cartPage';
import { CheckoutPage } from '../checkout/checkoutPage';

// setting the pages and the components for the routes
export const pageRoutes = [
  {
    pathname: '/',
    exact: true,
    component: HomePage,
    key: 'home',
  },
  {
    pathname: '/product/:key',
    exact: true,
    component: ProductPage,
    key: 'product',
  },
  {
    pathname: '/shop',
    exact: true,
    component: ShopPage,
    key: 'product',
  },
  {
    pathname: '/test',
    exact: true,
    component: Test,
    key: 'test',
  },
  {
    pathname: '/mainShop/',
    exact: true,
    component: MainShopPage,
    key: 'mainShop',
  },
  {
    pathname: '/cart',
    exact: true,
    component: CartPage,
    key: 'cartPage',
  },
  {
    pathname: '/mainShop/:category',
    exact: true,
    component: MainShopPage,
    key: 'mainShop',
  },
  {
    pathname: '/checkout',
    exact: true,
    component: CheckoutPage,
    key: 'checkout',
  },
];

export const navHomeID = 'home-section';
export const navProductID = 'products-section';
export const navAboutID = 'about-section';
export const navOffersID = 'offers-section';
export const navBlogID = 'blog-section';
export const navContactID = 'contact-section';

export const navLinks = [
  { name: 'Home', id: navHomeID, offset: -200, pathname: '/' },
  { name: 'Intro Products', id: navProductID, offset: -200, pathname: '/' },
  { name: 'About', id: navAboutID, offset: -50, pathname: '/' },
  { name: 'Clothing', id: navOffersID, offset: -100, pathname: '/' },
  { name: 'Blogs', id: navBlogID, offset: 0, pathname: '/' },
  { name: 'Contact Us', id: navContactID, offset: -200, pathname: '/' },
];
export const footerLinks = [
  { name: 'Returns and Cancellations', id: 'refund', click: 1 },
  { name: 'Privacy Policy', id: 'privacy', click: 2 },
];

// export const homePageIds = [
//   "home-video-section",
//   "home-product-section",
//   "home-about-section",
//   "home-offer-section",
//   "home-blog-section",
//   "homeContact",
//   "footerContent",
// ];

export const homePageElementArray = [
  'home-video-section',
  'home-product-section',
  'home-about-section',
  'home-offer-section',
  'home-blog-section',
  'home-contact-section',
  'footer-content',
];
