/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      inter: ["Inter-Regular, sans-serif"],
      "inter-100": ["Inter-Thin", "sans-serif"],
      "inter-200": ["Inter-ExtraLight", "sans-serif"],
      "inter-300": ["Inter-Light", "sans-serif"],
      "inter-400": ["Inter-Regular", "sans-serif"],
      "inter-500": ["Inter-Medium", "sans-serif"],
      "inter-600": ["Inter-SemiBold", "sans-serif"],
      "inter-700": ["Inter-Bold", "sans-serif"],
      "inter-800": ["Inter-ExtraBold", "sans-serif"],
      "inter-900": ["Inter-Black", "sans-serif"],
    },
    fontSize: {
      xs: ["12px", { lineHeight: "22px", letterSpacing: "-0.02rem" }],
      sm: ["14px", { lineHeight: "26px", letterSpacing: "-0.02rem" }],
      lg: ["16px", { lineHeight: "26px", letterSpacing: "-0.02rem" }],
      xl: ["22px", { lineHeight: "34px", letterSpacing: "-0.02rem" }],
      "2xl": ["34px", { lineHeight: "46px", letterSpacing: "-0.022rem" }],
      "3xl": ["46px", { lineHeight: "54px", letterSpacing: "-0.022rem" }],
      "4xl": ["54px", { lineHeight: "62px", letterSpacing: "-0.022rem" }],
      "5xl": ["78px", { lineHeight: "78px", letterSpacing: "-0.022rem" }],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
