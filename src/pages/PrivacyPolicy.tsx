import { useEffect, useState } from "react"
import { navigate } from "../hooks/navigation"

const SECTIONS = [
  {
    id: "data-we-collect",
    title: "Data We Collect",
    content: `We collect information necessary to operate our cashback service and ensure your experience is secure and seamless. 
    
    This includes:
    • Public account identifiers and wallet addresses when you link your trading or betting profiles.
    • Basic profile details like your email address used to create and verify your account.
    • Technical telemetry (IP address, browser type, device information) to secure our infrastructure against malicious activity.
    
    We never collect or store your private API keys, passwords, or personal banking credentials.`
  },
  {
    id: "how-we-use-it",
    title: "How We Use It",
    content: `Your data is utilized solely to calculate cashback earnings and facilitate instant withdrawals.
    
    Specifically, we use it to:
    • Match your trading fee reports with our platform partner rebates.
    • Calculate precise monthly performance indicators and live balances shown in your dashboard.
    • Detect and prevent fraudulent activities or terms violations.
    • Send you critical service updates regarding your cashback engine or pending payouts.
    
    We do not sell, rent, or trade your personal information to advertisers or marketing agencies.`
  },
  {
    id: "third-party-platforms",
    title: "Third-party Platforms",
    content: `Askew integrates with dozens of trusted trading and wagering exchanges (e.g., Binance, Bybit, Roobet). 
    
    By connecting your external accounts:
    • You authorize Askew to receive transaction metadata (volumes, fees paid, rebates generated).
    • The data shared is subject to the privacy protocols of those respective external networks.
    • We recommend reviewing the individual privacy policies of all third-party platforms before linking them.`
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: `We retain your data for as long as your account remains active or as needed to provide our services.
    
    • Trading statistics and cashback records are kept to populate historical performance charts.
    • Should you choose to close your account, we will purge all personal credentials and linked account identifiers from our systems within 30 days, unless a legal hold or regulatory compliance requires extended retention.`
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `You maintain complete ownership and control over your digital footprint on Askew.
    
    Your rights include:
    • Access: You can view all accumulated earnings and connected profiles at any time.
    • Correction: You can update your primary profile details and connected keys in your settings.
    • Deletion: You have the right to permanently delete your Askew account and request deletion of all associated data.
    • Portability: You can export your historical payouts feed in structured formats.`
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: `Have questions about this Privacy Policy or how your data is handled? Reach out to our dedicated privacy desk:
    
    • Email: privacy@askew.com
    • Availability: Monday – Friday, 9:00 AM – 5:00 PM EST
    • Response Time: We strive to reply to all formal privacy requests within 48 business hours.`
  }
]

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id)

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" })
      setActiveSection(id)
    }
  }

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      {/* Sleek Custom Navbar */}
      <header style={{
        width: "100%",
        padding: "24px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(0,140,255,0.15)",
        boxSizing: "border-box",
      }} className="max-md:!px-6 max-md:!py-4">
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
          <span style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.02em" }}>Askew</span>
        </div>
        
        <button 
          onClick={() => navigate("/")}
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            padding: "8px 18px",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease",
            fontFamily: "'Sora', sans-serif",
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"}
        >
          Back to Home
        </button>
      </header>

      {/* Main Content Layout */}
      <main style={{
        maxWidth: "1100px",
        width: "100%",
        margin: "0 auto",
        padding: "60px 40px",
        display: "flex",
        gap: "48px",
        boxSizing: "border-box",
      }} className="max-md:!flex-col max-md:!px-6 max-md:!py-10">
        
        {/* Left Side: Sidebar navigation (hidden on small screens) */}
        <aside className="max-md:!hidden" style={{
          width: "240px",
          flexShrink: 0,
          position: "sticky",
          top: "120px",
          alignSelf: "flex-start",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}>
          <h4 style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "16px",
            margin: 0,
          }}>
            Navigation
          </h4>
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id
            return (
              <span
                key={section.id}
                onClick={() => handleScrollTo(section.id)}
                style={{
                  fontSize: "14px",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                  cursor: "pointer",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  background: isActive ? "rgba(255,255,255,0.12)" : "transparent",
                  transition: "all 0.2s ease",
                  borderLeft: isActive ? "3px solid #ffffff" : "3px solid transparent",
                  boxSizing: "border-box",
                }}
              >
                {section.title}
              </span>
            )
          })}
        </aside>

        {/* Right Side: Main Text Block */}
        <section style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "36px",
        }}>
          {/* Main Title Banner */}
          <div style={{ marginBottom: "20px" }}>
            <span style={{
              fontSize: "12px",
              fontWeight: 600,
              background: "rgba(255, 255, 255, 0.18)",
              border: "1px solid rgba(255,255,255,0.22)",
              padding: "6px 14px",
              borderRadius: "100px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: "16px",
            }}>
              Legal Agreement
            </span>
            <h1 style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#0a0a0a",
              margin: 0,
            }}>
              Privacy Policy
            </h1>
            <p style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.85)",
              marginTop: "16px",
              lineHeight: 1.6,
              margin: "16px 0 0",
            }}>
              Last updated: May 21, 2026. Askew is committed to transparency and securing your privacy. Read below to understand how we protect, handle, and securely clear your information.
            </p>
          </div>

          {/* Legal Content Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {SECTIONS.map((section) => (
              <div
                id={section.id}
                key={section.id}
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  borderRadius: "16px",
                  padding: "32px",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.16)"
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)"
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)"
                }}
              >
                <h2 style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#0a0a0a",
                  marginTop: 0,
                  marginBottom: "16px",
                }}>
                  {section.title}
                </h2>
                <div style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(255, 255, 255, 0.95)",
                  whiteSpace: "pre-line",
                }}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Back button at the bottom */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
            <button
              onClick={() => navigate("/")}
              style={{
                background: "#0f1a3a",
                color: "#ffffff",
                border: "none",
                padding: "16px 36px",
                borderRadius: "100px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                transition: "all 0.2s ease",
                fontFamily: "'Sora', sans-serif",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Understand & Return Home
            </button>
          </div>
        </section>

      </main>
    </div>
  )
}
