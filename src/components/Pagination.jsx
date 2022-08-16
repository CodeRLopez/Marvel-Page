import { Button, HStack, Icon, Box, VStack } from "@chakra-ui/react";
import { React, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

function Pagination() {
  const [page, setPage] = useState(1);
  return (
    <VStack>
      <Box color="#E9E9EB" fontFamily="bebas neue" fontSize={"22px"}>
        Page {page}
      </Box>
      <HStack>
        <Button
          isDisabled={true ? page <= 1 : false}
          onClick={() => setPage(page - 1)}
        >
          <Icon as={ArrowLeftIcon} />
        </Button>
        <Button onClick={() => setPage(1)}>1</Button>
        <Button onClick={() => setPage(2)}>2</Button>
        <Button onClick={() => setPage(3)}>3</Button>
        <Button onClick={() => setPage(4)}>4</Button>
        <Button onClick={() => setPage(5)}>5</Button>
        <Button onClick={() => setPage(6)}>6</Button>
        <Button onClick={() => setPage(7)}>7</Button>
        <Button onClick={() => setPage(8)}>8</Button>
        <Button onClick={() => setPage(9)}>9</Button>
        <Button onClick={() => setPage(10)}>10</Button>
        <Button
          isDisabled={true ? page >= 10 : false}
          onClick={() => setPage(page + 1)}
        >
          <Icon as={ArrowRightIcon} />
        </Button>
      </HStack>
    </VStack>
  );
}

export default Pagination;
