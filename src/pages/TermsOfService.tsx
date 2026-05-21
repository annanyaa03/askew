import { useEffect, useState } from "react"
import { navigate } from "../hooks/navigation"

const SECTIONS = [
  {
    id: "eligibility",
    title: "Eligibility",
    content: `To register for an Askew account and access our cashback network, you must meet the following criteria:
    
    • You must be at least 18 years of age (or the legal age of majority in your jurisdiction).
    • You must possess the legal capacity to enter into binding agreements.
    • You must not be a resident of any restricted or sanctioned country under standard international regulatory profiles.
    • You maintain sole responsibility for ensuring your use of Askew complies with local laws and regulations governing trading and betting activity in your area.`
  },
  {
    id: "how-askew-works",
    title: "How Askew Works",
    content: `Askew is a passive rebate optimizer that tracks transaction fees on linked external platforms.
    
    • You connect your supported exchange or platform accounts by providing public identifiers or linking profiles.
    • Askew processes rebate logs published by our platform partners.
    • When a transaction rebate is received, Askew allocates your contracted cashback share directly to your live balance.
    • Askew never touches your primary trading funds, executes transactions on your behalf, or holds custody of your underlying portfolio.`
  },
  {
    id: "cashback-terms",
    title: "Cashback Terms",
    content: `All cashback earnings accrued in your account are governed by these specific parameters:
    
    • **Calculation:** Earnings are derived from actual commission fees paid to exchanges, net of any native discounts, referral overrides, or direct network transaction fees.
    • **Distribution:** Cashback is logged to your live balance in real time or in batches as reports clear.
    • **Withdrawals:** You may request a payout of your cleared cashback balance at any time. There is no minimum balance required to withdraw.
    • **Expiration:** Unclaimed cashback does not expire, provided your account remains active (at least one connection update in a rolling 12-month period).`
  },
  {
    id: "prohibited-use",
    title: "Prohibited Use",
    content: `You agree not to engage in any activity that compromises the integrity or performance of the Askew cashback engine.
    
    Prohibited activities include:
    • Registering multiple accounts to abuse referral systems or promotional codes.
    • Linkage of accounts that do not belong to you or for which you lack authorization.
    • Utilizing automated bots, scrapers, or scripts to manipulate performance numbers or simulate trade reports.
    • Exploiting any software bugs, feed discrepancies, or system exploits to generate illicit cashback credits.`
  },
  {
    id: "liability-disclaimer",
    title: "Liability Disclaimer",
    content: `ASKEW IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT REPRESENTATIONS OR WARRANTIES OF ANY KIND.
    
    • We do not warrant that our tracking software will be uninterrupted, error-free, or compatible with all third-party systems.
    • Askew shall not be liable for any direct, indirect, incidental, or consequential losses resulting from platform exchange outages, API changes, processing delays, or user negligence.
    • Financial trading, investing, and wagering involve significant risk of loss. Askew operates purely as a post-transaction rebate platform and does not offer financial, investment, or legal advice.`
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: `These Terms of Service and your relationship with Askew shall be governed by and construed in accordance with the laws of the State of New York, without regard to conflict of law principles.
    
    • Any dispute, claim, or controversy arising from these Terms shall be resolved exclusively through final and binding arbitration in New York City.
    • You waive any right to participate in class actions or collective arbitration proceedings against Askew.`
  }
]

export default function TermsOfService() {
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
              Service Rules
            </span>
            <h1 style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#0a0a0a",
              margin: 0,
            }}>
              Terms of Service
            </h1>
            <p style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.85)",
              marginTop: "16px",
              lineHeight: 1.6,
              margin: "16px 0 0",
            }}>
              Last updated: May 21, 2026. Please read these Terms of Service carefully before utilizing the Askew rebate engine. By accessing or connecting to our platforms, you agree to these legal obligations.
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
              Accept & Return Home
            </button>
          </div>
        </section>

      </main>
    </div>
  )
}
