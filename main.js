// main.js
import { Home } from './src/pages/Home.js';
import { Character } from './src/pages/Character.js';
import Header from './src/template/Header.js';

const routes = {
    '/': Home,
    '/:id': Character,
};

const resolveRoute = (route) => {
    if (route.match(/^\/[a-z0-9]+$/i)) {
        return '/:id';
    }
    return '/';
};

const router = async () => {
    const header = document.getElementById('header');
    const app = document.getElementById('app');

    header.innerHTML = await Header();

    const hash = window.location.hash.slice(1).toLowerCase() || '/';
    const route = resolveRoute(hash);
    const renderComponent = routes[route];

    if (renderComponent) {
        app.innerHTML = await renderComponent();
    } else {
        app.innerHTML = '<h2>Error 404: Page Not Found</h2>';
    }
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
