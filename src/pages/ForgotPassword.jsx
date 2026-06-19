import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import api from "../services/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const handleSendEmail = async () => {
  if (!email) {
    alert("Masukkan email terlebih dahulu");
    return;
  }

  try {
    const res = await api.post("/auth/forgot-password", {
      email,
    });

    alert(
      res.data.message ||
      "Email reset password berhasil dikirim"
    );
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Gagal mengirim email"
    );
  }
};

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#CFE9DE",
      }}
    >
      {/* Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Card */}
        <div
          style={{
            width: "100%",
            maxWidth: "860px",
            background: "#FFFFFF",
            borderRadius: "36px",
            padding: "55px 60px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          }}
        >
          {/* Logo */}
          <div 
            className="flex items-center" 
            style={{ 
              gap: "8px", 
              marginBottom: "40px" 
            }}
          >
            <img
              src="/logo.png"
              alt="logo"
              style={{
                width: "48px",
                height: "48px",
                objectFit: "contain",
                borderRadius: "6px",
              }}
            />

            <h1
              style={{
                fontSize: "48px",
                fontWeight: "800",
                color: "#0f172a",
                letterSpacing: "-0.8px",
              }}
            >
              Probit
            </h1>
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "12px",
              color: "#111827",
              letterSpacing: "-0.5px",
            }}
          >
            Forgot Password?
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: "14px",
              color: "#6B7280",
              maxWidth: "700px",
              lineHeight: "24px",
              marginBottom: "35px",
            }}
          >
            Enter your registered email address and we will send
            you instructions to reset your password.
          </p>

          {/* Label */}
          <label
            style={{
              display: "block",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Email Address
          </label>

          {/* Input */}
          <div className="relative" style={{ marginBottom: "30px" }}>
            <Mail
              size={18}
              className="absolute"
              style={{
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9CA3AF",
              }}
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              style={{
                width: "100%",
                height: "56px",
                border: "2px solid #D1D5DB",
                borderRadius: "14px",
                paddingLeft: "48px",
                fontSize: "16px",
                outline: "none",
                fontFamily: "inherit",
                transition: "all 0.2s",
                color: "#111827",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#10B981")}
              onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
            />
          </div>

          {/* Buttons */}
          <div 
            className="flex justify-between items-center" 
            style={{ marginTop: "30px" }}
          >
            {/* Back */}
            <Link to="/login">
              <button
                style={{
                  width: "170px",
                  height: "48px",
                  borderRadius: "14px",
                  border: "2px solid #10B981",
                  color: "#10B981",
                  background: "white",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#10B981";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.color = "#10B981";
                }}
              >
                Back to Login
              </button>
            </Link>

            {/* Send */}
            <button
              onClick={handleSendEmail}
              style={{
                width: "170px",
                height: "48px",
                borderRadius: "14px",
                border: "none",
                background: "#10B981",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s",
                boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#059669";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(16, 185, 129, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#10B981";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(16, 185, 129, 0.3)";
              }}
            >
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
