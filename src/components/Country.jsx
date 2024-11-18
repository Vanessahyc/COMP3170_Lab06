export default function Country({ url, countryName, officialName, capital, population, languages, currencies, area, subregion, continents, borders, maps}) {

    const languageList = languages ? Object.values(languages).join(', ') : 'N/A';
    const currencyList = currencies ? Object.values(currencies).map( currency => `${currency.name} (${currency.symbol})`) : 'N/A';
    const borderList = borders ? borders.map( border => border ).join(', ') : 'N/A';
    const subRegion = subregion ? Object.values(subregion) : 'N/A';

    return(
        <div className="main_container">
            <div className="country_header">
                <div className="flag_container">
                    <img src={url} alt={countryName} />
                </div>
                <p>{countryName}</p>
            </div>
            <div className="country_info">
                <p>
                    <span className="title">Official name: </span>
                    <span>{officialName}</span>
                </p>
                <p>
                    <span className="title">Capital: </span>
                    <span>{capital}</span>
                </p>
                <p>
                    <span className="title">Population: </span>
                    <span>{population}</span>
                </p>
                <p>
                    <span className="title">Languages: </span>
                    <span>{languageList}</span>
                </p>
                <p>
                    <span className="title">Currency: </span>
                    <span>{currencyList}</span>
                </p>   
                <p>
                    <span className="title">Area(mi"<sup>2</sup>"): </span>
                    <span>{area}</span>
                </p>
                <p>
                    <span className="title">Subregion: </span>
                    <span>{subRegion}</span>
                </p>
                <p>
                    <span className="title">Continents: </span>
                    <span>{continents}</span>
                </p>
                <p>
                    <span className="title">Borders: </span>
                    <span>{borderList}</span>
                </p>
                <p>
                    <a href={maps} target="_blank">Show on Google Maps</a>
                </p>
            </div>
        </div>
    )
}