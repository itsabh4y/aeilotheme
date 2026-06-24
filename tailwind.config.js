/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "surface-container": "#eeeef0",
        "surface-dim": "#dadadc",
        "on-surface-variant": "#414755",
        "on-secondary": "#ffffff",
        "background": "#f9f9fc",
        "inverse-surface": "#2f3133",
        "on-primary-fixed": "#001a41",
        "on-surface": "#1a1c1e",
        "on-primary-container": "#fefcff",
        "inverse-on-surface": "#f0f0f3",
        "tertiary": "#585c60",
        "primary-fixed-dim": "#adc6ff",
        "on-secondary-fixed": "#2e1500",
        "error": "#ba1a1a",
        "surface-container-high": "#e8e8ea",
        "tertiary-container": "#717579",
        "secondary-container": "#fe9832",
        "secondary": "#8f4e00",
        "secondary-fixed-dim": "#ffb77a",
        "tertiary-fixed": "#e0e3e7",
        "surface-tint": "#005bc1",
        "on-error": "#ffffff",
        "on-primary": "#ffffff",
        "on-secondary-container": "#683700",
        "error-container": "#ffdad6",
        "outline": "#717786",
        "on-error-container": "#93000a",
        "primary-fixed": "#d8e2ff",
        "surface-variant": "#e2e2e5",
        "surface-bright": "#f9f9fc",
        "surface-container-lowest": "#ffffff",
        "on-background": "#1a1c1e",
        "outline-variant": "#c1c6d7",
        "on-tertiary": "#ffffff",
        "primary": "#0058bc",
        "on-tertiary-container": "#fcfcff",
        "surface": "#f9f9fc",
        "surface-container-highest": "#e2e2e5",
        "primary-container": "#0070eb",
        "on-primary-fixed-variant": "#004493",
        "secondary-fixed": "#ffdcc2",
        "on-secondary-fixed-variant": "#6d3a00",
        "on-tertiary-fixed-variant": "#43474b",
        "tertiary-fixed-dim": "#c3c7cb",
        "on-tertiary-fixed": "#181c1f",
        "inverse-primary": "#adc6ff",
        "surface-container-low": "#f3f3f6"
      },
      spacing: {
        "stack-md": "24px",
        "container-max": "1440px",
        "gutter": "24px",
        "margin-page": "40px",
        "unit": "8px",
        "stack-lg": "48px",
        "stack-sm": "12px"
      },
      fontFamily: {
        "h3": ["Space Grotesk"],
        "h1": ["Space Grotesk"],
        "body-md": ["Inter"],
        "body-lg": ["Inter"],
        "h2": ["Space Grotesk"],
        "label-caps": ["Space Grotesk"]
      },
      fontSize: {
        "h3": ["24px", {"lineHeight": "1.3", "letterSpacing": "0", "fontWeight": "600"}],
        "h1": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "body-md": ["16px", {"lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
        "h2": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "700"}]
      }
    },
  },

  plugins: [],
}


