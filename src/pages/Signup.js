import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Signup() {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    location: "",
    password: ""
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    signup(form);
    navigate("/checkout");
  };

  return (
    <div className="auth-container fade-in">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" required onChange={handleChange} />
        <input name="email" placeholder="Email" required onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <input name="location" placeholder="City / Location" required onChange={handleChange} />
        <textarea name="address" placeholder="Delivery Address" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button>Create Account</button>
      </form>
    </div>
  );
}
