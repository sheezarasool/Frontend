import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Logo from "../components/Logo";

// --- Utility: basic password strength scoring ---
function scorePassword(pw) {
  let score = 0;
  if (!pw) return score;
  const rules = [
    /.{8,}/, // length >= 8
    /[a-z]/, // lowercase
    /[A-Z]/, // uppercase
    /\d/,    // number
    /[^A-Za-z0-9]/, // symbol
  ];
  rules.forEach((r) => r.test(pw) && (score += 1));
  // small bonus for length >= 12
  if (pw.length >= 12) score += 1;
  return Math.min(score, 6);
}

const strengthLabels = ["Too weak", "Very weak", "Weak", "Okay", "Good", "Strong", "Very strong"]; // index = score

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [serverMsg, setServerMsg] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  const pwdScore = useMemo(() => scorePassword(form.password), [form.password]);

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY; // put your site key in .env

  useEffect(() => {
    setServerError("");
  }, [form, captchaToken]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (pwdScore < 4)
      e.password = "Password must be at least 8 chars and include upper, lower, number, and symbol.";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
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
        `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
        {
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          password: form.password,
          recaptchaToken: captchaToken,
          appBaseUrl: window.location.origin, // used for email verification link
        },
        { withCredentials: true }
      );

      if (res.data?.requiresEmailVerification) {
        setServerMsg(
          `We\'ve sent a verification email to ${form.email}. Please open the link to activate your account.`
        );
      } else {
        setServerMsg("Account created successfully. Redirecting to login...");
        setTimeout(() => navigate("/login"), 1200);
      }
    } catch (err) {
      const msg = err?.response?.data?.message || "Registration failed. Please try again.";
      setServerError(msg);
      // reset captcha on server error per Google guidance
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
        setCaptchaToken("");
      }
    } finally {
      setBusy(false);
    }
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
            <span className="mr-6"><Link to="/login" className="hover:text-slate-700">Login</Link></span>
            <span className="font-medium text-slate-900 border-b-2 border-slate-900">Sign Up</span>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700">Full Name *</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-slate-800"
                placeholder="Your full name"
                autoComplete="name"
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
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
                placeholder="Create a strong password"
                autoComplete="new-password"
              />
              <div className="mt-2">
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all`}
                    style={{ width: `${(pwdScore / 6) * 100}%`, background: `linear-gradient(90deg, #94a3b8, #0f172a)` }}
                  />
                </div>
                <p className="mt-1 text-xs text-slate-600">{strengthLabels[pwdScore]}</p>
                <p className="mt-1 text-xs text-slate-500">At least 8 characters, 1 number, 1 uppercase, 1 lowercase, 1 symbol.</p>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-700">Confirm Password *</label>
                <button
                  type="button"
                  onClick={() => setShowConfirmPwd((s) => !s)}
                  className="text-xs text-slate-600 hover:text-slate-900"
                >
                  {showConfirmPwd ? "Hide" : "Show"}
                </button>
              </div>
              <input
                name="confirmPassword"
                type={showConfirmPwd ? "text" : "password"}
                value={form.confirmPassword}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-slate-800"
                placeholder="Re-enter your password"
                autoComplete="new-password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>
              )}
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
              {busy ? "Creating Account..." : "Create Account"}
            </button>

            <p className="text-xs text-slate-500 text-center">
              By creating an account, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </form>
        </div>

        <p className="mt-4 text-center text-sm text-slate-600">
          Already have an account? <Link to="/login" className="text-slate-900 font-medium">Login</Link>
        </p>
      </div>
    </div>
  );
}
