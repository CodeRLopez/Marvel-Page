import {
  HStack,
  Image,
  Box,
  Flex,
  Square,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import SearchIcon from "./assets/searvh-icon.png";
import Marvel from "./assets/Marvel_Logo.svg.png";
import Comics from "./Comics/comics";

function App() {
  const [data, setData] = useState([]);
  const [comic, setComic] = useState([]);
  const [display, setDisplay] = useState(false);

  const fetchingData = async () => {
    const data = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=4f1c0b87d2c3832319457bd835ad0225&hash=8c5681ec8d747cda59a34afbb90155d7&hasDigitalIssue=false&limit=40&titleStartsWith=${comic}`
    );
    const res = await data.json();
    setData(res.data.results);
  };

  const initialData = async () => {
    const data = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=4f1c0b87d2c3832319457bd835ad0225&hash=8c5681ec8d747cda59a34afbb90155d7&hasDigitalIssue=false&limit=40`
    );
    const res = await data.json();
    setData(res.data.results);
  };

  useEffect(() => {
    initialData();
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
        <Flex direction={"row"} w={"35%"} justifyContent={"center"}>
          <Image src={Marvel} alt="Marvel Logo" w={[75, 125]} />
          <Text
            bg={"none"}
            fontFamily="bebas neue"
            fontSize={["25px", "50px"]}
            color="#E9E9EB"
            mt={"-9px"}
            ml={"20px"}
            h={"30px"}
            display={display ? "none" : "flex"}
          >
            Comics
          </Text>
          <Square
            ml={"2%"}
            display={display ? "none" : "flex"}
            onClick={() => setDisplay(!display)}
            _hover={"none"}
            as="button"
          >
            <Image src={SearchIcon} boxSize={["15px", "26px"]} />
          </Square>

          <InputGroup ml={"15px"} display={!display ? "none" : "flex"}>
            <Input
              fontSize={"1.5rem"}
              placeholder="Search comics"
              mt={"8px"}
              fontFamily="bebas neue"
              color="#E9E9EB"
              onChange={(e) => setComic(e.target.value)}
            />
            <InputRightElement w="7rem" mt={"8px"}>
              <Button
                ml={"18%"}
                bg={"transparent"}
                onClick={() => {
                  setDisplay(!display);
                  fetchingData();
                }}
              >
                <Image src={SearchIcon} boxSize={["15px", "26px"]} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </HStack>

      <HStack>
        <Flex spacing="30px" p={"15px"} justifyContent={"center"} wrap={"wrap"}>
          {data.map((co) => {
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
