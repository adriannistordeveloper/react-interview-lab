interface Props {
  toggleTheme: () => void;
}

const Navbar = ({ toggleTheme }: Props) => {
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
          padding: "6px 14px",
          borderRadius: "6px",
          border: "1px solid var(--border-color)",
          background: "var(--bg-color)",
          color: "var(--text-color)",
          cursor: "pointer"
        }}
      >
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;