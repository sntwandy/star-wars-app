import getData from '../utils/getData';

const Characters = async () => {
    const characters = await getData();
    const view = `
        <section class="characters-section">
            <h1>Characters:</h1>
            <div class="character-container-section">
            ${characters.results.map(character => `
                <article class=character-article>
                    <figure>
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffreevector.co%2Fwp-content%2Fuploads%2F2013%2F07%2F13910-question-mark-inside-square1.png&f=1&nofb=1" alt="" />
                    </figure>
                    <div class="article-content">
                        <h3>${character.name}</h3>
                        <span>Height: ${character.height}</span>
                        <span>Mass: ${character.mass}</span>
                        <span>Hair color: ${character.hair_color}</span>
                        <span>Skin color: ${character.skin_color}</span>
                        <span>Mass: ${character.mass}</span>
                        <span>Eye color: ${character.eye_color}</span>
                        <span>Birth year: ${character.birth_year}</span>
                        <span>Films: ${character.films.length}</span>
                    </div>
                </article>
            `).join('')}
            </div>
        </section>
    `;
    return view;
}

export default Characters;