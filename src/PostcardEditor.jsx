import React, { useState, useRef } from 'react';
import { Download, Image, Type, Palette } from 'lucide-react';
import html2canvas from 'html2canvas';

export default function PostcardEditor() {
  const [title, setTitle] = useState('The Weekly Chronicle');
  const [subtitle, setSubTitle] = useState('A Personal Gazette');
  const [message, setMessage] = useState(
    'Dear Reader,\n\nThis week brought moments worth remembering and stories worth sharing...'
  );
  const [quote, setQuote] = useState(
    '"Life is what happens when you\'re busy making other plans."'
  );
  const [signOff, setSignOff] = useState('xoxo, Aadya');
  const [imageUrl, setImageUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);
  const [theme, setTheme] = useState('vintage');

  const previewRef = useRef(null);

  const themes = {
    vintage: {
      bg: '#f5f1e8',
      accent: '#8b7355',
      text: '#2c2416',
      border: '#d4c5b0'
    },
    newspaper: {
      bg: '#faf9f6',
      accent: '#1a1a1a',
      text: '#2c2c2c',
      border: '#cccccc'
    },
    sepia: {
      bg: '#f4ecd8',
      accent: '#704214',
      text: '#3d2817',
      border: '#c9b697'
    }
  };

  const currentTheme = themes[theme];

  const handleDownload = async () => {
    if (!previewRef.current) return;

    const canvas = await html2canvas(previewRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: currentTheme.bg
    });

    const link = document.createElement('a');
    link.download = 'newsletter.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const inputBaseStyle = {
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: '10px 12px',
    borderRadius: '10px',
    border: `1.5px solid ${currentTheme.border}`,
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: '14px',
    outline: 'none',
    backgroundColor: '#fffcf7',
    color: currentTheme.text,
    display: 'block'
  };

  return (
    // Outer black background
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '32px 40px 32px 120px' // slight push to the right
      }}
    >
      {/* Main card container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          borderRadius: '28px',
          padding: '32px 40px',
          background:
            'radial-gradient(circle at top left, #fdf4e0 0, #f0e2c8 40%, #e0c9a7 100%)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.75)',
          boxSizing: 'border-box'
        }}
      >
        {/* Title */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '28px',
            alignItems: 'baseline'
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '34px',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'capitalize',
                color: '#3d2817',
                margin: 0
              }}
            >
              Vintage Newsletter Creator
            </h1>
            <p
              style={{
                marginTop: '6px',
                fontSize: '13px',
                color: '#7c5b33'
              }}
            >
              Craft your weekly dispatch in classic newspaper style
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1.1fr)',
            gap: '32px',
            alignItems: 'flex-start'
          }}
        >
          {/* Editor Panel */}
          <div
            style={{
              backgroundColor: '#fff9f0',
              borderRadius: '20px',
              padding: '20px 22px 22px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.10)',
              border: '1px solid rgba(139, 115, 85, 0.25)',
              boxSizing: 'border-box'
            }}
          >
            {/* Headline */}
            <div style={{ marginBottom: '14px' }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '6px',
                  color: '#7c5b33'
                }}
              >
                <Type style={{ width: 16, height: 16, marginRight: 6 }} />
                Headline
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  ...inputBaseStyle,
                  fontSize: '16px'
                }}
                placeholder="Your headline..."
              />
            </div>

            {/* Subheading */}
            <div style={{ marginBottom: '14px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '6px',
                  color: '#7c5b33'
                }}
              >
                Subheading
              </label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubTitle(e.target.value)}
                style={inputBaseStyle}
                placeholder="Optional subtitle..."
              />
            </div>

            {/* Story */}
            <div style={{ marginBottom: '14px' }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '6px',
                  color: '#7c5b33'
                }}
              >
                <Type style={{ width: 16, height: 16, marginRight: 6 }} />
                Your Story
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={7}
                style={{
                  ...inputBaseStyle,
                  resize: 'none',
                  lineHeight: 1.5
                }}
                placeholder="Write your weekly chronicle..."
              />
            </div>

            {/* Quote */}
            <div style={{ marginBottom: '14px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '6px',
                  color: '#7c5b33'
                }}
              >
                Featured Quote
              </label>
              <input
                type="text"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                style={{
                  ...inputBaseStyle,
                  fontStyle: 'italic'
                }}
                placeholder="A memorable quote..."
              />
            </div>

            {/* Sign off */}
            <div style={{ marginBottom: '14px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '6px',
                  color: '#7c5b33'
                }}
              >
                Sign Off
              </label>
              <input
                type="text"
                value={signOff}
                onChange={(e) => setSignOff(e.target.value)}
                style={inputBaseStyle}
                placeholder="xoxo, Aadya"
              />
            </div>

            {/* Illustration */}
            <div style={{ marginBottom: '16px' }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '6px',
                  color: '#7c5b33'
                }}
              >
                <Image style={{ width: 16, height: 16, marginRight: 6 }} />
                Illustration
              </label>
              {!showImageInput ? (
                <button
                  type="button"
                  onClick={() => setShowImageInput(true)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(139, 115, 85, 0.35)',
                    backgroundColor: '#e4d3bd',
                    color: '#3d2817',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  Add Image URL
                </button>
              ) : (
                <div>
                  <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    style={inputBaseStyle}
                    placeholder="Paste image URL..."
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShowImageInput(false);
                      setImageUrl('');
                    }}
                    style={{
                      marginTop: '4px',
                      fontSize: '12px',
                      color: '#8b7355',
                      textDecoration: 'underline',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Theme buttons */}
            <div>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '8px',
                  color: '#7c5b33'
                }}
              >
                <Palette style={{ width: 16, height: 16, marginRight: 6 }} />
                Style
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {Object.keys(themes).map((themeName) => {
                  const t = themes[themeName];
                  const active = theme === themeName;
                  return (
                    <button
                      key={themeName}
                      type="button"
                      onClick={() => setTheme(themeName)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '10px',
                        border: `1.5px solid ${t.border}`,
                        backgroundColor: active ? t.accent : t.bg,
                        color: active ? t.bg : t.text,
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        fontSize: '13px',
                        textTransform: 'capitalize',
                        cursor: 'pointer'
                      }}
                    >
                      {themeName}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#3d2817',
                  margin: 0
                }}
              >
                Preview
              </h2>
              <button
                type="button"
                onClick={handleDownload}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: '#8b7355',
                  color: '#f5f1e8',
                  fontSize: '13px',
                  cursor: 'pointer',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.25)'
                }}
              >
                <Download style={{ width: 16, height: 16 }} />
                Download
              </button>
            </div>

            <div
              ref={previewRef}
              style={{
                backgroundColor: currentTheme.bg,
                border: `8px solid ${currentTheme.accent}`,
                boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                overflow: 'hidden'
              }}
            >
              {/* Top decorative stripe */}
              <div
                style={{
                  height: '4px',
                  background: `repeating-linear-gradient(90deg, ${currentTheme.accent} 0px, ${currentTheme.accent} 10px, ${currentTheme.bg} 10px, ${currentTheme.bg} 20px)`
                }}
              />

              <div style={{ padding: '40px 52px' }}>
                {/* Header */}
                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: '28px',
                    paddingBottom: '18px',
                    borderBottom: `3px double ${currentTheme.border}`
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.25em',
                      color: currentTheme.accent,
                      marginBottom: '6px'
                    }}
                  >
                    ────────────────────────────
                  </div>
                  <h1
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: '34px',
                      fontWeight: 900,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: currentTheme.text,
                      margin: '0 0 4px'
                    }}
                  >
                    {title}
                  </h1>
                  <p
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: '14px',
                      fontStyle: 'italic',
                      color: currentTheme.accent,
                      margin: 0
                    }}
                  >
                    {subtitle}
                  </p>
                  <div
                    style={{
                      marginTop: '10px',
                      fontSize: '11px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: currentTheme.accent
                    }}
                  >
                    {new Date().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>

                {/* Optional image */}
                {imageUrl && (
                  <div
                    style={{
                      marginBottom: '20px',
                      border: `2px solid ${currentTheme.border}`
                    }}
                  >
                    <img
                      src={imageUrl}
                      alt="Featured"
                      style={{
                        width: '100%',
                        display: 'block',
                        filter: 'sepia(0.25) contrast(1.05)'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Body text */}
                <div style={{ marginBottom: '24px' }}>
                  <div
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: currentTheme.text,
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {message}
                  </div>
                </div>

                {/* Quote */}
                {quote && (
                  <div
                    style={{
                      margin: '26px 0',
                      padding: '18px 22px',
                      fontStyle: 'italic',
                      textAlign: 'center',
                      backgroundColor: currentTheme.border + '40',
                      borderLeft: `4px solid ${currentTheme.accent}`,
                      borderRight: `4px solid ${currentTheme.accent}`
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        fontSize: '17px',
                        color: currentTheme.accent,
                        margin: 0
                      }}
                    >
                      {quote}
                    </p>
                  </div>
                )}

                {/* Sign off */}
                {signOff && (
                  <div style={{ textAlign: 'right', marginTop: '24px' }}>
                    <p
                      style={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        fontSize: '16px',
                        fontStyle: 'italic',
                        color: currentTheme.accent,
                        margin: 0
                      }}
                    >
                      {signOff}
                    </p>
                  </div>
                )}

                {/* Footer */}
                <div
                  style={{
                    marginTop: '26px',
                    paddingTop: '14px',
                    borderTop: `1.5px solid ${currentTheme.border}`,
                    textAlign: 'center',
                    fontSize: '11px',
                    color: currentTheme.accent,
                    fontFamily: 'Georgia, "Times New Roman", serif'
                  }}
                >
                  ✦ Published Weekly ✦ Volume I ✦
                </div>
              </div>

              {/* Bottom stripe */}
              <div
                style={{
                  height: '4px',
                  background: `repeating-linear-gradient(90deg, ${currentTheme.accent} 0px, ${currentTheme.accent} 10px, ${currentTheme.bg} 10px, ${currentTheme.bg} 20px)`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
