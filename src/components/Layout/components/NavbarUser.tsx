import { User } from 'model';

type NavbarUserProps = {
  user: User;
};

const NavbarUser = ({ user }: NavbarUserProps) => {
  return (
    <a
      href={`https://twitter.com/${user.un}`}
      target="_blank"
      className="flex flex-row items-center p-4 h-full gap-3 highlight"
    >
      <span className="flex justify-center items-center text-md font-normal">{user.nm}</span>
      <img
        src={`https://pbs.twimg.com/profile_images/${user.pp.replace('$', '_normal')}`}
        alt={user.nm}
        className="w-7 h-7 rounded-full"
      />
    </a>
  );
};

export default NavbarUser;
