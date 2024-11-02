import type { Metadata } from "next";

import Header from "../../../ui/clientSide/super-app-home/Header";
import { ThemeProvider } from "../context/themeContext";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ThemeRegistry>
            <Header />
            {children}
          </ThemeRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
