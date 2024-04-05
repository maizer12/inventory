import { lazy } from 'react';
const Home = lazy(() => import('../views/Home'));
const Products = lazy(() => import('../views/Products'));

const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/products',
		element: <Products />,
	},
];

export default routes;
