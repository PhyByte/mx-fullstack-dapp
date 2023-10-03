import LoginButton from '@/components/buttons/LoginButton';
import LogoutButton from '@/components/buttons/LogoutButton';
import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { useGetAccount, useGetAccountInfo } from '@multiversx/sdk-dapp/hooks';
import { logout } from '@multiversx/sdk-dapp/utils';

export const UserDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery('(min-width: 1200px)');
  const { address } = useGetAccount();

  const account = useGetAccount();
  const accountInfo = useGetAccountInfo();
  console.log('account', account);
  console.log('accountInfo', accountInfo);

  const handleLogout = () => {
    logout(`${window.location.origin}`);
  };

  if (!address) {
    return <LoginButton />;
  }

  return (
    <>
      {isDesktop ? (
        <Flex
          bgColor={'blue.500'}
          alignItems="center"
          p={4}
          onClick={onOpen}
          cursor="pointer"
          _hover={{ opacity: 0.8 }}
          transition="opacity 0.3s ease-in-out"
          borderRadius={10}
        >
          <Box flex="1" mr="2">
            <Avatar bg="primary.400" size="sm" />
          </Box>

          <Text color="white" fontWeight="bold" fontSize={15}>
            {`${address.slice(0, 7)}...${address.slice(52, 62)}`}
          </Text>
        </Flex>
      ) : (
        <>
          <Avatar
            onClick={onOpen}
            bg="blue.400"
            size="md"
            cursor="pointer"
            _hover={{ opacity: 0.6 }}
            transition="opacity 0.3s ease-in-out"
          />
        </>
      )}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader p="2">
            <HStack justify={'center'} p="2" mr="6"></HStack>
            <DrawerCloseButton h="8" />
          </DrawerHeader>
          <DrawerBody mt="1" color="primary.500"></DrawerBody>

          <DrawerFooter>
            <LogoutButton onClick={handleLogout} w="full" />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
