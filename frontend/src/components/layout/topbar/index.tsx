import {
  Flex,
  FlexProps,
  Heading,
  Spacer,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { UserDrawer } from "../userDrawer/userDrawer";
import { useGetTitle } from "../utils";

interface TopBarProps extends FlexProps {
  onOpen: () => void;
}

const TopBar = ({ onOpen, ...rest }: TopBarProps) => {
  const [isLarge] = useMediaQuery("(min-width: 960px)");
  const [isDesktop] = useMediaQuery("(min-width: 1200px)");

  const { title } = useGetTitle();

  return (
    <Flex
      px={{ base: 4, md: 6 }}
      py={{ base: 4, md: 6 }}
      pr={{ base: 4, lg: 12 }}
      height={{ base: 16, lg: 24 }}
      alignItems="center"
      bg={"white"}
      borderBottomWidth="2px"
      borderColor={useColorModeValue("primary.400", "primary.500")}
      transition="ease-in-out"
      transitionDuration=".3s"
      {...rest}
    >
      <Spacer display={isLarge ? "none" : "flex"} />
      <Heading as="h4">{title}</Heading>
      <Spacer display={isLarge ? "none" : "flex"} />
      <Spacer display={{ base: "flex", md: "flex" }} />
      <UserDrawer />
    </Flex>
  );
};

export default TopBar;
