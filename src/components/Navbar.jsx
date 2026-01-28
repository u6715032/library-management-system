import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  if (!role) return null; // Hide on login page

  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>📚 Library</span>

      <div style={styles.links}>
        {role === "customer" && (
          <>
            <Link to="/search">Search Books</Link>
            <Link to="/history">My History</Link>
          </>
        )}

        {role === "staff" && (
          <>
            <Link to="/approve">Approve Borrow</Link>
            <Link to="/return">Return Books</Link>
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/books">Books</Link>
            <Link to="/copies">Copies</Link>
            <Link to="/users">Users</Link>
            <Link to="/reports">Reports</Link>
          </>
        )}
      </div>

      <button onClick={logout} style={styles.logout}>
        Logout
      </button>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    background: "#111",
    color: "#fff",
  },
  logo: {
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  logout: {
    background: "#ff4d4d",
    border: "none",
    padding: "6px 12px",
    color: "#fff",
    cursor: "pointer",
  },
};
