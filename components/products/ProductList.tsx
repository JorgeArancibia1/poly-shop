import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { Iproduct } from '../../interfaces';
import ProductCard from './ProductCard';

type Props = {
  products: Iproduct[]
}

const ProductList: FC<Props> = ( { products } ) => {
	return (
		<Grid container spacing={4}>
			{
				products.map( product => (
					<ProductCard
						// key={product._id}
						key={product.slug}
						product={product}
					/>
				) )
			}
		</Grid>
	);
};

export default ProductList;