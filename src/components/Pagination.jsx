import { Button, HStack, Box, VStack } from "@chakra-ui/react";
import { React, useState } from "react";

function Pagination({ setOffset }) {
  const [page, setPage] = useState(0);
  const pages = [0, 1, 2, 3, 4];

  return (
    <VStack>
      <Box color="#E9E9EB" fontFamily="bebas neue" fontSize={"22px"}>
        Page {page + 1}
      </Box>
      <HStack>
        {pages.map((p) => {
          return (
            <Button
              key={p}
              onClick={() => {
                setOffset(p * 15);
                setPage(p);
              }}
            >
              {p + 1}
            </Button>
          );
        })}
      </HStack>
    </VStack>
  );
}

export default Pagination;
