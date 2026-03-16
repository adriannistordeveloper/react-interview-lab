import { useState, useCallback } from "react";

interface UserDTO {
  id: number;
  name: string;
}

// custom hook
const useUsers = () => {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:3001/users");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);

    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  return { users, loading, error, getUsers };
};

const Rendering3Exercise = () => {
  const { users, loading, error, getUsers } = useUsers();

  return (
    <>
      <button onClick={getUsers}>Get users</button>

      {loading && <p>Loading users...</p>}

      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Rendering3Exercise;