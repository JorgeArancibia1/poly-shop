import { Box, Card, CardActionArea, CardMedia, Grid } from '@mui/material';
import React, { FC, useMemo, useState } from 'react';
import { Iproduct } from '../../interfaces';

type Props = {
	product: Iproduct;
}

export const ProductCard: FC<Props> = ( { product } ) => {

	// State para saber si el elemento tiene hover
	const [ isHovered, setIsHovered ] = useState( false );

	// Función para intercambiar una imagen al hacer hover o blur
	const productImage = useMemo( () => {
		return isHovered
			? `products/${product.images[1]}`
			: `products/${product.images[2]}`;
	}, [ isHovered, product.images ] );

	return (
		<Grid
			item
			xs={6}
			sm={4}
			onMouseEnter={() => setIsHovered( true )}
			onMouseLeave={() => setIsHovered( false )}
		>
			<Card>
				<CardActionArea>
					<CardMedia
						component='img'
						className='fadeIn'
						image={productImage}
						alt={product.title}
						// onLoad={() => console.log( 'cargo' )} // Se dispara cuando el elemento termina de cargar
					/>
				</CardActionArea>
			</Card>

			<Box sx={{ mt:1 }} className='fadeIn'>

			</Box>
		</Grid>
	);
};