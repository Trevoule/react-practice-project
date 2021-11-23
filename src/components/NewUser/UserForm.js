import { useState } from "react/cjs/react.development";
import "./UserForm.css"

const UserForm = ({ onAddItem }) => {
  const [inputtedUsername, setInputtedUsername] = useState("");
  const [inputtedAge, setInputtedAge] = useState("");

  const usernameChangeHandler = (e) => {
    setInputtedUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setInputtedAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      username: inputtedUsername,
      age: inputtedAge,
    };

    onAddItem(userData);

    setInputtedUsername("");
    setInputtedAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-user__controls">
        <div className="new-user__control">
          <label>Username</label>
          <input
            type="text"
            onChange={usernameChangeHandler}
            value={inputtedUsername}
          />
        </div>
        <div className="new-user__control">
          <label>Age(Years)</label>
          <input
            type="number"
            onChange={ageChangeHandler}
            value={inputtedAge}
          />
        </div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
