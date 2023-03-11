import React from 'react';
import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    children: (maxCount?: number) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}


export const ProductCard = (props: Props ) => {
    const { children, product, className, style, onChange, value, initialValues } = props;

    const { counter, increaseBy, maxCount } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { children(initialValues?.maxCount) }
            </div>
        </Provider>
    )
}
