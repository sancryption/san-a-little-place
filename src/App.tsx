import React from 'react';

export default function App(): React.JSX.Element {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem 1.5rem',
        background: 'radial-gradient(ellipse at 50% 20%, #0d1e38 0%, #071322 65%, #030811 100%)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '780px',
          width: '100%',
          backgroundColor: 'var(--surface-panel)',
          border: '1px solid var(--surface-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 2rem',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)',
        }}
      >
        <header style={{ marginBottom: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              backgroundColor: 'rgba(116, 233, 255, 0.1)',
              border: '1px solid rgba(116, 233, 255, 0.3)',
              borderRadius: '9999px',
              color: 'var(--accent-cyan)',
              fontSize: '0.8125rem',
              fontWeight: 500,
              marginBottom: '1rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-cyan)',
                boxShadow: '0 0 10px var(--accent-cyan)',
              }}
            />
            Phase 0: Project Foundation Ready
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.5rem',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '0.75rem',
              background: 'linear-gradient(135deg, #ffffff 40%, var(--accent-cyan) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            San — A Little Place for You
          </h1>

          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            At 2 AM, rain traces the window of San’s compact bedroom while a luminous city drops
            away behind her. The cinematic 3D companion foundation is successfully established.
          </p>
        </header>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(7, 19, 34, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.35rem' }}>
              Engine & Stack
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              React 19, TypeScript, Vite, Three.js, and React Three Fiber (R3F).
            </p>
          </div>

          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(7, 19, 34, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div style={{ color: 'var(--accent-peach)', fontWeight: 600, marginBottom: '0.35rem' }}>
              Design Blueprint
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Full Manus specification preserved in <code>DESIGN.md</code>.
            </p>
          </div>

          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(7, 19, 34, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div style={{ color: 'var(--accent-magenta)', fontWeight: 600, marginBottom: '0.35rem' }}>
              Asset Integrity
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Zero fabricated assets. Empty folders initialized with <code>.gitkeep</code>.
            </p>
          </div>
        </section>

        <footer
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            Repository: <code>san-a-little-place</code>
          </div>
          <div>
            License: <em>Pending author selection (All Rights Reserved)</em>
          </div>
        </footer>
      </div>
    </main>
  );
}
