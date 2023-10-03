
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { MVX_NETWORK, getApiUrl, getChainId } from '../../utils/mvx/constants';


const Home = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/config");
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const printEnv = () => {
    console.log("ENV: ", import.meta.env);
  };


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
