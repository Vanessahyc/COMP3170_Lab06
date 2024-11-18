export default function Country({ url, countryName, capital, population, languages, currencies, area, region, continents, googleMaps}) {

    const languageList = languages ? Object.values(languages).join(',') : 'N/A';

    return(
        <div>
            <div>
                <div>
                    <img src={url} alt={countryName}  width="50" height="30" />
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
                    <span>{capital}</span>
                </p>
                <p>
                    <span>Population:</span>
                    <span>{population}</span>
                </p>
                <p>
                    <span>Languages:</span>
                    <span>{languageList}</span>
                </p>
                {/* <p>
                    <span>Currency:</span>
                    <span>{currencies}</span>
                </p>    */}
                <p>
                    <span>Area(mi"<sup>2</sup>"):</span>
                    <span>{area}</span>
                </p>
                <p>
                    <span>Subregion:</span>
                    <span>{region}</span>
                </p>
                <p>
                    <span>Continents:</span>
                    <span>{continents}</span>
                </p>
                <p>
                    <a href={googleMaps} target="_blank">Show on Google Maps</a>
                </p>
            </div>
        </div>
    )
}