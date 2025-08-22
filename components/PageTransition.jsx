"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ delay: 0, duration: 0.4, ease: "easeInOut" }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-50"
      />
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;