export const fontFamilyTokens = {
  sans: '"Manrope", sans-serif',
  mono: '"JetBrains Mono", monospace',
} as const

export const colorTokens = {
  background: {
    app: '#0B0C0E',
    surface: '#101113',
    surfaceAlt: '#131417',
    inset: '#0B0C0E',
  },
  border: {
    default: 'rgba(255, 255, 255, 0.06)',
    strong: 'rgba(255, 255, 255, 0.08)',
  },
  text: {
    primary: '#F4F5F6',
    secondary: '#8A8F98',
    muted: '#5A5F68',
    faint: '#6B7078',
    cardAccent: '#C4C8CE',
    cardAccentStrong: '#E4E6E9',
  },
  status: {
    positive: '#16C784',
    positiveTint: 'rgba(22, 199, 132, 0.12)',
    negative: '#F6465D',
    negativeTint: 'rgba(246, 70, 93, 0.12)',
  },
  favorite: '#F5B331',
  brandGradient: 'linear-gradient(140deg, #16C784 0%, #0EA46B 100%)',
} as const

export const typographyTokens = {
  h1Market: { fontFamily: fontFamilyTokens.sans, fontSize: 30, fontWeight: 800 },
  coinNameDetail: { fontFamily: fontFamilyTokens.sans, fontSize: 26, fontWeight: 800 },
  priceDetail: { fontFamily: fontFamilyTokens.mono, fontSize: 32, fontWeight: 700 },
  cardTitle: { fontFamily: fontFamilyTokens.sans, fontSize: 14, fontWeight: 700 },
  coinNameRow: { fontFamily: fontFamilyTokens.sans, fontSize: 15, fontWeight: 700 },
  priceRow: { fontFamily: fontFamilyTokens.mono, fontSize: 15, fontWeight: 600 },
  body: { fontFamily: fontFamilyTokens.sans, fontSize: 14, fontWeight: 500, lineHeight: 1.65 },
  captionSecondary: { fontFamily: fontFamilyTokens.sans, fontSize: 13, fontWeight: 600 },
  labelUppercase: {
    fontFamily: fontFamilyTokens.sans,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
  ticker: { fontFamily: fontFamilyTokens.mono, fontSize: 12, fontWeight: 600 },
  changePill: { fontFamily: fontFamilyTokens.mono, fontSize: 13, fontWeight: 700 },
  changePillDetail: { fontFamily: fontFamilyTokens.mono, fontSize: 15, fontWeight: 700 },
  nav: { fontFamily: fontFamilyTokens.sans, fontSize: 14, fontWeight: 700 },
  chip: { fontFamily: fontFamilyTokens.sans, fontSize: 13, fontWeight: 700 },
  timeframe: { fontFamily: fontFamilyTokens.sans, fontSize: 12, fontWeight: 700 },
} as const
