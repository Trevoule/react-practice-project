import { useState } from "react/cjs/react.development";
import styles from "./UserForm.module.css";
import Button from "../../UI/Button";

const UserForm = ({ onAddItem }) => {
  const [inputtedUsername, setInputtedUsername] = useState("");
  const [inputtedAge, setInputtedAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const usernameChangeHandler = (e) => {
    const input = e.target.value;
    if (input.trim().length > 0) {
      setIsValid(true);
    }
    setInputtedUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    const input = e.target.value;
    if (input.trim().length > 0) {
      setIsValid(true);
    }
    setInputtedAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      inputtedUsername.trim().length === 0 &&
      inputtedAge.trim().length === 0
    ) {
      setIsValid(false);
      return;
    }
    
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
      <div className={styles["new-user__controls"]}>
        <div
          className={`${styles["new-user__control"]} ${
            !isValid && styles.invalid
          }`}
        >
          <label>Username</label>
          <input
            type="text"
            onChange={usernameChangeHandler}
            value={inputtedUsername}
          />
        </div>
        <div
          className={`${styles["new-user__control"]} ${
            !isValid && styles.invalid
          }`}
        >
          <label>Age(Years)</label>
          <input
            type="number"
            onChange={ageChangeHandler}
            value={inputtedAge}
          />
        </div>
        <Button type="submit">Add User</Button>
      </div>
    </form>
  );
};

export default UserForm;
