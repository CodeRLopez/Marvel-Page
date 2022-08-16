import {
  Image,
  Box,
  Center,
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

function Comics(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box textAlign={"center"}>
      <Center py={12} mx={"10px"} bgOpacity="50%">
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          minW={["250px", "330px"]}
          boxShadow={"dark-lg"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          onClick={onOpen}
          h={[450]}
          justifyItems={"center"}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            mx={"15%"}
            pos={"relative"}
            height={"230px"}
          >
            <Image
              rounded={"lg"}
              height={250}
              width={"200px"}
              src={`${props.path}.${props.extension}`}
              boxShadow={"dark-lg"}
            />
          </Box>
          <Heading
            pt={20}
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
            color="#E9E9EB"
          >
            {props.title}
          </Heading>
        </Box>
      </Center>
      <>
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
          <ModalOverlay />
          <ModalContent bg="#171f30" borderRadius="2xl">
            <ModalHeader color="#d1d1dc">{props.title}</ModalHeader>
            <ModalCloseButton color="#d1d1dc" />
            <ModalBody>
              <VStack>
                <Image
                  rounded={"lg"}
                  height={250}
                  width={200}
                  src={`${props.path}.${props.extension}`}
                />
                <Text color="#d1d1dc" p={3} fontSize={"xl"}>
                  Description
                </Text>
                <Text color="#d1d1dc" textAlign="justify" fontSize={"xl"}>
                  {props.description}
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

export default Comics;
