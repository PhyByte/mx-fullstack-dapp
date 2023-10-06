import { IconButton, LayoutProps, Tooltip } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import { BiPowerOff } from 'react-icons/bi';

export interface DisConnectButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  w?: LayoutProps['w'];
}

export default function LogoutButton({
  onClick,
  w = '10',
}: DisConnectButtonProps) {
  return (
    <Tooltip label="Disconnect">
      <IconButton
        aria-label="fdfdfdf"
        icon={<BiPowerOff color="red" size={30} strokeWidth={1} />}
        boxShadow="md"
        variant="outline"
        onClick={onClick}
        borderColor="red.500"
        _hover={{
          bg: 'red.100',
        }}
        w={w}
        h="10"
      />
    </Tooltip>
  );
}
