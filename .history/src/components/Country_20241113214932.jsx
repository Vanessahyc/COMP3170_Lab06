export default function Country() {
    return(
        <div>
            <div>
                <div>
                    <img src={flags} alt={common}/>
                </div>
                <p>{common}</p>
            </div>
            <div>
                <p>
                    <span>Official name:</span>
                    <span>{common}</span>
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
                    <span>{languages}</span>
                </p>
                <p>
                    <span>Currency:</span>
                    <span>{currencies}</span>
                </p>
                <p>
                    <span>Languages:</span>
                    <span>{languages}</span>
                </p>    
                <p>
                    <span>Area(mi"<sup>2</sup>"):</span>
                    <span>{languages}</span>
                </p>
                <p>
                    <span>Subregion:</span>
                    <span>{languages}</span>
                </p>
                <p>
                    <span>Continents:</span>
                    <span>{languages}</span>
                </p>
                <p>
                    <a href={} target="_blank">Show on Google Maps</a>
                </p>
            </div>
        </div>
    )
}