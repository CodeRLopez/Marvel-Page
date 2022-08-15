import { HStack, Image, Box, Flex, Square, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import SearchIcon from "./assets/searvh-icon.png";
import Marvel from "./assets/Marvel_Logo.svg.png";
import Comics from "./Comics/comics";

function App() {
  const [comic, setComic] = useState([]);

  const fetchingData = async () => {
    const data = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=4f1c0b87d2c3832319457bd835ad0225&hash=8c5681ec8d747cda59a34afbb90155d7&hasDigitalIssue=false&limit=40`
    );
    const res = await data.json();
    setComic(res.data.results);
  };

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
        <Flex direction={"row"}>
          <Image src={Marvel} alt="Marvel Logo" w={[75, 140]} />
          <Text
            bg={"none"}
            fontFamily="bebas neue"
            fontSize={["25px", "50px"]}
            color="#E9E9EB"
            mt={"-5px"}
            ml={"20px"}
            h={"30px"}
          >
            Comics
          </Text>
          <Square ml={"2%"}>
            <Image src={SearchIcon} boxSize={["15px", "26px"]} />
          </Square>
        </Flex>
      </HStack>

      <HStack>
        <Flex spacing="30px" p={"15px"} justifyContent={"center"} wrap={"wrap"}>
          {comic.map((co) => {
            return (
              <Comics
                title={co.title}
                description={co.description}
                path={co.thumbnail.path}
                extension={co.thumbnail.extension}
                key={co.id}
              />
            );
          })}
        </Flex>
      </HStack>
    </Box>
  );
}

export default App;
