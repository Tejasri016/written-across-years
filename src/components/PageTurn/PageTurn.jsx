import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./PageTurn.css";

export default function PageTurn() {
  const [turning, setTurning] = useState(false);

  useEffect(() => {
    const handleTurn = () => {
      setTurning(true);

      setTimeout(() => {
        setTurning(false);
      }, 1500);
    };

    window.addEventListener("story:page-turn", handleTurn);

    return () => {
      window.removeEventListener("story:page-turn", handleTurn);
    };
  }, []);

  return (
    <AnimatePresence>
      {turning && (
        <motion.div
          className="page-turn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* LEFT PAGE */}
          <motion.div
            className="turn-page turn-left"
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {/* RIGHT PAGE */}
          <motion.div
            className="turn-page turn-right"
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {/* CENTER SPINE */}
          <div className="turn-spine">
            <span>✦</span>
          </div>

          {/* CLOSING SHADOW */}
          <motion.div
            className="turn-close"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.75,
              duration: 0.55,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}