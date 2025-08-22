"use client";


import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Stairs from "./Stairs";



const StairTransition = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const timeout = setTimeout(() => setShow(false), 1200); // 2.9s for full stair animation
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!show) return null;

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div
          className="h-screen w-screen fixed top-0 left-0 right-0 z-40 flex bg-black pointer-events-none"
          style={{ pointerEvents: 'none' }}
        >
          <Stairs />
        </div>
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-event-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition ;