import { useState } from "react";
import { Box, Center, Input } from "@chakra-ui/react";

const Search = ({ searchTargetCountries }) => {
    const [destination, setDestitnation] = useState("");
    
    const getDestination = (e) => {
        setDestitnation(e.target.value);
    }

    const searchCountry = () => {

    };

    return (
        <>
        <Box w="100%">
            <Center>
                <Input
                    type="text"
                    placeholder="where is your next destination?"
                    color="tomato"
                    _placeholder={{ opacity:"0.6", color: 'inherit' }}
                    focusBorderColor="tomato"
                    value={destination}
                    onChange={getDestination}
                    mt="10"
                    w="50%"
                    size="lg"
                >
                </Input>

            </Center>
        </Box>
        </>
    );
};

export default Search;