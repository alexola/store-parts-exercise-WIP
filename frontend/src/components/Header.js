import { Box, Heading } from "@chakra-ui/react";

function Header({title}) {
  return (
    <Box p={4} >
      <Heading size='3xl'>{title}</Heading>
    </Box>
  )
}

export default Header;