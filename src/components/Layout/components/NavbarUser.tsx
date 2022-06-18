import { User } from 'model';

type NavbarUserProps = {
  user: User;
};

const NavbarUser = ({ user }: NavbarUserProps) => {
  return (
    <a
      href={`https://twitter.com/${user.username}`}
      target="_blank"
      className="flex flex-row items-center p-4 h-full gap-3 highlight"
    >
      <span className="flex justify-center items-center text-md font-normal">{user.name}</span>
      <img src={user.profilePicture} alt="avatar" className="w-7 h-7 rounded-full" />
    </a>
  );
};

export default NavbarUser;
