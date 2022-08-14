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
// import React, { useState } from "react";

function Characters(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box textAlign={"center"} justifyItems={"center"}>
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          minW={"330px"}
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
              width={200}
              src={`${props.path}.${props.extension}`}
              boxShadow={"dark-lg"}
            />
          </Box>
          <Stack pt={16} align={"center"}>
            <Heading
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={500}
              color="#E9E9EB"
            >
              {props.title}
            </Heading>
          </Stack>
        </Box>
      </Center>
      <>
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
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
                <Text color="#d1d1dc" p={3}>
                  Description
                </Text>
                <Text color="#d1d1dc" textAlign="justify">
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

export default Characters;
