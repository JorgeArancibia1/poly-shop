import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import {
	AppBar,
	Badge,
	Box,
	Button,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from '@mui/material';
import NextLink from 'next/link';

interface INavbarProps {
	algo: any
}
export const Navbar: React.FunctionComponent<INavbarProps> = () => {
	return (
		<AppBar>
			<Toolbar>
				<>
					<NextLink href='/' passHref>
						<Link display='flex' alignItems='center'></Link>
					</NextLink>
					<Typography color='primary' variant='h6'>
						{' '}
						Poly |{' '}
					</Typography>
					<Typography color='primary' sx={{ ml:0.5 }}>
						{' '}
						Shop{' '}
					</Typography>
					<Box flex={1} />

					<Box sx={{ display:{ xs:'none', sm:'block' }}}>
						<NextLink href='/category/men' passHref>
							<Link>
								<Button> Hombres </Button>
							</Link>
						</NextLink>
						<NextLink href='/category/women' passHref>
							<Link>
								<Button> Mujeres </Button>
							</Link>
						</NextLink>
						<NextLink href='/category/kids ' passHref>
							<Link>
								<Button> Niños </Button>
							</Link>
						</NextLink>
					</Box>

					<Box flex={1} />

					{/* BUSCADOR */}
					<IconButton>
						<SearchOutlined />
					</IconButton>

					{/* CARRITO */}
					<NextLink href=' / cart ' passHref>
						<Link>
							<IconButton>
								<Badge badgeContent={2} color='secondary'>
									<ShoppingCartOutlined />
								</Badge>
							</IconButton>
						</Link>
					</NextLink>

					<Button>Menú</Button>
				</>
			</Toolbar>
		</AppBar>
	);
};