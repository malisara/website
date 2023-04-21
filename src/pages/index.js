import * as React from 'react';
import Banner from '../components/banner';
import ContentBlock from '../components/contentBlock';
import Navbar from '../components/navbar';
import Products from '../components/products';
import ReviewList from '../components/reviewList';
import AboutUs from '../components/about';
import { skewedSection } from '../components/style.module.css';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Banner id={'home'} />

      <ContentBlock id={'products'} title={'Heavenly Treats'}>
        <Products />
      </ContentBlock> ;

      <div className={skewedSection}>
        <ContentBlock id={'reviews'} skewedSection={true} title={'User Reviews'}>
          <ReviewList />
        </ContentBlock>
      </div>

      <ContentBlock id={'about'} title={'About us'}>
        <AboutUs />
      </ContentBlock>



      <footer>Cakealicious 2023</footer>
    </>
  );
};

