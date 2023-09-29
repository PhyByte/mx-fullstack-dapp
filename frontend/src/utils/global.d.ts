import { ComponentWithAs, IconProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";

export declare global {
  type DappIcon = IconType | ReactNode | ComponentWithAs<"svg", IconProps>;
}
