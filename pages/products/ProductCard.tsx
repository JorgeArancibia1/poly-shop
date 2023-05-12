import { Card, CardActionArea, CardMedia, Grid } from '@mui/material';
import React, { FC } from 'react';
import { Iproduct } from '../../interfaces';

type Props = {
  product: Iproduct;
}

export const ProductCard: FC<Props> = ( { product } ) => {
	return (
		<Grid item xs={6} sm={4} key={product.slug}>
			<Card>
				<CardActionArea>
					<CardMedia
						component='img'
						image={`products/${product.images[0]}`}
						alt={product.title}
					/>
				</CardActionArea>
			</Card>
		</Grid>
	);
};