import { HStack, Image, Link, Box, Wrap, WrapItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Marvel from "./assets/Marvel_Logo.svg.png";
import Characters from "./characters/characters";

function App() {
  const [character, setCharacter] = useState([]);

  const fetchingData = async () => {
    const randomNum = random();
    const data = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=4f1c0b87d2c3832319457bd835ad0225&hash=8c5681ec8d747cda59a34afbb90155d7&limit=40&offset=${randomNum}&hasDigitalIssue=false`
    );
    const res = await data.json();
    console.log(res);

    setCharacter(res.data.results);
  };

  const random = () => {
    return Math.floor(Math.random() * (500 - 1 + 1)) + 1;
  };

  console.log(character);

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <Box bg="#1e213a" w="100vw" h="100vh" overflowY="auto">
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
          Comics
        </Link>
      </HStack>

      <HStack px={[1, 30]}>
        <Wrap spacing="30px" p={"15px"}>
          {character.map((char) => {
            return (
              <Characters
                title={char.title}
                description={char.description}
                path={char.thumbnail.path}
                extension={char.thumbnail.extension}
                key={char.id}
              />
            );
          })}
        </Wrap>
      </HStack>
    </Box>
  );
}

export default App;
