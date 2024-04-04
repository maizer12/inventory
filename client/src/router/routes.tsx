import { lazy } from 'react';
const Home = lazy(() => import('../views/Home'));

const routes = [
	{
		path: '/',
		element: <Home />,
	},
];

export default routes;
