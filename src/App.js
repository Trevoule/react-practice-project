import React, {useState} from "react";

import NewUser from "./components/NewUser/NewUser";
import Users from "./components/Users/Users";


function App() {
  const [users, setUsers] = useState("");

  const addUser = (user) => {
    if (!user) {
      return;
    }
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <NewUser onAddUser={addUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
