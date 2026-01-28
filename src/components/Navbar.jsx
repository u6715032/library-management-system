import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  if (!role) return null;

  return (
    <nav style={{ padding: 10, background: "#222" }}>
      {role === "customer" && (
        <>
          <Link to="/search">Search</Link>{" | "}
          <Link to="/history">My Borrows</Link>{" | "}
          <Link to="/fines">My Fines</Link>
        </>
      )}

      {role === "staff" && (
        <>
          <Link to="/approve">Approve</Link>{" | "}
          <Link to="/return">Return</Link>{" | "}
          <Link to="/fine">Fine</Link>
        </>
      )}

      {role === "admin" && (
        <>
          <Link to="/books">Books</Link>{" | "}
          <Link to="/copies">Copies</Link>{" | "}
          <Link to="/users">Users</Link>{" | "}
          <Link to="/reports">Reports</Link>
        </>
      )}

      {" | "}
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
