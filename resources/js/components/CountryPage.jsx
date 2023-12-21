import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryPage = () => {
    const [country, setCountry] = useState(null);
    let { name } = useParams();

    // Get country data from API end point.
    // set state on response data.
    useEffect(() => {
        axios.get(`http://localhost:8000/api/country/${name}`)
          .then(response => {
            setCountry(response.data);
          })
          .catch(error => {
            console.error('Error fetching country data:', error);
          });
      }, [name]);

    return (
        <>
            <h1>This is CountryPage.</h1>
            <h1>Country: {name}</h1>
        </>
    )
}
export default CountryPage;