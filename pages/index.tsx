import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts/ShopLayout';

const Home: NextPage = () => {
	return (
		<ShopLayout
			title={'Poly-Shop'}
			pageDescription={'Encuentra los mejores productos de ropa americana.'}
		>
			<Typography variant='h1' component='h1'>
Tienda
			</Typography>
			<Typography variant='h2' sx={{ mb: 1 }}>
Todos los productos
			</Typography>
		</ShopLayout>
	);
};

export default Home;
