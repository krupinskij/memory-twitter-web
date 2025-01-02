import { SyntheticEvent } from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';
import { useMutation, useQueryClient } from 'react-query';

import API, { QUERY } from 'api';
import { User } from 'model';
import { formatProfilePicture } from 'utils/profilePicture';

type NavbarUserProps = {
  user: User;
  short: boolean;
};

const MenuUser = ({ user, short }: NavbarUserProps) => {
  const queryClient = useQueryClient();
  const { mutate: logout } = useMutation(API.logout, {
    onSuccess: () => queryClient.setQueryData(QUERY.CURRENT_USER, () => undefined),
  });

  const handleLogout = (event: SyntheticEvent) => {
    event.preventDefault();
    logout();
  };

  return (
    <a
      href={`https://twitter.com/${user.un}`}
      target="_blank"
      className="flex flex-row items-center p-2 gap-3 rounded-full hover:bg-shadowSecondary"
    >
      <img
        src={formatProfilePicture(user.pp, '_bigger')}
        alt={user.nm}
        className="w-12 h-12 rounded-full"
      />
      {!short && (
        <span className="text-base max-w-[10vw] hidden lg:!block">
          <div className="font-bold truncate">{user.nm}</div>
          <div className="text-textSecondary truncate">@{user.un}</div>
        </span>
      )}
      <div
        className="rounded-full p-2 hover:bg-shadowTertiary ml-2"
        onClick={(event) => handleLogout(event)}
      >
        <BsBoxArrowRight className="w-4 h-4" />
      </div>
    </a>
  );
};

export default MenuUser;
