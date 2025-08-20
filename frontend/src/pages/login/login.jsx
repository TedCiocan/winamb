import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import { useAuth } from "../../context/authContext";
const API_LOGIN = "http://localhost:5005/api/v1/auth/login";

export default function Login() {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");

    try {
      // Build payload supporting username OR email
      const payload = { identifier: form.identifier.trim(), password: form.password };

      const res = await fetch(API_LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.token) {
        throw new Error(data.error || `Login failed (HTTP ${res.status})`);
      }

      // Save token (and optional user) then navigate inside
      localStorage.setItem("token", data.token);
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      alert("Login successful! 🎉");
      login(data.token, data.user);
      navigate("/", { replace: true });
    } catch (e) {
      setErr(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const canSubmit =
    form.identifier.trim().length >= 3 && form.password.trim().length >= 6;

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <div className="brand-row">
          <span className="logo">🎵</span>
          <h1 className="title">Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="form" noValidate>
          <label className="field">
            <span>Username or Email</span>
            <input
              type="text"
              name="identifier"
              placeholder="yourname or you@example.com"
              value={form.identifier}
              onChange={handleChange}
              autoComplete="username"
              required
              minLength={3}
            />
          </label>

          <label className="field">
            <span>Password</span>
            <div className="pwd-wrap">
              <input
                type={showPwd ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                minLength={6}
              />
              <button
                type="button"
                className="ghost"
                onClick={() => setShowPwd((s) => !s)}
              >
                {showPwd ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          {err && <div className="alert error">{err}</div>}

          <button className="primary" type="submit" disabled={!canSubmit || loading}>
            {loading ? "Please wait…" : "Log in"}
          </button>

          <p className="hint">
            Don’t have an account?{" "}
            <Link className="link" to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
