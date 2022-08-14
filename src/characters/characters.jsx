import {
  Image,
  Box,
  Center,
  Stack,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Marvel from "../assets/Marvel_Logo.svg.png";

function Characters() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          boxShadow={"dark-lg"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          onClick={onOpen}
        >
          <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}>
            <Image rounded={"lg"} height={200} width={282} src={Marvel} />
          </Box>
          <Stack pt={2} align={"center"}>
            <Heading
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={500}
              color="#E9E9EB"
            >
              Hero Name
            </Heading>
          </Stack>
        </Box>
      </Center>
      <>
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
          <ModalOverlay />
          <ModalContent bg="#171f30" borderRadius="2xl">
            <ModalHeader color="#d1d1dc">Character Name</ModalHeader>
            <ModalCloseButton color="#d1d1dc" />
            <ModalBody>
              <VStack>
                <Image rounded={"lg"} height={200} width={282} src={Marvel} />
                <Text color="#d1d1dc" p={3}>
                  Description
                </Text>
                <Text color="#d1d1dc" textAlign="justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, in beatae! Expedita architecto modi tempore veniam
                  suscipit, vel corrupti sed laudantium, autem maxime
                  praesentium placeat tempora omnis ipsa, amet saepe. Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit.
                </Text>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
}

export default Characters;
