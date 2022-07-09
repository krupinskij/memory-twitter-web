import { IconType } from 'react-icons';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

type RouteLinkProps = {
  icon: IconType;
  activeIcon: IconType;
  label: string;
  href: string;
};

const RouteLink = ({ icon: Icon, activeIcon: ActiveIcon, label, href }: RouteLinkProps) => {
  const resolved = useResolvedPath(href);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="p-1">
      <Link to={href}>
        <div className="flex p-3 rounded-full hover:bg-GREEN_WHITE w-max font-arial">
          {match ? <ActiveIcon className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
          <div className="text-xl ml-5 mr-4">{label}</div>
        </div>
      </Link>
    </div>
  );
};

export default RouteLink;
