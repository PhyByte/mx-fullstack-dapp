import { Flex, HStack } from '@chakra-ui/react';
import { logout } from '@multiversx/sdk-dapp/utils';

export const UserInfos = () => {

  const handleLogout = () => {
    logout(`${window.location.origin}`);
  };

  return (
    <HStack spacing={3}>
      <Flex bgColor="blue.200">fdsfdsfsdf</Flex>
    </HStack>
  );
};
