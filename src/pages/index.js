import * as React from 'react';
import Banner from '../components/banner';
import ContentBlock from '../components/contentBlock';
import Navbar from '../components/navbar';
import Products from '../components/products';
import ReviewList from '../components/reviewList';
import { skewedSection } from '../components/style.module.css';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Banner />

      <ContentBlock title={'Heavenly Treats'}>
        <Products />
      </ContentBlock> ;

      <div className={skewedSection}>
        <ContentBlock skewedSection={true} title={'User Reviews'}>
          <ReviewList />
        </ContentBlock>
      </div>
    </>
  );
};

