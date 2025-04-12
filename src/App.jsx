import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import LoginPage from "./pages/LoginPage";
import ForgotOtpPage from "./pages/ForgotOtpPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Myprofile from "./pages/Myprofile.jsx";
import Navbar from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  const location = useLocation();
  const authRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/verify-email",
    "/verify-otp",
  ];
  const isAuthRoute =
    authRoutes.includes(location.pathname) ||
    matchPath("/reset-password/:otp", location.pathname);

  const containerClass = isAuthRoute
    ? "min-h-screen bg-gradient-to-br from-blue-100 to-green-100"
    : "ml-7 mr-7";
  return (
    <div className={`${containerClass}`}>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-otp" element={<ForgotOtpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:otp" element={<ResetPasswordPage />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<Myprofile />} />
      </Routes>
      {!isAuthRoute && <Footer />}
    </div>
  );
}

export default App;
