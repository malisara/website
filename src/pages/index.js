import * as React from 'react';
import Banner from '../components/banner';
import ContentBlock from '../components/contentBlock';
import Navbar from '../components/navbar';
import Products from '../components/products';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Banner />
      <ContentBlock title={'Heavenly Treats'}>
        <Products />
      </ContentBlock> ;
    </>
  );
};

