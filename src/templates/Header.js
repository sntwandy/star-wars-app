const Header = () => {
    const view = `
        <nav class="header-nav">
            <div class="header-title-home">
                <a href="/">
                    <figure>
                        <img src="https://i.imgur.com/1jkkNOI.png" alt="" />
                    </figure>
                </a>
            </div>
            <ul class="header-ul">
                <li>
                    <a href="#/about">About</a>
                </li>
                <li>
                    <a href="https://swapi.dev/" target="_blank">API</a>
                </li>
                <li>
                    <a href="#/characters">Characters</a>
                </li>
                <li>
                    <a href="#/planets">Planets</a>
                </li>
            </ul>
        </nav>
    `;
    return view;
}

export default Header;