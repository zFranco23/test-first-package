import { useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const maxCount = initialValues?.maxCount;

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (maxCount) {
      newValue = Math.min(newValue, maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  // useEffect(() => {
  //     setCounter( value );
  // }, [ value ])

  return {
    counter,
    increaseBy,
    maxCount,
  };
};
