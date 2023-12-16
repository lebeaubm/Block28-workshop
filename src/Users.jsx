import { Link } from 'react-router-dom'

  const UsersList = ({users}) => {
    return (
      <div>
        <h1>Users List</h1>
        <ol>
          {
            users.map((user) => {
              return (
                <li key={user.id}>
                  <Link to={`/users/${user.id}`}>
                    {user.name}
                  </Link>
                </li>
              )
            })
          }
        </ol>
      </div>
    )
  }

export default UsersList