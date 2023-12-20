import { useState, useEffect } from "react";
import axios from "axios";

import { Center, Wrap, WrapItem, Image, Box} from "@chakra-ui/react";

const TopCountry = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/api/countries")
        .then((response) => setCountries(response.data))
        .catch((error) => console.log(error));
    }, []);

    const handle = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/country/${id}`);
            const data = await response.json();
            console.log(data); // または取得したデータをどこかに保存する
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Wrap spacing="30px" justify="center">
                {countries.map((country) => 
                    <WrapItem onClick={() => handle(country.id)} key={country.id} cursor="pointer">
                        <Center key={country.id}
                            bgColor="tomato" 
                            w="180px" 
                            h="380px" 
                            mt="50px" 
                            borderRadius="2xl" 
                            position="relative"
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
                            <Box top="60px" position="absolute" color="white" fontWeight="bold">{country.name}</Box>
                        </Center>
                    </WrapItem>
                )}
            </Wrap>
        </>
    );
};

export default TopCountry;