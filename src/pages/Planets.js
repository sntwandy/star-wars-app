import getData from '../utils/getData';

const Worlds = async () => {
    const worlds = await getData();
    const view = `
    <section class="characters-section">
        <h1>Planets:</h1>
        <div class="character-container-section">
        ${worlds.results.map(world => `
            <article class=character-article>
                <figure>
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fswfanon%2Fimages%2Fd%2Fd8%2FForon.png%2Frevision%2Flatest%3Fcb%3D20141110224523&f=1&nofb=1" alt="" />
                </figure>
                <div class="article-content">
                    <h3>${world.name}</h3>
                    <span>Rotation: ${world.rotation_period}</span>
                    <span>Orbital: ${world.orbital_period}</span>
                    <span>Diameter: ${world.diameter}</span>
                    <span>Climate: ${world.climate}</span>
                    <span>Surface water: ${world.surface_water}</span>
                    <span>Population: ${world.population}</span>
                </div>
            </article>
        `).join('')}
    </div>
</section>
    `;
    return view;
}

export default Worlds;