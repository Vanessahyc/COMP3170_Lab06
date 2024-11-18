export default function Country({ url, countryName, officialName, capital, population, languages, currencies, area, subregion, continents, borders, googleMaps}) {

    const languageList = languages ? Object.values(languages).join(', ') : 'N/A';
    const currencyList = currencies ? Object.values(currencies).map( currency => `${currency.name} (${currency.symbol})`) : 'N/A';
    const borderList = borders ? borders.map( border => border ).join(', ') : 'N/A';

    return(
        <div className="main_container">
            <div className="country_header">
                <div>
                    <img src={url} alt={countryName} height="50" />
                </div>
                <p>{countryName}</p>
            </div>
            <div className="country_info">
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
                    <span>{subregion}</span>
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