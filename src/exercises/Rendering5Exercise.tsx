import { useState } from "react";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !age) return;

    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        age: Number(age)
      })
    });

    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <input
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <button type="submit">Add user</button>
    </form>
  );
};

export default AddUserForm;