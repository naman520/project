"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animations.css"
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';
import LoadingScreen from './LoadingScreen';


export default function RootLayout({ children }) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="antialiased">
        <LoadingScreen />
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}>
          {children}
        </PageTransition>
      </AnimatePresence>
      </body>
    </html>
  )
}
