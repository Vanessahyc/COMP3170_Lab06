import Country from "./Country";

export default function Countries({countries}) {
    return(
        <div>
            {
                countries.map(country => (
                    <Country
                    
                    />
                ))
            }
        </div>
    );
}