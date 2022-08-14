import { HStack, Image, Link, Box } from "@chakra-ui/react";
import Marvel from "./assets/Marvel_Logo.svg.png";
import Characters from "./characters/characters";

function App() {
  return (
    <Box bg="#1e213a" w="100vw" h="100vh">
      <HStack
        justifyContent="center"
        boxShadow="dark-lg"
        p="2"
        rounded="2xl"
        bg="#1e213a"
      >
        <Image src={Marvel} alt="Marvel Logo" w={[75, 120]} />
        <Link
          pt="2"
          pl="10"
          fontSize={[17, 40]}
          color="#E9E9EB"
          fontFamily="bebas neue"
        >
          Characters
        </Link>
      </HStack>
      <Characters />
    </Box>
  );
}

export default App;
