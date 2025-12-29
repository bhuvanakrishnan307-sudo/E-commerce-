import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const success = login(email, password);
    if (success) navigate("/checkout");
    else setError("Invalid credentials");
  };

  return (
    <div className="auth-container fade-in">
      <h2>Sign In</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
        <button>Login</button>
      </form>
      <p>
        New user? <Link to="/signup">Create account</Link>
      </p>
    </div>
  );
}
