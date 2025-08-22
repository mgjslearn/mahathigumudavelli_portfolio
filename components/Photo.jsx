"use client";
import {motion} from "framer-motion";
import Image from "next/image"; 


const Photo = () => {
  return (
  <div className="w-full h-full flex items-center justify-center relative mt-6">
      <div className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] flex items-center justify-center">
        {/* Animated dotted circle border - moved slightly right and bigger */}
        <motion.svg
          className="absolute top-1/2 left-1/2 -translate-x-[49%] -translate-y-1/2 w-[340px] h-[340px] xl:w-[540px] xl:h-[540px] pointer-events-none"
          fill="transparent"
          viewBox="0 0 540 540"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="270"
            cy="270"
            r="260"
            stroke="#8b5cf6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
        {/* Photo with blend and mask */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
          className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 60% 50% at 50% 45%, white 60%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 60% 50% at 50% 45%, white 60%, transparent 100%)',
          }}
        >
          <Image src="/assets/photo.png" priority quality={100} fill alt="" className="object-contain mix-blend-lighten" />
        </motion.div>
      </div>
    </div>
  );
};

export default Photo        