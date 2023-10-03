import { ROUTES } from '@/utils/router/paths';
import { UnlockIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';
import {
  ExtensionLoginButton,
  LedgerLoginButton,
  WalletConnectLoginButton,
  WebWalletLoginButton,
} from '@multiversx/sdk-dapp/UI';
import { useState } from 'react';

const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Flex justify="center">
      <Button
        leftIcon={<UnlockIcon />}
        borderColor={'primary.200'}
        onClick={openModal}
        colorScheme="green"
        h="10"
      >
        Login
      </Button>

      <Modal isOpen={isOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>Choose Connection System</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="3" >
              <ExtensionLoginButton
                className="button button-primary wFull"
                callbackRoute={ROUTES.home}
              >
                DEFI Wallet
              </ExtensionLoginButton>

              <WebWalletLoginButton
                callbackRoute={ROUTES.home}
                className="button button-primary wFull"
              >
                {/* {translate(LOCALES.login.button.webWallet)} */}
              </WebWalletLoginButton>
              <WalletConnectLoginButton
                callbackRoute={ROUTES.home}
                className="button button-primary wFull"
                isWalletConnectV2={true}
                onModalCloses={() => {
                  console.log('WalletConnect modal closed');
                }}
              >
                {/* {translate(LOCALES.login.button.xPortal)} */}
              </WalletConnectLoginButton>
              <LedgerLoginButton
                callbackRoute={ROUTES.home}
                className="button button-primary wFull"
                onModalCloses={() => {
                  console.log('Ledger modal closed');
                }}
              >
                {/* {translate(LOCALES.login.button.ledger)} */}
              </LedgerLoginButton>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default LoginButton;
