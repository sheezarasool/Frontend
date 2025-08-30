import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Logo from "../components/Logo";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPwd, setShowPwd] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [serverMsg, setServerMsg] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    setServerError("");
  }, [form, captchaToken]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ 
      ...f, 
      [name]: type === "checkbox" ? checked : value 
    }));
  };

  const validate = () => {
    const e = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    if (!captchaToken) e.recaptcha = "Please complete reCAPTCHA";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setBusy(true);
    setServerError("");
    setServerMsg("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        {
          email: form.email.trim(),
          password: form.password,
          rememberMe: form.rememberMe,
          recaptchaToken: captchaToken,
        },
        { withCredentials: true }
      );

      if (res.data?.success) {
        setServerMsg("Login successful. Redirecting...");
        setTimeout(() => navigate("/dashboard"), 1200);
      }
    } catch (err) {
      const msg = err?.response?.data?.message || "Login failed. Please try again.";
      setServerError(msg);
      // reset captcha on server error
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
        setCaptchaToken("");
      }
    } finally {
      setBusy(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/${provider}`;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl">
        {/* Brand */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex-shrink-0 flex items-center">
            <Logo/>
          </div>

          <div className="mt-2 text-sm text-slate-500">
            <span className="font-medium text-slate-900 border-b-2 border-slate-900">Login</span>
            <span className="ml-6"><Link to="/signup" className="hover:text-slate-700">Sign Up</Link></span>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Social Login Options */}
            <div className="space-y-3">
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => handleSocialLogin('google')}
                  className="flex-1 flex items-center justify-center px-4 py-2.5 border border-slate-300 rounded-xl bg-white text-slate-700 hover:bg-slate-50 transition"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin('github')}
                  className="flex-1 flex items-center justify-center px-4 py-2.5 border border-slate-300 rounded-xl bg-white text-slate-700 hover:bg-slate-50 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin('linkedin')}
                  className="flex-1 flex items-center justify-center px-4 py-2.5 border border-slate-300 rounded-xl bg-white text-slate-700 hover:bg-slate-50 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="#0077B5" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-slate-500">or</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-slate-800"
                placeholder="you@company.com"
                autoComplete="email"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-700">Password *</label>
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="text-xs text-slate-600 hover:text-slate-900"
                >
                  {showPwd ? "Hide" : "Show"}
                </button>
              </div>
              <input
                name="password"
                type={showPwd ? "text" : "password"}
                value={form.password}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-slate-800"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={form.rememberMe}
                  onChange={onChange}
                  className="h-4 w-4 text-slate-800 focus:ring-slate-800 border-slate-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-slate-700">
                  Remember Me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-slate-600 hover:text-slate-900">
                Forgot Password?
              </Link>
            </div>

            {/* reCAPTCHA */}
            <div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                onChange={(token) => setCaptchaToken(token || "")}
              />
              {errors.recaptcha && (
                <p className="mt-2 text-xs text-red-600">{errors.recaptcha}</p>
              )}
            </div>

            {serverError && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {serverError}
              </div>
            )}
            {serverMsg && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                {serverMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={busy}
              className={`w-full rounded-xl bg-slate-800 px-6 py-3 font-medium text-white shadow-md hover:bg-slate-900 transition disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {busy ? "Signing In..." : "Login"}
            </button>

            <p className="text-xs text-slate-500 text-center">
              By logging in, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </form>
        </div>

        <p className="mt-4 text-center text-sm text-slate-600">
          Don't have an account? <Link to="/signup" className="text-slate-900 font-medium">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}