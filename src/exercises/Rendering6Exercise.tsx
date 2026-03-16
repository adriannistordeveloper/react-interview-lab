import { useState } from "react";

type AddUserFormProps = {
  name: string;
  age: string;
  onNameChange: (value: string) => void;
  onAgeChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

const AddUserForm = ({
  name,
  age,
  onNameChange,
  onAgeChange,
  onSubmit
}: AddUserFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>

      <div>
        <input
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => onAgeChange(e.target.value)}
        />
      </div>

      <button type="submit">Add user</button>
    </form>
  );
};

const AddUserContainer = () => {
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
    <AddUserForm
      name={name}
      age={age}
      onNameChange={setName}
      onAgeChange={setAge}
      onSubmit={handleSubmit}
    />
  );
};

export default AddUserContainer;