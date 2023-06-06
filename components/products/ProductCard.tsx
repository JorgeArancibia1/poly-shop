import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import React, { FC, useMemo, useState } from 'react';
import { Iproduct } from '../../interfaces';
import NextLink from 'next/link';
import Link from 'next/link';

type Props = {
	product: Iproduct;
}

const ProductCard: FC<Props> = ( { product } ) => {

	console.log( 'Product => ', product );

	// State para saber si el elemento tiene hover
	const [ isHovered, setIsHovered ] = useState( false );

	// Función para intercambiar una imagen al hacer hover o blur
	const productImage = useMemo( () => {
		return isHovered
			? `products/${product.images[1]}`
			: `products/${product.images[0]}`;
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
				<NextLink href="/product/slug" passHref prefetch={false}>
					{/* <Link> */}
					<CardActionArea>
						<CardMedia
							component='img'
							className='fadeIn'
							image={productImage}
							alt={product.title}
							// onLoad={() => console.log( 'cargo' )} // Se dispara cuando el elemento termina de cargar
						/>
					</CardActionArea>
					{/* </Link> */}
				</NextLink>
			</Card>

			<Box sx={{ mt:1 }} className='fadeIn'>
				<Typography fontWeight={700}>{product.title}</Typography>
				<Typography fontWeight={500}>{`$${product.price}`}</Typography>
			</Box>
		</Grid>
	);
};

export default ProductCard;