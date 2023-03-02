export const styles = {
  colors: {
    // Primary Colors:
    primary_pure: "#323849",
    primary_100: "#2A2F3E",
    primary_200: "#454B5F",
    primary_300: "#989BA3",
    primary_400: "#D6D7DB",

    // Secundary Colors:
    secundary_pure: "#FFFFFF",
    secundary_100: "#FAFAFA",
    secundary_200: "#F4F4F4",
    secundary_300: "#E6E6E6",

    // Feedback Colors:
    positive_pure: "#016706",
    positive_100: "#009607",

    negative_pure: "#DF0202",
    negative_100: "#FF1717",
  },
  fonts: {
    title_large: {
      "font-family": "Montserrat-600",
      "font-size": "20px",
      "font-style": "normal",
    },
    title_medium: {
      "font-family": "Montserrat-600",
      "font-size": "16px",
      "font-style": "normal",
    },
    title_small: {
      "font-family": "Montserrat-600",
      "font-size": "14px",
      "font-style": "normal",
    },
    heading_100: {
      "font-family": "Montserrat-400",
      "font-size": "14px",
      "font-style": "normal",
    },
    heading_200: {
      "font-family": "Montserrat-400",
      "font-size": "12px",
      "font-style": "normal",
    },
    heading_300: {
      "font-family": "Montserrat-300",
      "font-size": "10px",
      "font-style": "normal",
    },
  },
  spacing: {
    spacing_004: "4px",
    spacing_008: "8px",
    spacing_012: "12px",
    spacing_016: "16px",
    spacing_024: "24px",
    spacing_032: "32px",
    spacing_040: "40px",
    spacing_048: "48px",
    spacing_056: "56px",
    spacing_064: "64px",
    spacing_072: "72px",
    spacing_080: "80px",
    spacing_096: "96px",
    spacing_104: "104px",
  },
};

export type IThemeColors =
  | "primary_pure"
  | "primary_100"
  | "primary_200"
  | "primary_300"
  | "primary_400"
  | "secundary_pure"
  | "secundary_100"
  | "secundary_200"
  | "secundary_300"
  | "positive_pure"
  | "positive_100"
  | "negative_pure"
  | "negative_100";
