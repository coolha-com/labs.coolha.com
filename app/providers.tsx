// app/providers.jsx

"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }: any) {
  return (
    <div>
      <ThemeProvider>{children}</ThemeProvider>
    </div>
  );
}

