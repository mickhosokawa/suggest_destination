import { useState, useEffect } from 'react';
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from './components/Search';
import Main from './components/Main';
import CountryPage from './components/CountryPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const [topCountries, setTopCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);

    // Get countries when this component is rendered.
    useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/api/countries")
        .then((response) => {
            setTopCountries(response.data.topCountries);
            setAllCountries(response.data.allCountries);
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/country/:name" element={<CountryPage />} />
                    <Route path="/" element={
                    <>
                    <Header />
                    <Search searchTargetCountries={allCountries} />
                    <Main topFiveCountries={topCountries} />
                    </>
                }/>
                </Routes>
            </Router>
        </ChakraProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);