import {Box, Heading, Stack, Input, Button, Text, Flex, Spacer, Tag} from "@chakra-ui/react";
import { useState } from "react";
import Header from "./Header"

const StoreItem = ({title, price, type}) => {
  return( 
    <Box p={3} borderRadius='lg' borderWidth='1px' boxShadow='inner'>
      <Flex alignItems="center" justifyContent="flex-start">
        <Heading size="md">{title}</Heading>
        <Spacer />
        <Text align="center">{type}</Text>
        <Spacer />
        <Tag bg='#659B5E' color='white'>{price}</Tag>
      </Flex>
    </Box>
    );
}

function Store({items}){
  const[filteredItems, setFilteredItems] = useState(items);

  return( 
    <Box p={2} > 
     <Header  title="Store parts"/>
      <Input boxShadow='2xl' onChange={e => {
        let f = items.filter((item) => 
          item.title.toLoWerCase().includes(e.target.value.toLowerCase()));
        setFilteredItems(f);
      }}
      
      placeholder="Search for..." mt={2} mb={6} />
      <Button bg='#E08D79'>Type</Button>
      <Button bg='#FFCB47'>Price Order</Button>
      <Stack >
      {items.map((item) =>{
        return (
            <StoreItem title={item.name} type={item.type} price={item.price}  />
        );
      })}
     </Stack>
    </Box>
  );
}

export default Store;