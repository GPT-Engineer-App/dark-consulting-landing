// Complete the Index page component for a web consulting company landing page
import { Box, Container, Flex, Heading, Text, Button, VStack, Input, Textarea, useColorModeValue, Image } from "@chakra-ui/react";
import { FaEnvelope, FaMobileAlt, FaLaptopCode } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.800", "gray.900");
  const textColor = useColorModeValue("gray.100", "gray.200");

  return (
    <Box bg={bgColor} color={textColor} minHeight="100vh">
      <Container maxW="container.xl">
        <Flex direction="column" align="center" justify="center" pt={10}>
          <Heading as="h1" size="2xl" mb={6}>
            Expert Web Consulting Services
          </Heading>
          <Text fontSize="xl" mb={12}>
            We build modern, high-performance web applications.
          </Text>
          <Image src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTM2ODM5Njh8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" mb={10} />
          <VStack spacing={8} align="stretch" mb={20}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Flex align="center" mb={2}>
                <FaLaptopCode size="24px" />
                <Heading as="h3" size="lg" ml={2}>
                  Custom Web Applications
                </Heading>
              </Flex>
              <Text mt={4}>Tailored solutions that fit your unique business needs. From e-commerce to internal tools.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Flex align="center" mb={2}>
                <FaMobileAlt size="24px" />
                <Heading as="h3" size="lg" ml={2}>
                  Responsive Design
                </Heading>
              </Flex>
              <Text mt={4}>Ensure your web app looks great on all devices, from desktops to mobile phones.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Flex align="center" mb={2}>
                <FaEnvelope size="24px" />
                <Heading as="h3" size="lg" ml={2}>
                  SEO and Marketing
                </Heading>
              </Flex>
              <Text mt={4}>Optimize your web presence with our SEO services to get the best out of your app.</Text>
            </Box>
          </VStack>
          <Flex direction="column" align="center" justify="center" p={10} shadow="xl" borderRadius="lg">
            <Heading as="h2" size="xl" mb={6}>
              Contact Us
            </Heading>
            <VStack spacing={5} w="100%">
              <Input placeholder="Your Name" />
              <Input placeholder="Email Address" />
              <Textarea placeholder="Your Message" />
              <Button colorScheme="blue" size="lg">
                Send Message
              </Button>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
