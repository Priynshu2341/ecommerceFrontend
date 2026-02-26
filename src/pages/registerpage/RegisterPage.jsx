import { useNavigate } from "react-router-dom";
import { registerApi } from "../../api/loginApi";
import { useState } from "react";

export function RegisterPage() {

  const navigate = useNavigate(); // ✅ FIX 1

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault(); 

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      await registerApi({ email, password, firstname, lastname });

    
      navigate("/login");

    } catch (err) {

      console.error("Register failed:", err);

     
      setError(
        err?.response?.data?.message ||
        "Registration failed. Try again."
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">

      <form className="login-card" onSubmit={handleRegister}>

        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <button
          className="register-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <button
          type="button"
          className="homepage-btn"
          onClick={() => navigate("/")}
        >
          View Products Instead
        </button>

      </form>

    </div>
  );
}