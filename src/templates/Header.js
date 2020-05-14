const Header = () => {
    const view = `
        <nav class="header-nav">
            <div class="header-title-home">
                <a href="/">Star Wars | App</a>
            </div>
            <ul class="header-ul">
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="">API</a>
                </li>
                <li>
                    <a href="/characters">Characters</a>
                </li>
                <li>
                    <a href="/worlds">Worlds</a>
                </li>
            </ul>
        </nav>
    `;
    return view;
}

export default Header;