 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login/loginpage.css";
import { loginApi } from "../../api/loginApi";
import { useAuth } from "../../auth/AuthContext";

export function LoginPage(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    
    try{
      const data = await loginApi({email , password});
      console.log("login Success", data);
      login(data.token);
      navigate("/")
      
    } catch (err){
      console.log("Login Failed", err)
      setError("Invalid username or password");
    }
    
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className = "login-btn"type="submit">Login</button>

        <button className="register-btn" type="button"
        onClick={()=> navigate("/register")}>
          Register
        </button>

        <button className="homepage-btn" type="button"
        onClick={()=>navigate("/")}>
          View Products Instead
        </button>
      </form>
    </div>
  );


}