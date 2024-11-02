"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import * as React from "react";
import { useTheme } from "../context/themeContext";
import { darkTheme, lightTheme } from "../../../ui/ThemeRegistry/theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useTheme(); // Use context to determine theme

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
