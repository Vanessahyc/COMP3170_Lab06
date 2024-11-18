import Country from "./Country";

export default function Countries({countries}) {
    return(
        <div className="countries_container">
            {
                countries.map(country => (
                    <Country
                        key={country.cca3}
                        url={country.flags.svg}
                        countryName={country.name.common}
                        officialName={country.name.official}
                        capital={country.capital}
                        population={country.population}
                        languages={country.languages}
                        currencies={country.currencies}
                        area={country.area}
                        subregion={country.subregion}
                        continents={country.continents}
                        borders={country.borders}
                        maps={country.maps.googleMaps}
                    />
                ))
            }
        </div>
    );
}