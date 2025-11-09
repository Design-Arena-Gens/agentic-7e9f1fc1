const palette = [
  {
    name: "Off-White Mist",
    hex: "#F8F6F2",
    description: "Airy base that keeps layouts breathable and premium.",
  },
  {
    name: "Mist Gray",
    hex: "#D6D9DD",
    description: "Soft structure for borders, typography balance, and UI chrome.",
  },
  {
    name: "Deep Charcoal",
    hex: "#1F272B",
    description: "Primary brand typography; confident and grounding.",
  },
  {
    name: "Mint Aqua",
    hex: "#78E3D6",
    description: "Signature refresh accent, hinting at crisp hydration.",
  },
  {
    name: "Tangerine Glow",
    hex: "#FFB47A",
    description: "Measured warmth that adds subtle energy when needed.",
  },
];

const flavors = [
  {
    name: "Lemon-Lime Current",
    accent: "linear-gradient(135deg, #f3ffe8, #cfffcf)",
    notes: [
      "Sparkling citrus edge balanced with cooling mint haze.",
      "Use with Mist Gray typography for maximum clarity.",
    ],
    code: "LL-01",
  },
  {
    name: "Berry Orbit",
    accent: "linear-gradient(135deg, #fff0f8, #f7d9ff)",
    notes: [
      "Velvet berries with light floral lift for a refined finish.",
      "Pair with deep charcoal logotype for contrast.",
    ],
    code: "BR-02",
  },
  {
    name: "Mango Drift",
    accent: "linear-gradient(135deg, #fff4e6, #ffe0b6)",
    notes: [
      "Sun-warmed mango wrapped in a cooling mist sensation.",
      "Anchor with mint aqua micro accents to reinforce freshness.",
    ],
    code: "MG-03",
  },
  {
    name: "Cola Cascade",
    accent: "linear-gradient(135deg, #f5f1ee, #ded3cc)",
    notes: [
      "Classic cola depth reimagined with herbaceous clarity.",
      "Use restrained tangerine to imply effervescence.",
    ],
    code: "CC-04",
  },
  {
    name: "Watermelon Crest",
    accent: "linear-gradient(135deg, #f8fff7, #e3ffef)",
    notes: [
      "Crushed watermelon blended with crisp cucumber undertones.",
      "Highlight twist-cap story through diagonal motion cues.",
    ],
    code: "WM-05",
  },
];

const pillars = [
  {
    title: "Purity",
    body:
      "Ultra-clean presentation, minimal lines, transparent layers. Every touchpoint feels filtered and oxygenated.",
  },
  {
    title: "Innovation",
    body:
      "The twist-cap ritual drives the identity: circular motifs, directional cues, and modular graphic loops.",
  },
  {
    title: "Taste",
    body:
      "Flavor is expressed as controlled gradients and gentle pulses of color, signalling nuanced profiles.",
  },
];

const applicationCards = [
  {
    title: "Packaging System",
    description:
      "Primary can is a smooth matte off-white with a vertical mint band. Each flavor adds a secondary gradient panel that fades toward the twist-cap.",
    className: "label",
    content: (
      <div className="surface-soft" style={{ padding: "32px 28px", borderRadius: "28px" }}>
        <div
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(31, 39, 43, 0.08)",
            padding: "24px 18px",
            display: "grid",
            gap: "18px",
            background:
              "linear-gradient(180deg, rgba(120, 227, 214, 0.22), rgba(120, 227, 214, 0))",
          }}
        >
          <div
            style={{
              height: "42px",
              borderRadius: "999px",
              background: "rgba(31, 39, 43, 0.08)",
              display: "grid",
              placeItems: "center",
              fontSize: "0.85rem",
              letterSpacing: "0.22em",
            }}
          >
            TWISTUP // MINT AQUA
          </div>
          <div
            style={{
              display: "grid",
              gap: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.48em",
              fontFamily: "var(--font-serif)",
              fontSize: "1.4rem",
              color: "rgba(31, 39, 43, 0.82)",
            }}
          >
            <span>FLAVOR</span>
            <span style={{ letterSpacing: "0.18em", fontSize: "1rem" }}>STILL + EFFERVESCENT</span>
          </div>
          <div
            style={{
              height: "64px",
              borderRadius: "999px",
              border: "1px solid rgba(31, 39, 43, 0.12)",
              background:
                "linear-gradient(90deg, rgba(120, 227, 214, 0.8), rgba(120, 227, 214, 0))",
            }}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Digital Experience",
    description:
      "Interaction states use soft motion derived from the twist gesture. Focus states glow mint, while CTAs highlight in charcoal with tangerine underline.",
    className: "digital",
    content: (
      <div
        style={{
          width: "100%",
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.25)",
        }}
      >
        <div
          style={{
            padding: "28px",
            display: "grid",
            gap: "18px",
            background: "rgba(31, 39, 43, 0.3)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div className="twist-indicator">twist</div>
            <div>
              <div style={{ fontWeight: 600, letterSpacing: "0.12em", fontSize: "0.9rem" }}>
                TWISTUP UI
              </div>
              <div style={{ fontSize: "0.95rem", opacity: 0.72 }}>Glass-smooth interface motion</div>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            <button
              style={{
                borderRadius: "999px",
                padding: "0.85rem 1.2rem",
                border: "none",
                textAlign: "left",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontSize: "0.95rem",
                background: "rgba(255, 255, 255, 0.1)",
                color: "#f8f6f2",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.32)",
              }}
            >
              Discover Flavor Stories
            </button>
            <button
              style={{
                borderRadius: "999px",
                padding: "0.85rem 1.2rem",
                border: "1px solid rgba(120, 227, 214, 0.65)",
                textAlign: "left",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontSize: "0.95rem",
                background: "rgba(120, 227, 214, 0.18)",
                color: "rgba(248, 246, 242, 0.92)",
                boxShadow: "0 12px 24px -18px rgba(0, 0, 0, 0.7)",
              }}
            >
              Shop Twist Packs
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Pattern Language",
    description:
      "Modular rings, diagonal gradients, and soft pulse dots create a sense of continuous motion without overwhelming the clean space.",
    className: "pattern",
    content: (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "28px",
            borderRadius: "24px",
            border: "1px solid rgba(31, 39, 43, 0.08)",
            backdropFilter: "blur(4px)",
            background: "rgba(255,255,255,0.6)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "32px",
              borderRadius: "999px",
              border: "1px solid rgba(31, 39, 43, 0.12)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "48px",
              borderRadius: "999px",
              border: "1px solid rgba(31, 39, 43, 0.08)",
              borderTopColor: "transparent",
              transform: "rotate(-18deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "96px",
              height: "96px",
              borderRadius: "999px",
              background: "rgba(120, 227, 214, 0.35)",
              top: "22%",
              left: "18%",
              boxShadow: "0 16px 32px -24px rgba(0,0,0,0.4)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "128px",
              height: "128px",
              borderRadius: "999px",
              background: "rgba(255, 180, 122, 0.22)",
              bottom: "14%",
              right: "16%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "0",
              backgroundSize: "60px 60px",
              backgroundImage:
                "radial-gradient(rgba(31,39,43,0.08) 1px, transparent 0), radial-gradient(rgba(31,39,43,0.05) 1px, transparent 0)",
              backgroundPosition: "0 0, 30px 30px",
            }}
          />
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-meta">
              <div className="hero-pill">TwistUp Brand System</div>
              <div className="hero-pill">Premium Refreshment</div>
              <div className="hero-pill">2024 Launch</div>
            </div>
            <h1>Flavor brought to life by a confident twist.</h1>
            <p className="hero-overview">
              TwistUp is a modern beverage experience built around a signature twist-cap ritual.
              The brand identity combines purified minimalism with quiet energy—clean canvases,
              controlled gradients, and circular gestures echo the twist-and-release moment.
            </p>
            <div className="hero-scan">
              <div className="hero-bento">
                <strong>Brand Tone</strong>
                <span>Refreshing, assured, and quietly vibrant.</span>
                <div className="subtle-divider" />
                <p>
                  Calm confidence with a hint of motion. Every element breathes and invites the
                  consumer into the Twist ritual.
                </p>
              </div>
              <div className="hero-bento">
                <strong>Visual DNA</strong>
                <span>Circles, gradients, and linear tension.</span>
                <div className="subtle-divider" />
                <p>
                  Layers of soft mint and misty neutrals create depth, while slender typography keeps
                  things poised and legible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-kicker">Essence</span>
            <h2>Three pillars distill the TwistUp mindset.</h2>
            <p>
              Every decision—from packaging to digital touchpoints—reinforces purity, innovation, and
              taste. These pillars inform color intensity, spacing, and motion tempo.
            </p>
          </div>
          <div className="pillars">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="pillar-card">
                <h4>{pillar.title}</h4>
                <p>{pillar.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-kicker">Identity Core</span>
            <h2>Logo system: a calm wordmark with a twisting pulse.</h2>
            <p>
              The TwistUp logotype is deliberately simple. The serif adds flavor sophistication while
              a focused twist glyph reinforces the cap mechanism. Lockups flex across vertical and
              horizontal compositions.
            </p>
          </div>
          <div className="grid two">
            <div className="logo-card">
              <div className="logo-mark">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="18" stroke="rgba(31,39,43,0.24)" strokeWidth="2" />
                  <path
                    d="M24 8c6.627 0 12 5.373 12 12 0 6.628-5.373 12.001-12 12.001-6.627 0-12-5.373-12-12.001"
                    stroke="rgba(31,39,43,0.6)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 24h16"
                    stroke="rgba(120,227,214,0.9)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="logo-type">
                <strong>Twist</strong>
                <span>Up</span>
              </div>
              <p>
                The twist glyph is a half-open circle that implies rotation and release. It is
                paired with a serene serif for balance, keeping the brand premium yet approachable.
              </p>
            </div>
            <div className="surface" style={{ padding: "32px 36px", display: "grid", gap: "22px" }}>
              <div className="spec-grid">
                <div className="spec-tile">
                  <div className="spec-title">Logotype</div>
                  <div className="spec-value">Cormorant Garamond Semibold</div>
                  <div className="spec-note">Letter spacing tightened to -45 tracking.</div>
                </div>
                <div className="spec-tile">
                  <div className="spec-title">Support Type</div>
                  <div className="spec-value">Plus Jakarta Sans</div>
                  <div className="spec-note">
                    Uppercase microcopy with 0.28em spacing for clarity.
                  </div>
                </div>
                <div className="spec-tile">
                  <div className="spec-title">Motion Cue</div>
                  <div className="spec-value">18° rotational shift</div>
                  <div className="spec-note">
                    Implied by angled gradients and twist indicator rings.
                  </div>
                </div>
              </div>
              <div className="motion-bar" />
              <p>
                In motion, the wordmark subtly rotates forward during the cap twist animation, then
                settles back to center as mist lines pulse outward.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-kicker">Palette Architecture</span>
            <h2>Minimal neutrals build the base; mint and tangerine spark focus.</h2>
            <p>
              The core palette stays restrained—ample negative space framed by soft grays and
              charcoal. Mint aqua and tangerine appear intentionally, guiding the eye without
              overwhelming.
            </p>
          </div>
          <div className="palette-grid">
            {palette.map((color) => (
              <div key={color.name} className="palette-tile">
                <div
                  className="palette-color"
                  style={{
                    background:
                      color.name === "Mint Aqua"
                        ? "linear-gradient(135deg, rgba(120,227,214,0.85), rgba(120,227,214,0.4))"
                        : color.name === "Tangerine Glow"
                          ? "linear-gradient(135deg, rgba(255,180,122,0.85), rgba(255,180,122,0.35))"
                          : color.hex,
                  }}
                />
                <div className="palette-info">
                  <span>{color.name}</span>
                  <span>{color.hex}</span>
                  <p>{color.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-kicker">Typography</span>
            <h2>Balanced pairing for modern clarity and sensory storytelling.</h2>
            <p>
              A serif headline voice conveys taste sophistication while the geometric sans handles
              navigation, product detail, and interface moments.
            </p>
          </div>
          <div className="typography-stack">
            <div className="type-card">
              <div className="type-sample" style={{ fontSize: "2.6rem" }}>
                TwistUp elevates the everyday twist.
              </div>
              <div className="type-meta">Cormorant Garamond / 54px / -45 tracking</div>
              <div className="type-body">
                Headline style for hero statements, flavor narratives, and packaging callouts.
              </div>
            </div>
            <div className="type-card">
              <div
                className="type-sample"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                }}
              >
                Refresh // Innovate // Taste
              </div>
              <div className="type-meta">Plus Jakarta Sans / 18px / +160 tracking</div>
              <div className="type-body">
                Used for system labels, UI elements, and twist-cap instructions with calm authority.
              </div>
            </div>
            <div className="type-card">
              <div
                className="type-sample"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  fontSize: "1.05rem",
                  textTransform: "none",
                }}
              >
                The flavor release is feather-light with lingering clarity.
              </div>
              <div className="type-meta">Plus Jakarta Sans / 18px / paragraph</div>
              <div className="type-body">
                Body copy and microcopy keep the experience conversational, premium, and readable.
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-kicker">Flavor Expression</span>
            <h2>Each flavor owns its hue—always within the TwistUp equilibrium.</h2>
            <p>
              Color stories adapt to flavor profiles yet remain rooted to the core palette. Accent
              gradients maintain breathability, with neutrals and charcoal typography anchoring the
              system.
            </p>
          </div>
          <div className="flavor-grid">
            {flavors.map((flavor) => (
              <div key={flavor.name} className="flavor-card">
                <div className="flavor-header">
                  <h3 style={{ fontSize: "1.4rem" }}>{flavor.name}</h3>
                  <div className="flavor-chip">{flavor.code}</div>
                </div>
                <div className="flavor-swatch" style={{ background: flavor.accent }}>
                  <span>{flavor.code.split("-")[0]}</span>
                </div>
                <div className="flavor-notes">
                  {flavor.notes.map((note) => (
                    <span key={note}>{note}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-kicker">Motion & Texture</span>
            <h2>The twist gesture guides gradients, rings, and layered depth.</h2>
            <p>
              Motion is purposeful: rings rotate 18°, gradients sweep diagonally, and micro-particles
              hint at effervescence. Physical assets retain matte tactility with glossy accents on the cap.
            </p>
          </div>
          <div className="applications-grid">
            {applicationCards.map((card) => (
              <div key={card.title} className="application-card">
                <div className={`application-visual ${card.className}`}>{card.content}</div>
                <div>
                  <h3 style={{ fontSize: "1.3rem" }}>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        TwistUp — Modern twist-cap refreshment. Identity system by the TwistUp Brand Studio.
      </footer>
    </>
  );
}
