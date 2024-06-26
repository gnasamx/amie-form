import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      black: "rgb(var(--black) / <alpha-value>)",
      white: "rgb(var(--white) / <alpha-value>)",
      gray: {
        50: "rgb(var(--gray-050) / <alpha-value>)",
        75: "rgb(var(--gray-075) / <alpha-value>)",
        100: "rgb(var(--gray-100) / <alpha-value>)",
        150: "rgb(var(--gray-150) / <alpha-value>)",
        200: "rgb(var(--gray-200) / <alpha-value>)",
        250: "rgb(var(--gray-250) / <alpha-value>)",
        300: "rgb(var(--gray-300) / <alpha-value>)",
        350: "rgb(var(--gray-350) / <alpha-value>)",
        400: "rgb(var(--gray-400) / <alpha-value>)",
        450: "rgb(var(--gray-450) / <alpha-value>)",
        500: "rgb(var(--gray-500) / <alpha-value>)",
        550: "rgb(var(--gray-550) / <alpha-value>)",
        600: "rgb(var(--gray-600) / <alpha-value>)",
        650: "rgb(var(--gray-650) / <alpha-value>)",
        700: "rgb(var(--gray-700) / <alpha-value>)",
        740: "rgb(var(--gray-740) / <alpha-value>)",
        750: "rgb(var(--gray-750) / <alpha-value>)",
        800: "rgb(var(--gray-800) / <alpha-value>)",
        850: "rgb(var(--gray-850) / <alpha-value>)",
        870: "rgb(var(--gray-870) / <alpha-value>)",
        885: "rgb(var(--gray-885) / <alpha-value>)",
        900: "rgb(var(--gray-900) / <alpha-value>)",
        950: "rgb(var(--gray-950) / <alpha-value>)",
      },
      green: {
        100: "rgb(var(--green-100) / <alpha-value>)",
        200: "rgb(var(--green-200) / <alpha-value>)",
        300: "rgb(var(--green-300) / <alpha-value>)",
        400: "rgb(var(--green-400) / <alpha-value>)",
        500: "rgb(var(--green-500) / <alpha-value>)",
        600: "rgb(var(--green-600) / <alpha-value>)",
        700: "rgb(var(--green-700) / <alpha-value>)",
        800: "rgb(var(--green-800) / <alpha-value>)",
        900: "rgb(var(--green-900) / <alpha-value>)",
      },
      blue: {
        100: "rgb(var(--blue-100) / <alpha-value>)",
        200: "rgb(var(--blue-200) / <alpha-value>)",
        300: "rgb(var(--blue-300) / <alpha-value>)",
        400: "rgb(var(--blue-400) / <alpha-value>)",
        500: "rgb(var(--blue-500) / <alpha-value>)",
        600: "rgb(var(--blue-600) / <alpha-value>)",
        700: "rgb(var(--blue-700) / <alpha-value>)",
        800: "rgb(var(--blue-800) / <alpha-value>)",
        900: "rgb(var(--blue-900) / <alpha-value>)",
      },
      purple: {
        100: "rgb(var(--purple-100) / <alpha-value>)",
        200: "rgb(var(--purple-200) / <alpha-value>)",
        300: "rgb(var(--purple-300) / <alpha-value>)",
        400: "rgb(var(--purple-400) / <alpha-value>)",
        500: "rgb(var(--purple-500) / <alpha-value>)",
        600: "rgb(var(--purple-600) / <alpha-value>)",
        700: "rgb(var(--purple-700) / <alpha-value>)",
        800: "rgb(var(--purple-800) / <alpha-value>)",
        900: "rgb(var(--purple-900) / <alpha-value>)",
      },
      red: {
        100: "rgb(var(--red-100) / <alpha-value>)",
        200: "rgb(var(--red-200) / <alpha-value>)",
        300: "rgb(var(--red-300) / <alpha-value>)",
        400: "rgb(var(--red-400) / <alpha-value>)",
        500: "rgb(var(--red-500) / <alpha-value>)",
        600: "rgb(var(--red-600) / <alpha-value>)",
        700: "rgb(var(--red-700) / <alpha-value>)",
        800: "rgb(var(--red-800) / <alpha-value>)",
        900: "rgb(var(--red-900) / <alpha-value>)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
      fontSize: {
        xxs: "11px",
      },
      textColor: {
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary))",
        tertiary: "rgb(var(--color-tertiary))",
        placeholder: "rgb(var(--color-placeholder))",
      },
      backgroundColor: {
        background: "rgb(var(--color-background))",
      },
      borderColor: {
        separator: "rgb(var(--color-separator))",
        black: "rgb(var(--color-black))",
      },
      boxShadow: {
        feint:
          "0 1px 2px 0px rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.08)",
      },
      opacity: {
        7: "7%",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
