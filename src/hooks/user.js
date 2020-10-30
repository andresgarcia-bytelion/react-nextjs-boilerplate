export const UserName = (user) => user && `${user.nameFirst} ${user.nameLast}`;

export const UserNameId = (user) => (
  user && `${user.nameFirst.toLowerCase()}-${user.nameLast.toLowerCase()}`
);
