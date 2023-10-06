import { Box, Text, VStack } from "@chakra-ui/react";
import { MVX_NETWORK, getApiUrl, getChainId } from "../../utils/mvx/constants";

const Home = () => {
  return (
    <Box>
      <VStack>
        <Text> Network: {MVX_NETWORK} </Text>
        <Text> ChainId: {getChainId()} </Text>
        <Text> API: {getApiUrl()}</Text>
      </VStack>
    </Box>
  );
};

export default Home;
