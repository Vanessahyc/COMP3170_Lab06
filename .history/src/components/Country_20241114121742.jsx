export default function Country({ url, countryName, capital, population, languages, currencies, area, region, continents, googleMaps }) {
    // Convert `languages` and `currencies` objects to strings for display
    const languageList = languages ? Object.values(languages).join(', ') : 'N/A';
    const currencyList = currencies ? Object.values(currencies).map(currency => currency.name).join(', ') : 'N/A';
    
    return (
        <div>
            <div>
                <div>
                    <img src={url} alt={`Flag of ${countryName}`} />
                </div>
                <p>{countryName}</p>
            </div>
            <div>
                <p>
                    <span>Official name:</span>
                    <span>{countryName}</span>
                </p>
                <p>
                    <span>Capital:</span>
                    <span>{capital ? capital[0] : 'N/A'}</span> {/* Capital is often an array */}
                </p>
                <p>
                    <span>Population:</span>
                    <span>{population}</span>
                </p>
                <p>
                    <span>Languages:</span>
                    <span>{languageList}</span>
                </p>
                <p>
                    <span>Currency:</span>
                    <span>{currencyList}</span>
                </p>   
                <p>
                    <span>Area (mi²):</span>
                    <span>{area}</span>
                </p>
                <p>
                    <span>Subregion:</span>
                    <span>{region}</span>
                </p>
                <p>
                    <span>Continents:</span>
                    <span>{continents ? continents[0] : 'N/A'}</span> {/* Continent might be an array */}
                </p>
                <p>
                    <a href={googleMaps} target="_blank" rel="noopener noreferrer">Show on Google Maps</a>
                </p>
            </div>
        </div>
    );
}
