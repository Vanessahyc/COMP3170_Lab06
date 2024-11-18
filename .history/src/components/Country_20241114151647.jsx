export default function Country({ url, commonName, officialName, capital, population, languages, currencies, area, region, continents, borders, googleMaps}) {

    const languageList = languages ? Object.values(languages).join(', ') : 'N/A';
    const currencyList = currencies ? Object.values(currencies).map( currency => `${currency.name} (${currency.symbol})`) : 'N/A';
    const borderList = borders ? borders.map( border => border ).join(', ') : 'N/A';

    return(
        <div>
            <div>
                <div>
                    <img src={url} alt={commonName}  width="50" height="30" />
                </div>
                <p>{commonName}</p>
            </div>
            <div>
                <p>
                    <span>Official name: </span>
                    <span>{officialName}</span>
                </p>
                <p>
                    <span>Capital: </span>
                    <span>{capital}</span>
                </p>
                <p>
                    <span>Population: </span>
                    <span>{population}</span>
                </p>
                <p>
                    <span>Languages: </span>
                    <span>{languageList}</span>
                </p>
                <p>
                    <span>Currency: </span>
                    <span>{currencyList}</span>
                </p>   
                <p>
                    <span>Area(mi"<sup>2</sup>"): </span>
                    <span>{area}</span>
                </p>
                <p>
                    <span>Subregion: </span>
                    <span>{region}</span>
                </p>
                <p>
                    <span>Continents: </span>
                    <span>{continents}</span>
                </p>
                <p>
                    <span>Borders: </span>
                    <span>{borderList}</span>
                </p>
                <p>
                    <a href={googleMaps} target="_blank">Show on Google Maps</a>
                </p>
            </div>
        </div>
    )
}