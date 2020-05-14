import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Main from '../pages/Main';
import Characters from '../pages/Characters';
import Error404 from '../pages/Error404';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Main,
    '/characters': Characters
}

const router = async () => {
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');

    header.innerHTML = await Header();
    footer.innerHTML = await Footer();
    debugger;
    let hash = getHash();
    let route =  await resolveRoutes(hash);

    let render = routes[route] ? routes[route] : Error404;
    main.innerHTML = await render();
}

export default router;