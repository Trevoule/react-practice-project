import React from "react";
import Card from "../../UI/Card";

import UserForm from "./UserForm";
import "./NewUser.css"

const NewUser = ({ onAddUser }) => {

  const onSaveUserData = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };

    onAddUser(userData);
  };

  return (
    <div>
      <Card className={"new-user"}>
        <UserForm onAddItem={onSaveUserData} />
      </Card>
    </div>
  );
};

export default NewUser;
