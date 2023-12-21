import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryPage = () => {
    const [country, setCountry] = useState(null);
    let { name } = useParams();

    useEffect(() => {
        // APIエンドポイントからデータを取得
        axios.get(`http://localhost:8000/api/country/${name}`)
          .then(response => {
            // レスポンスデータをstateに設定
            setCountry(response.data);
          })
          .catch(error => {
            console.error('Error fetching country data:', error);
          });
      }, [name]);

    return (
        <>
            <h1>これはCountryPageです。</h1>
            <h1>Country: {name}</h1>
        </>
    )
}
export default CountryPage;