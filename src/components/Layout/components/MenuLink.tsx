import { IconType } from 'react-icons';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

type RouteLinkProps = {
  icon: IconType;
  activeIcon: IconType;
  label: string;
  href: string;
  subhref?: string;
  short: boolean;
};

const RouteLink = ({
  icon: Icon,
  activeIcon: ActiveIcon,
  label,
  href,
  subhref,
  short,
}: RouteLinkProps) => {
  const resolved = useResolvedPath(href);
  const match = useMatch({ path: resolved.pathname, end: true });
  const subresolved = useResolvedPath(subhref || '$%&');
  const submatch = useMatch({ path: subresolved.pathname, end: true });

  const isActive = match || submatch;

  return (
    <div className="p-1">
      <Link to={href}>
        <div className="flex p-3 rounded-full hover:bg-shadowSecondary w-max font-arial h-12 items-center">
          {isActive ? <ActiveIcon className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
          {!short && <div className="text-xl mx-4 hidden lg:block">{label}</div>}
        </div>
      </Link>
    </div>
  );
};

export default RouteLink;
