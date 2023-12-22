import { Box, Text } from "@chakra-ui/react";

const CountryOutline = ({ outline }) => {
    return (
        <>
            <Box>
                <Text fontSize="x-large">OUTLINE</Text>
            </Box>
            <Box>
                <Text fontSize="x-large">{outline}</Text>
            </Box>
        </>
    )
};

export default CountryOutline;