import Country from "./Country";

export default function Countries({countries}) {
    return(
        <div>
            {
                countries.map(country => (
                    <Country
                        key={country.cca3}
                        name={country.name.common}
                        capital={country.capital}
                    />
                ))
            }
        </div>
    );
}