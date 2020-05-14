import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Main from '../pages/Main';
import Characters from '../pages/Characters';
import Error404 from '../pages/Error404';
import About from '../pages/About';
import Planets from '../pages/Planets';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Main,
    '/about': About,
    '/characters': Characters,
    '/planets': Planets
}

const router = async () => {
    const header = null || document.getElementById('header');
    const main = null || document.getElementById('main');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header();
    footer.innerHTML = await Footer();

    let hash = getHash();
    let route =  await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;

    main.innerHTML = await render();

    if (render == Error404){
        footer.classList.add('footer-error');
    } else {
        footer.classList.remove('footer-error');
    }
}

export default router;