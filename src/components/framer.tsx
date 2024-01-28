"use client";
import React, { useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

export default function ScaleInView({
  children,
}: {
  children: React.ReactNode;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
}
