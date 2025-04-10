import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import LoginPage from "./pages/LoginPage";
import ForgotOtpPage from "./pages/ForgotOtpPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Default from "./layout/default";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Unprotected routes */}
        <Route
          path="/"
          element={
            <Default>
              <HomePage />
            </Default>
          }
        />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-otp" element={<ForgotOtpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:otp" element={<ResetPasswordPage />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          {/* Add protected routes here */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
