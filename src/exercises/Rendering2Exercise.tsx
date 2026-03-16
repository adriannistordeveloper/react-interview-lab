import { useState } from "react";

interface userDTO {
  id: number;
  name: string;
}

const Rendering2Exercise = () => {
  const [users, setUsers] = useState<userDTO[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  const getUsers = async () => {
    const data = await fetch("http://localhost:3001/users");
    const users = await data.json();
    setUsers(users);
  };

  // IF version
  let message = null;
  if (showMessage) {
    message = <p>Users fetched successfully</p>;
  }

  return (
    <div style={{ display: "block" }}>
      <button onClick={getUsers}>Get users</button>

      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle message
      </button>

      {/* IF version */}
      {message}

      {/* && version */}
      {showMessage && <p>This message uses &&</p>}

      {/* Ternary version */}
      {showMessage ? <p>Showing users</p> : <p>Users hidden</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rendering2Exercise;