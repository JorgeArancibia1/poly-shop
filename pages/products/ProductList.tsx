import { Grid } from '@mui/material';
import React, { FC } from 'react';

type Props = {
  products: any[]
}

const ProductList: FC<Props> = ( { products } ) => {
	return (
		<Grid container spacing={4}>
			{
				products.map()
			}
		</Grid>
	);
};