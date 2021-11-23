import UserItem from "./UserItem";
import "./Users.css"


const Users = ({ users }) => {
  if (users.length === 0) {
    return <h2 className="users">No users</h2>;
  }

  if (users.length > 0) {
    let usersContent = users.map((user) => (
      <UserItem user={user} key={user.id} />
    ));
      return <ul className="users">{usersContent}</ul>
  }
};

export default Users;
