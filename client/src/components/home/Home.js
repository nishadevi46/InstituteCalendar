
import {  Button, Flex, VStack } from "@chakra-ui/react";
const Home=()=>{
    return(
        <>
         <Flex
      align="center"
      justify="center"
      height="100vh"
      backgroundColor="gray.100"
    >
        <VStack spacing={4}
          width="300px"
          borderRadius="md"
          padding={4}
          backgroundColor="white" >
         <Button colorScheme="teal" variant="outline" width="100%">
           Add an Event
          </Button>
          <Button colorScheme="teal" variant="outline" width="100%">
            Get an Event by month
          </Button>
          <Button colorScheme="teal" variant="outline" width="100%">
            Get an Event by week
          </Button>
          <Button colorScheme="teal" variant="outline" width="100%">
           Delete event
          </Button>
          <Button colorScheme="teal" variant="outline" width="100%">
           Update an event
          </Button>
        </VStack>
    </Flex>
       </>
    )
}
export default Home