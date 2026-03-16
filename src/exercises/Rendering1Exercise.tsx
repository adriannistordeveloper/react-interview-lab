import { useEffect, useState } from "react";

type userDTO = {
  name: string;
  id: number;
};

const FetchUsersOnMountWithAPI = () => {

  const [users, setUsers] = useState<userDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const controller = new AbortController();

    const getUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        // artificial delay
        await new Promise(resolve => setTimeout(resolve, 3000));

        const response = await fetch(
          "http://localhost:3001/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);

      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    getUsers();

    // cleanup function
    return () => {
      controller.abort();
    };

  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <p>List of users:</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchUsersOnMountWithAPI;