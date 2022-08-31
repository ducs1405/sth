import Home from '../pages/Home.js';
import Product from '../pages/Product.js';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product/:productId', component: Product },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
