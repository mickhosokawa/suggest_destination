import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from './components/Search';
import Main from './components/Main';
function App() {
    return (
        <ChakraProvider>
            <Header />
            <Search />
            <Main />
        </ChakraProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);