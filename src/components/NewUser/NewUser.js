import { useState } from "react/cjs/react.development";
import React from "react";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

import UserForm from "./UserForm";
import "./NewUser.css";

const NewUser = ({ onAddUser }) => {
  const [isValid, setIsValid] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')


  const onSaveUserData = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };

    onAddUser(userData);
  };

  const isValidInput = (message) => {
    if(message){
      setIsValid(false);
      setErrorMessage(message);
      return
    }
    setIsValid(true)
    setErrorMessage('')
  };

  if (isValid) {
    return (
      <div>
        <Card className={"new-user"}>
          <UserForm onAddItem={onSaveUserData} onValidForm={isValidInput}/>
        </Card>
      </div>
    )
  }
  return (
    <div>
      <Modal onValid={isValidInput} errorMessage={ errorMessage }></Modal>
    </div>
  );
};

export default NewUser;
