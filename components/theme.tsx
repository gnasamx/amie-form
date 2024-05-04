"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      disableTransitionOnChange
      defaultTheme="light"
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  );
}
