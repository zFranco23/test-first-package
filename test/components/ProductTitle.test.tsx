import renderer from 'react-test-renderer';
import React from 'react';

import {ProductTitle} from '../../src/components/ProductTitle';
import { product1 } from '../mock/products';
import { ProductCard } from '../../src/components/ProductCard';

describe('ProductTitle', () => {
  test('Should show correctly the component with the title', () => {
    const wrapper = renderer.create(<ProductTitle title="Hola"  className='custom-class'/>)


    expect(wrapper.toJSON()).toMatchSnapshot()    
  });

  test('Should show correctly the component with product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductTitle />}
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()    
  });
});
