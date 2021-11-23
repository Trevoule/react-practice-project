import "./UserItem.css"

const UserItem = ({ user }) => {
  return (
    <div className="user-item">
      <p>
        {user.username} ({user.age} years old)
      </p>
    </div>
  );
};

export default UserItem;
