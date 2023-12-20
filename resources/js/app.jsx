import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import Header from "./components/Header";
function App() {
    return (
        <ChakraProvider>
            <Header />
        </ChakraProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);