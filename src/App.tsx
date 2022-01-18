import { Box, Container, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Example1 from "./examples/Example1"
import Example2 from "./examples/Example2"
import Example3 from "./examples/Example3"

export const App = () => {
  return (
    <>
      <ColorModeSwitcher />
      <Container mt='10'>
        <Heading>React Audio 📢</Heading>

        <VStack mt='10' spacing='5' alignItems={'flex-start'} >

          <Box p='5' border='1px solid' borderColor='gray.300' borderRadius={'2xl'} w='100%' >

            <Text fontSize={'2xl'} mb='5'>Example 1</Text>
            <Example1 />
          </Box>

          <Box p='5' border='1px solid' borderColor='gray.300' borderRadius={'2xl'} w='100%' >
            <Text fontSize={'2xl'} mb='5'>Example 2</Text>

            <Example2 />
          </Box>

          <Box p='5' border='1px solid' borderColor='gray.300' borderRadius={'2xl'} w='100%' >
            <Text fontSize={'2xl'} mb='5'>Example 3</Text>

            <Example3 />
          </Box>

        </VStack>
      </Container>
    </>
  )
}
