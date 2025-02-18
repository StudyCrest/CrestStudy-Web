import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6d28d9", // Light shade of primary
          DEFAULT: "#4c1d95", // Main primary color
          dark: "#3b0764", // Darker shade of primary
        },
        secondary: {
          light: "#34d399", // Light shade of secondary
          DEFAULT: "#10b981", // Main secondary color (green)
          dark: "#047857", // Darker shade of secondary
        },
        neutral: {
          light: "#f3f4f6", // Light gray
          DEFAULT: "#9ca3af", // Medium gray (Default neutral)
          dark: "#111827", // Dark gray (Almost black)
        },
        accent: "#f59e0b", // Accent color (orange-yellow)
        "studycrest-primary": "#048BDC",
        "studycrest-1": "#E6F3FC66",
        "studycrest-2": "#CED0D333",
        "studycrest-3": "#637A87",
        "studycrest-4": "#81848F",
        "studycrest-5": "#ABAEB5",
        "studycrest-6": "#242428",
        "studycrest-7": "#B1BEC6",
        "studycrest-8": "#E4E8EB80",
        "studycrest-9": "#CED0D34D",
        "studycrest-10": "#E6F3FC99",
        "studycrest-11": "#E6F3FC",
        "studycrest-12": "#96A7B2",
        "studycrest-13": "#14181B",
        "studycrest-14": "#E4E8EB",
        "studycrest-15": "#E6F3FCB2",
        "studycrest-16": "#93CDF0",
        "studycrest-17": "#EFF2F4",
        "studycrest-18": "#283136",
        "studycrest-19": "#023F63",
        "studycrest-20": "#FBFCFC",
        "studycrest-21": "#D8DFE3",
      },
      width: {
        xs: "20rem", // Custom width for extra small components
        sm: "24rem", // Small width
        md: "28rem", // Medium width
        lg: "32rem", // Large width
        xl: "36rem", // Extra large width
        "2xl": "42rem", // Double extra large width
        full: "100%", // Full width
        screen: "100vw", // Full viewport width
      },
      lineHeight: {
        normal: "19.2px",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "108": "27rem", // Adding extra spacing
      },
      fontSize: {
        xxs: "0.65rem", // Extra extra small font size
        xxl: "1.75rem", // Larger than default "xl"
        xxxl: "2rem", // Extra large font size
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px", // Fully rounded corners
      },
      zIndex: {
        "-10": "-10", // Negative z-index for layering purposes
        "60": "60", // Custom higher z-index level
      },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow
        "custom-dark": "0 6px 12px rgba(0, 0, 0, 0.2)", // Darker shadow
        main: "0px 0px 42px 0px rgba(0, 0, 0, 0.1)"
      },
      transitionDuration: {
        "0": "0ms",
        "2000": "2000ms",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #EFF2F4 0%, rgba(239, 242, 244, 0) 100%)",
      }
    },
  },
  plugins: [],
};
export default config;
