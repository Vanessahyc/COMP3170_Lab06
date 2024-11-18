import Country from "./Country";

export default function Countries({countries}) {
    return(
        <div>
            {
                countries.map(country => (
                    <Country
                        key={country.cca3}
                        flags={country.flags.svg}
                        name={country.name.common}
                        capital={country.capital}
                        population={country.population}
                        languages={country.languages}
                        currencies={country.currencies}
                        area={country.area}
                        region={country.region}
                        continents={country.continents}
                        googleMaps={country.googleMaps}
                    />
                ))
            }
        </div>
    );
}