const About = () => {
    const view = `
        <div class="main-about-container">
            <div class="about-title">
                <h1>Why was this application built?</h1>
            </div>
            <div class="about-content">
                <p>It is built for an educational purpose, resources like the API are the property of swapi.dev, to them we owe the consumption of the data shown on this website.</p>
                <span>We hope you like our representation.</span>
            </div>
            <div class="about-resources">
                <h3>If you want to access the source code of this project, visit my github profile:</h3>
                <div class="about-github">
                    <a href="https://github.com/sntwandy/star-wars-app" target="_blank">
                        <figure>
                            <img src="https://i.imgur.com/767xGvX.png" alt="" />
                        </figure>
                        Click here
                    </a>
                </div>
            </div>
        </div>
    `;
    return view;
}

export default About;