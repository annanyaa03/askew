import { useEffect, useState } from "react"
import { navigate } from "../hooks/navigation"
import DashboardCards from "../components/ClearView"

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState("trader@askew.com")

  useEffect(() => {
    // Retrieve email signed up with, or fallback to default demo
    const stored = sessionStorage.getItem("userEmail")
    if (stored) {
      setUserEmail(stored)
    }
  }, [])

  const getUserName = (email: string) => {
    const namePart = email.split("@")[0]
    if (namePart.toLowerCase() === "trader") {
      return "TRADER"
    }
    return namePart.charAt(0).toUpperCase() + namePart.slice(1)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("userEmail")
    navigate("/")
  }

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      background: "linear-gradient(180deg, #008CFF 0%, #9AC1F4 100%)",
      fontFamily: "'Sora', sans-serif",
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      position: "relative",
      paddingBottom: "80px",
    }}>
      
      {/* Noise overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.028'/%3E%3C/svg%3E\")",
        backgroundSize: "256px",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Sleek Dashboard Navbar */}
      <header style={{
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(0,140,255,0.15)",
        boxSizing: "border-box",
      }} className="max-md:!px-6 max-md:!py-4">
        
        {/* Brand */}
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
          <span style={{
            fontSize: "11px",
            fontWeight: 700,
            background: "#22c55e",
            color: "#ffffff",
            padding: "2px 8px",
            borderRadius: "6px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginLeft: "4px",
            boxShadow: "0 0 8px rgba(34,197,94,0.4)",
          }}>
            LIVE
          </span>
        </div>

        {/* User profile / Logout */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="max-md:!gap-3">
          <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }} className="max-md:!hidden">
            {userEmail}
          </span>
          <button 
            onClick={handleLogout}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              padding: "8px 18px",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s ease",
              fontFamily: "'Sora', sans-serif",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.35)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"}
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Main Panel Content */}
      <main style={{
        maxWidth: "1040px",
        width: "100%",
        margin: "0 auto",
        padding: "48px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "36px",
        boxSizing: "border-box",
        position: "relative",
        zIndex: 1,
      }} className="max-md:!px-4 max-md:!py-8">
        
        {/* Welcome Greeting with pulsing indicators */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "20px",
        }}>
          <div>
            <h1 style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "#0a0a0a",
              margin: 0,
              lineHeight: 1.1,
            }}>
              Welcome back, {getUserName(userEmail)}
            </h1>
            <p style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.9)",
              marginTop: "8px",
              margin: "8px 0 0",
            }}>
              Your secure cashback engine is running and accumulating commission rebates.
            </p>
          </div>

          {/* Active status pulse bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.18)",
            padding: "8px 16px",
            borderRadius: "100px",
            backdropFilter: "blur(8px)",
          }}>
            <span style={{
              position: "relative",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
            }}>
              {/* Outer pulsing ring */}
              <span style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "50%",
                border: "2px solid #22c55e",
                animation: "pulse-ring 1.5s cubic-bezier(0.215, 0.610, 0.355, 1) infinite",
              }} />
            </span>
            <span style={{ fontSize: "13px", fontWeight: 600 }}>Active Connection</span>
            
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes pulse-ring {
                0% { transform: scale(0.5); opacity: 1; }
                80%, 100% { transform: scale(1.6); opacity: 0; }
              }
            `}} />
          </div>
        </div>

        {/* The Live Interactive Dashboard Cards Grid! */}
        <div style={{ marginTop: "12px" }}>
          <DashboardCards />
        </div>

      </main>

    </div>
  )
}
