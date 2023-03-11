import renderer from 'react-test-renderer';
import React from 'react';

import { product2 } from '../mock/products';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';

describe('ProductImage', () => {
  test('Should show correctly the image', () => {
    const wrapper = renderer.create(<ProductImage img="/abcd.jpg" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should show correctly the image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
