import getHash from '../utils/getHash';

const APIPeople = 'https://swapi.dev/api/people/';
const APIPlanet = 'https://swapi.dev/api/planets/';

const getData = async () => {
    const hash = await getHash();
    try {
        if (hash === 'characters'){
            const response = await fetch(`${APIPeople}`);
            const data = await response.json();
            return data;
        } else {
            const response = await fetch(`${APIPlanet}`);
            const data = await response.json();
            return data;
        }
    }
    catch(error) {
        console.error(`Fetch error: ${error}`);
    }
}

export default getData;