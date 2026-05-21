import { useState, useEffect } from "react"
import { navigate } from "../hooks/navigation"
import BulletMarker from "../components/BulletMarker"

const BENEFITS = [
  "No deposits or trading subscriptions required",
  "Connect to 30+ exchanges in 60 seconds",
  "Direct weekly payouts in Bitcoin, ETH, or Cash",
  "Always free, forever referral commission share"
]

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [valid, setValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingStep, setLoadingStep] = useState(0)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setEmail(val)
    setValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) return
    
    // Trigger animated loading sequence
    setLoading(true)
    setLoadingStep(0)
  }

  // Handle loading step intervals to give a high-fidelity setup experience
  useEffect(() => {
    if (!loading) return
    
    const steps = [
      "Securing communication channel...",
      "Linking global rebate adapters...",
      "Provisioning secure payouts vault...",
      "Cashback Engine initialized!"
    ]

    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          // Store email in sessionStorage to welcome the user on the dashboard!
          sessionStorage.setItem("userEmail", email)
          setTimeout(() => {
            navigate("/dashboard")
          }, 600)
          return prev
        }
      })
    }, 900)

    return () => clearInterval(interval)
  }, [loading, email])

  const stepsText = [
    "Securing communication channel...",
    "Linking global rebate adapters...",
    "Provisioning secure payouts vault...",
    "Cashback Engine initialized!"
  ]

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      background: "linear-gradient(180deg, #008CFF 0%, #9AC1F4 100%)",
      fontFamily: "'Sora', sans-serif",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      boxSizing: "border-box",
      position: "relative",
    }}>
      
      {/* Noise Grain Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.028'/%3E%3C/svg%3E\")",
        backgroundSize: "256px",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Main Container Card */}
      <div style={{
        width: "100%",
        maxWidth: "1000px",
        minHeight: "560px",
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        borderRadius: "24px",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 24px 80px rgba(0, 0, 0, 0.15)",
        display: "flex",
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
      }} className="max-md:!flex-col">
        
        {/* LEFT COLUMN: BRAND PROMOTION (Hidden/stacked on mobile) */}
        <div style={{
          flex: 1,
          padding: "48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRight: "1px solid rgba(255, 255, 255, 0.12)",
          background: "rgba(255,255,255,0.03)",
          boxSizing: "border-box",
        }} className="max-md:!hidden">
          {/* Logo Brand Title */}
          <div 
            onClick={() => navigate("/")}
            style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
          >
            <span style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 13H2L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                <line x1="5" y1="9.5" x2="11" y2="9.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </span>
            <span style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.02em" }}>Askew</span>
          </div>

          {/* Copy and Core Pitch */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", margin: "40px 0" }}>
            <h2 style={{
              fontSize: "36px",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#0a0a0a",
              margin: 0,
            }}>
              Your rebate engine starts here.
            </h2>
            <p style={{
              fontSize: "15px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.85)",
              margin: 0,
            }}>
              Set up your profile in under a minute. Connect your platforms, track real-time commission cashback, and cash out on your terms.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              {BENEFITS.map((benefit, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                  <BulletMarker />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Info */}
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} Askew Inc. Protected by automated encryption.
          </span>
        </div>

        {/* RIGHT COLUMN: SIGNUP FORM OR LOADING PANEL */}
        <div style={{
          flex: "0 0 460px",
          padding: "48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxSizing: "border-box",
        }} className="max-md:!w-full max-md:!px-6 max-md:!py-10">
          
          {/* Back Home link for Mobile */}
          <div 
            onClick={() => navigate("/")} 
            style={{ 
              display: "none", 
              alignItems: "center", 
              gap: "8px", 
              marginBottom: "24px", 
              cursor: "pointer",
              fontSize: "14px",
              color: "rgba(255,255,255,0.7)"
            }} 
            className="max-md:!flex"
          >
            <span>← Back to Landing</span>
          </div>

          {!loading ? (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              
              {/* Form Title */}
              <div>
                <span style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#B8D2D6",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "6px",
                }}>
                  GET STARTED
                </span>
                <h1 style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "#0a0a0a",
                  lineHeight: 1.1,
                  margin: 0,
                }}>
                  Create your account
                </h1>
                <p style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.85)",
                  marginTop: "8px",
                  margin: "8px 0 0",
                }}>
                  Already have an account? <span style={{ textDecoration: "underline", cursor: "pointer", color: "#0a0a0a" }}>Sign in</span>
                </p>
              </div>

              {/* Input container */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
                  Primary Email Address
                </label>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 16px",
                  border: "1.5px solid rgba(255,255,255,0.22)",
                  borderRadius: "14px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  transition: "all 0.2s ease",
                }}>
                  {/* Envelope */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#aaaaaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6l-10 7L2 6" stroke="#aaaaaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="you@example.com"
                    style={{
                      flex: 1,
                      border: "none",
                      outline: "none",
                      fontSize: "15px",
                      color: "#0a0a0a",
                      fontFamily: "'Sora', sans-serif",
                      background: "transparent",
                    }}
                  />
                  {valid && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#22c55e" />
                      <path d="M8 12l3 3 5-5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Password indicator (demo info) */}
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.4 }}>
                Askew uses secure magic links. Enter your email and we'll instantly connect you. No complex passwords to remember or lose.
              </p>

              {/* Continue button */}
              <button
                type="submit"
                disabled={!valid}
                style={{
                  width: "100%",
                  padding: "16px",
                  backgroundColor: valid ? "#0a0a0a" : "rgba(0,0,0,0.3)",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: 700,
                  fontFamily: "'Sora', sans-serif",
                  border: "none",
                  borderRadius: "14px",
                  cursor: valid ? "pointer" : "not-allowed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  boxShadow: valid ? "0 6px 20px rgba(0,0,0,0.18)" : "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (valid) e.currentTarget.style.transform = "scale(1.02)"
                }}
                onMouseLeave={(e) => {
                  if (valid) e.currentTarget.style.transform = "scale(1)"
                }}
              >
                <span>Continue</span>
                <span>→</span>
              </button>

              <span style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
                lineHeight: 1.4,
              }}>
                By proceeding, you agree to Askew's <span onClick={() => navigate("/terms")} style={{ textDecoration: "underline", cursor: "pointer", color: "#0a0a0a" }}>Terms of Service</span> and <span onClick={() => navigate("/privacy")} style={{ textDecoration: "underline", cursor: "pointer", color: "#0a0a0a" }}>Privacy Policy</span>.
              </span>

            </form>
          ) : (
            // HIGH FIDELITY SETUP ANIMATION
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "28px",
              minHeight: "360px",
            }}>
              {/* Spinner animation */}
              <div style={{
                position: "relative",
                width: "80px",
                height: "80px",
              }}>
                {/* Outer ring */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  border: "4px solid rgba(255,255,255,0.15)",
                  borderRadius: "50%",
                }} />
                {/* Pulsing glow spinner */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  border: "4px solid transparent",
                  borderTopColor: "#0a0a0a",
                  borderRadius: "50%",
                  animation: "spinner 0.9s linear infinite",
                }} />
                {/* SVG Style injection for spinner rotation */}
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes spinner {
                    to { transform: rotate(360deg); }
                  }
                `}} />
              </div>

              {/* Progress Milestones */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#0a0a0a", margin: 0 }}>
                  Provisioning Account
                </h3>
                
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.9)",
                }}>
                  {stepsText.map((step, idx) => {
                    const isPassed = loadingStep > idx
                    const isActive = loadingStep === idx
                    return (
                      <div 
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          opacity: isPassed ? 0.6 : isActive ? 1 : 0.3,
                          fontWeight: isActive ? 700 : 400,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {isPassed && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" fill="#22c55e" />
                            <path d="M8 12l3 3 5-5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        {isActive && (
                          <span style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#0a0a0a",
                            display: "inline-block",
                            animation: "blink 0.6s infinite alternate",
                          }} />
                        )}
                        {!isPassed && !isActive && (
                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.4)" }} />
                        )}
                        <span>{step}</span>
                      </div>
                    )
                  })}
                  <style dangerouslySetInnerHTML={{__html: `
                    @keyframes blink {
                      from { opacity: 0.3; }
                      to { opacity: 1; }
                    }
                  `}} />
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  )
}
