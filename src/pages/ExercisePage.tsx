import { useParams } from "react-router-dom";
import { exercises } from "../data/exercises";

export default function ExercisePage() {
  const { id } = useParams<{id: string}>();

  const exercise = exercises.find((ex) => ex.id === id);

  if (!exercise) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Exercise not found</h2>
      </div>
    );
  }

  const ExerciseComponent = exercise.component;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{exercise.title}</h2>

      <div style={{ marginTop: "20px" }}>
        <h3>Instructions</h3>
        <p>{exercise.description}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Code View (Phase 2)</h3>
        <div style={{ marginTop: "12px" }}>
          <ExerciseComponent />
        </div>
      </div>
    </div>
  );
}
