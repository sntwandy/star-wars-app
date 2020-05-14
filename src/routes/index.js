import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Main from '../pages/Main';

const router = () => {
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');

    header.innerHTML = Header();
    main.innerHTML = Main();
    footer.innerHTML = Footer();
}

export default router;