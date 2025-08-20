import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

const API_BASE = "http://localhost:5005/api";

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validEmail = /^\S+@\S+\.\S+$/.test(form.email);
  const canSubmit =
    form.username.trim().length >= 3 &&
    validEmail &&
    form.password.length >= 6 &&
    form.password === form.confirm;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setErr("");
    setMsg("");

    try {
      const res = await fetch(`${API_BASE}/v1/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username.trim(),
          email: form.email.trim(),
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Sign up failed");
      }

      setMsg(data.message || "Account created! Please log in.");
      // go to login after success
      navigate("/login", { replace: true });
    } catch (e) {
      setErr(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="signup-wrap">
      <div className="signup-card">
        <div className="brand-row">
          <span className="logo">🎵</span>
          <h1 className="title">Create your account</h1>
        </div>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span>Username</span>
            <input
              type="text"
              name="username"
              placeholder="yourname"
              value={form.username}
              onChange={handleChange}
              autoComplete="username"
              required
              minLength={3}
            />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
            {!validEmail && form.email.length > 0 && (
              <small className="hint error">Please enter a valid email.</small>
            )}
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
                autoComplete="new-password"
                required
                minLength={6}
              />
              <button
                type="button"
                className="ghost"
                onClick={() => setShowPwd((s) => !s)}
                aria-label={showPwd ? "Hide password" : "Show password"}
              >
                {showPwd ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          <label className="field">
            <span>Confirm password</span>
            <input
              type={showPwd ? "text" : "password"}
              name="confirm"
              placeholder="••••••••"
              value={form.confirm}
              onChange={handleChange}
              autoComplete="new-password"
              required
              minLength={6}
            />
            {form.confirm.length > 0 && form.password !== form.confirm && (
              <small className="hint error">Passwords do not match.</small>
            )}
          </label>

          {err && <div className="alert error">{err}</div>}
          {msg && <div className="alert ok">{msg}</div>}

          <button className="primary" type="submit" disabled={!canSubmit || loading}>
            {loading ? "Please wait…" : "Register"}
          </button>

          <p className="hint">
            Already have an account?{" "}
            <Link className="link" to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
