import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>📚 Library System</h2>
        <p>Select a role to enter the system.</p>

        <Link to="/search">
          <button>Login as Customer</button>
        </Link>

        <Link to="/search">
          <button>Login as Staff</button>
        </Link>

        <Link to="/search">
          <button>Login as Admin</button>
        </Link>
      </div>
    </div>
  );
}
