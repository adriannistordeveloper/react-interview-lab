import { Sun, Moon } from "lucide-react";

interface Props {
  toggleTheme: () => void;
  theme: string;
}

const Navbar = ({ toggleTheme, theme }: Props) => {

    const iconColor =
        theme === "light"
            ? "var(--text-color)"
            : "#f5c542";

    return (
        <nav
            style={{
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
                borderBottom: "1px solid var(--border-color)",
                background: "var(--nav-bg)",
                color: "var(--text-color)"
            }}
        >
        <span style={{ fontWeight: 600 }}>
            React Interview Lab
        </span>

        <button
            onClick={toggleTheme}
            style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            border: "1px solid var(--border-color)",
            background: "var(--bg-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
            }}
        >
            {theme === "light" ? (
            <Moon size={18} color={iconColor} />
            ) : (
            <Sun size={18} color={iconColor} />
            )}
        </button>
        </nav>
    );
};

export default Navbar;