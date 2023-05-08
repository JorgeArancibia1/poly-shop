import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../ui/Navbar';
import { SideMenu } from '../ui/SideMenu';
interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
}

export const ShopLayout: FC<PropsWithChildren<Props>> = ( { children, title, pageDescription, imageFullUrl } ) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={pageDescription} />
				<meta name="og:title" content={title} />
				<meta name="og:description" content={pageDescription} />		{
					imageFullUrl && (
						<meta name="og:image" content={imageFullUrl} />
					)
				}

			</Head>

			<nav>
				<Navbar algo={undefined} />
			</nav>

			<SideMenu />

			<main style={{ margin:'80px auto', maxWidth:'1440px', padding:'0 30px' }}>
				{children}
			</main>

			{/* Footer */}
			<footer>
				{/* TODO: FOOTER */}
			</footer>
		</>
	);
};