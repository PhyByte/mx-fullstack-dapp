import {
  HiDatabase,
  HiLockOpen,
  HiOutlineDatabase,
  HiOutlineLockOpen,
  HiOutlineViewBoards,
  HiViewBoards,
} from "react-icons/hi";

function path(root: string, subLink: string) {
  return `${root}${subLink}`;
}

export const ROUTES = {
  home: path("", "/"),
  overview: path("", "/overview"),
  unlock: path("", "/unlock"),
};

interface LinkItemProps {
  path: string;
  title: string;
  icon: DappIcon;
  activeIcon: DappIcon;
  authenticatedRoute?: boolean;
  enabled: boolean;
}

export const routes: Array<LinkItemProps> = [
  {
    path: ROUTES.home,
    title: "Home",
    icon: HiOutlineViewBoards,
    authenticatedRoute: false,
    activeIcon: HiViewBoards,
    enabled: true,
  },
  {
    path: ROUTES.overview,
    title: "Overview",
    icon: HiOutlineDatabase,
    authenticatedRoute: false,
    activeIcon: HiDatabase,
    enabled: true,
  },
  {
    path: ROUTES.unlock,
    title: "Unlock",
    icon: HiOutlineLockOpen,
    authenticatedRoute: false,
    activeIcon: HiLockOpen,
    enabled: true,
  },
];
