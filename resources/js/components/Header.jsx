import { useState } from "react";
import { Box, Flex, Link, List, Input, Button } from "@chakra-ui/react";

const Header = () => {
    const [country, setCountry] = useState("");

    return (
        <>
            <Flex bg="tomato" w="100%" p={4} color="white" justify="space-between">
                <Box m="4">
                    <List href="/home">Logo</List>
                    <Input 
                        type="text" 
                        placeholder="Enter country name" 
                        defaultValue={country}
                        color="white"
                        bgColor="white"
                    />
                </Box>
                <Flex align="center">
                    <Box m="4"><Link href="/home">Home</Link></Box>
                    <Box m="4"><Link href="/countries">Countries</Link></Box>
                    <Box m="4"><Button bgColor="white" color="gray">Log in</Button></Box>
                </Flex>
            </Flex>
        </>
    );
};

export default Header;