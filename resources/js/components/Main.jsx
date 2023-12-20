import { Box, Center, Input } from "@chakra-ui/react";
import TopCountry from "./TopCountry";

const Main = () => {
    return (
        <>
            <Box>
                <Box>
                    <Center mt="36" fontSize="3xl" fontWeight="bold">Popular countries in the world</Center>
                </Box>

                <Box>
                    <TopCountry />
                </Box>
            </Box>
        </>
    );
}

export default Main;