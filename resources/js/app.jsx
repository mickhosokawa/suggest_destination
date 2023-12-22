import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from './components/Search';
import Main from './components/Main';
import CountryPage from './components/CountryPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/country/:name" element={<CountryPage />} />
                    <Route path="/" element={
                    <>
                    <Header />
                    <Search />
                    <Main />
                    </>
                }/>
                </Routes>
            </Router>
        </ChakraProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);