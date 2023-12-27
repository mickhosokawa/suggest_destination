import { Box, Flex, Text, HStack, Image } from "@chakra-ui/react";

const TopFive = ({ country }) => {
    const places = country.topfive;
    console.log(country)

    return (
        <>
            <Box mt="20">
                <Text fontSize="xx-large">Top 5 popular places in {country.name}</Text>
            </Box>
            {places.map((place) => (
                <Flex key={place.id} mt="10" direction={{ base:"column", md:"row" }}>
                    <Box>
                        <Image src="/storage/001.jpg" maxW={{ base:"100%", md:"lg" }} maxH="100%"/>
                    </Box>
                    <Box w="100%" position="relative">
                        <Box textAlign={{ base:"center", md:"left" }} ml="5" mb="5">
                            <Text fontSize="x-large">{place.place_name}</Text>
                        </Box>
                        <Box ml="5">
                            <Text textAlign={{base:"unset", md:"left"}}>{country.outline}</Text>
                        </Box>
                    </Box>
                </Flex>
            ))}
        </>
    );
};

export default TopFive;