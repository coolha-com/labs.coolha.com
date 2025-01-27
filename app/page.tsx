// app/page.tsx
'use client'
import { redirect } from "next/navigation";

export default function Page() {
  // 重定向到 /en
  redirect('/en');
}
