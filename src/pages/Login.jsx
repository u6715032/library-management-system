import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    localStorage.setItem("role", role);

    if (role === "customer") navigate("/search");
    if (role === "staff") navigate("/approve");
    if (role === "admin") navigate("/books");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>📚 Library System</h1>
        <p className="subtitle">Select a role to enter the system.</p>

        <button onClick={() => handleLogin("customer")}>
          Login as Customer
        </button>

        <button onClick={() => handleLogin("staff")}>
          Login as Staff
        </button>

        <button onClick={() => handleLogin("admin")}>
          Login as Admin
        </button>
      </div>
    </div>
  );
}

export default Login;
