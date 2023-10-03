
import { ROUTES, routes } from '@/router/paths';
import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { AuthenticatedRoutesWrapper } from '@multiversx/sdk-dapp/wrappers';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery('(min-width: 1200px)');

  if (isDesktop && isOpen) {
    onClose();
  }

  return (
    <>
      {/* <TopBar onOpen={onOpen} /> */}
      <Box
        // backgroundImage={APP_IMAGES.mainBackground}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        overflowY="auto"
        transition="ease-in-out"
        transitionDuration=".3s"
      >
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${ROUTES.unlock}`}
        >
          <Box maxW="8xl" mx="auto">
            <Outlet />
          </Box>
        </AuthenticatedRoutesWrapper>
      </Box>
    </>
  );
};

export default Layout;
