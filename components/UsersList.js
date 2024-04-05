import { useMemo } from 'react';

function UsersList({ users, startingLetter }) {
  console.log('component rerenders')

  const filteredUsers = useMemo(()=>{
    return users.filter(({name})=> {return name[0]=== startingLetter})
  },[startingLetter])

  return (
    <ul>
      {filteredUsers.map((user)=>{
        return (
          <li key={user.id}>{user.name}</li>
        )
      })}
    </ul>
  );
}

export default UsersList;
