import { routes } from '@/utils/router/paths';
import { useLocation } from 'react-router-dom';
import { getIsActivePath } from '@/utils/router/utils';

export function useGetTitle() {
  const { pathname } = useLocation();
  const activeRoute = routes.find((route) =>
    getIsActivePath(route.path, pathname),
  );

  return {
    title: activeRoute?.title ?? '',
  };
}

