import { UserNameAvatar, UserNameWrapper, UserWrapper } from './UserTicket.styled';

interface Props {
  name: string;
  avatar: string;
}

export const UserTicketComponent = ({ name, avatar }: Props) => {
  return (
    <UserWrapper>
      <UserNameWrapper>{name}</UserNameWrapper>
      <UserNameAvatar src={avatar} alt='user-image' />
    </UserWrapper>
  );
};
