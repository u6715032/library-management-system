import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <h1>📚 Library Management System</h1>
        <div>
          <Link to="/search">Search</Link>
          <Link to="/history">History</Link>
          <Link to="/">Logout</Link>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}
