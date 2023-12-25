import { useState } from "react";
import { Box, Center, Input, Container, Flex, Image, HStack, Text } from "@chakra-ui/react";

const Search = ({ searchTargetCountries }) => {
    const [destination, setDestination] = useState("");
    const [result, setResult] = useState([]);

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        searchCountry(destination);
    };

    const searchCountry = (inputValue) => {

        if(inputValue == "") {
            setResult([]);
            return;
        }
        const result = searchTargetCountries.filter((country) => {
            return country.name.toLowerCase().includes(inputValue.toLowerCase());
        });
        setResult(result);
        console.log(result);
    };

    return (
        <>
        <Box w="100%">
                <Center>
                    <form onSubmit={handleSearch} w="200%">
                        <Input
                            type="text"
                            placeholder="Where is your next destination?"
                            color="tomato"
                            _placeholder={{ opacity:"0.6", color: 'inherit' }}
                            focusBorderColor="tomato"
                            value={destination}
                            onChange={handleDestinationChange}
                            mt="10"
                            size="lg"
                        />
                    </form>
                </Center>
                {result.length > 0 && (
                    <Box mt="4">
                        <ul>
                            {result.map((country) => (
                                <Container maxW="container.lg">
                                <Flex mt="10" maxW="100%">
                                    <Box>
                                    <Image src="/storage/001.jpg" maxW="lg" maxH="100%"/>
                                    </Box>
                                    <Box spacing="auto" w="100%" p="4" m="auto">
                                    <HStack mt="auto">
                                        <Box mr="10" w="154px"><Text fontSize="x-large">Country</Text></Box>
                                        <Box><Text fontSize="xx-large">{country.name}</Text></Box>
                                    </HStack>
                                    <HStack mt="10">
                                        <Box mr="10" w="154px"><Text fontSize="x-large">Capital</Text></Box>
                                        <Box><Text fontSize="xx-large">{country.capital}</Text></Box>
                                    </HStack>
                                    <HStack mt="10">
                                        <Box mr="10" w="154px"><Text fontSize="x-large">Population</Text></Box>
                                        <Box><Text fontSize="xx-large">{country.population}</Text></Box>
                                    </HStack>
                                    <HStack mt="10">
                                        <Box mr="10" w="154px"><Text fontSize="x-large">Location</Text></Box>
                                        <Box><Text fontSize="xx-large">{country.location}</Text></Box>
                                    </HStack>
                                    </Box>
                                </Flex>
                                </Container>
                            ))}
                        </ul>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default Search;