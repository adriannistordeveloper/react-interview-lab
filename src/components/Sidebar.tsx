import { Link } from "react-router-dom";
import { exercises } from "../data/exercises";

interface Props {
    isOpen: boolean;
}

const Sidebar = ({isOpen}: Props) => {

    if(!isOpen) return null;

    return (
        <div style={{width: "250px", borderRight: "1px solid #ddd", padding: "20px"}}>
            <h3>Exercise</h3>
            {exercises.map((ex) => (
                <div key={ex.id} style={{}}>
                    <Link to={`/exercise/${ex.id}`}>{ex.title}</Link>
                </div>
            ))}
        </div>
    )
}

export default Sidebar;