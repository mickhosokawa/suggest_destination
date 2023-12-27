import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Center, Wrap, WrapItem, Image, Box, Text} from "@chakra-ui/react";

const TopCountry = ({ topFiveCountries }) => {
    const navigate = useNavigate();

    // Get specificlly country name when the card is clicked.
    const handle = async (name) => {
        try {
            const response = await fetch(`http://localhost:8000/api/country/${name}`);
            const data = await response.json();
            console.log(data);
            navigate(`/country/${name}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Wrap spacing="30px" justify="center">
                {topFiveCountries.map((country) => 
                    <WrapItem onClick={() => handle(country.name)} key={country.id} cursor="pointer">
                        <Center key={country.id}
                            bgColor="tomato" 
                            w={{ base:"230px", md:"230px" }} 
                            h="380px" 
                            mt="50px" 
                            borderRadius="2xl" 
                            position="relative"
                        >
                            <Box
                                 position="absolute"
                                 top="0"
                                 w="100%"
                                 h="50%" // ここで高さをWrapItemの半分に設定
                                 overflow="hidden"
                                 borderRadius="2xl 2xl 0 0" // 上部の角丸
                            >
                                <Image 
                                    boxSize="100%"
                                    objectFit="contain"
                                    src="/storage/001.jpg"
                                    position="absolute"
                                    height="auto"
                                    top="0px"
                                    borderTopRadius="2xl"
                                    ></Image>
                                <Box
                                        position="absolute"
                                        top="0"
                                        right="0"
                                        bottom="0"
                                        left="0"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        color="white"
                                        fontWeight="bold"
                                        >
                                    <Text>{country.name}</Text>
                                </Box>
                            </Box>
                        </Center>
                    </WrapItem>
                )}
            </Wrap>
        </>
    );
};

export default TopCountry;