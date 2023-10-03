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
  overview: path("", "/overview")
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
    authenticatedRoute: true,
    activeIcon: HiDatabase,
    enabled: true,
  },
];
