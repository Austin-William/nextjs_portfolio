"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TransitionEffect() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>

      </div>
    </AnimatePresence>
  )
}