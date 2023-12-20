import { Center, Wrap, WrapItem, Image, Box, Link } from "@chakra-ui/react";

const TopCountry = () => {
    return (
        <>
            <Wrap spacing="30px" justify="center">
                <Link href="/japan">
                    <WrapItem>
                        <Center 
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
                            <Box top="60px" position="absolute" color="white" fontWeight="bold">Japan</Box>
                        </Center>
                    </WrapItem>
                </Link>
                <Link href="/south_korea">
                    <WrapItem>
                        <Center 
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
                            <Box top="60px" position="absolute" color="white" fontWeight="bold">South Korea</Box>
                        </Center>
                    </WrapItem>
                </Link>
                <Link href="/thailand">
                    <WrapItem>
                        <Center 
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
                            <Box top="60px" position="absolute" color="white" fontWeight="bold">Thailand</Box>
                        </Center>
                    </WrapItem>
                </Link>
                <Link href="/united_states">
                    <WrapItem>
                        <Center 
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
                            <Box top="60px" position="absolute" color="white" fontWeight="bold">United States</Box>
                        </Center>
                    </WrapItem>
                </Link>
                <Link href="/australia">
                    <WrapItem>
                        <Center 
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
                            <Box top="60px" position="absolute" color="white" fontWeight="bold">Australia</Box>
                        </Center>
                    </WrapItem>
                </Link>
            </Wrap>
        </>
    );
};

export default TopCountry;