import { Box, Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts/ShopLayout';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Custom404 = ( props: any ) => {
	return (
		<ShopLayout
			title={'Página no encontrada'}
			pageDescription={'No se encontró la página'}
		>
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				height='calc(100vh - 200px)'
				sx={{ flexDirection:{ xs:'column', sm:'row' }}}
			>
				<Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>
					404 |
				</Typography>
				<Typography marginLeft={2}>
					Ups! no hay nada para mostrar aquí
				</Typography>
			</Box>
		</ShopLayout>
	);
};

export default Custom404;